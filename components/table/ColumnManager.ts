import React from "react"

interface IBaseObject {
  [key: string]: any
}

export default class ColumnManager {
  public cached: any = {}

  public columns: IBaseObject[]

  constructor(elements: IBaseObject[]) {
    this.columns = this.normalize(elements)
  }

  public isAnyColumnsFixed = () =>
    this.cache("isAnyColumnsFixed", () =>
      this.columns.some((column: IBaseObject) => !!column.fixed)
    )

  public isAnyColumnsLeftFixed = () =>
    this.cache("isAnyColumnsLeftFixed", () =>
      this.columns.some(
        (column: IBaseObject) =>
          column.fixed === "left" || column.fixed === true
      )
    )

  public isAnyColumnsRightFixed = () =>
    this.cache("isAnyColumnsRightFixed", () =>
      this.columns.some((column: IBaseObject) => column.fixed === "right")
    )

  public getLeftColumns = () =>
    this.cache("getLeftColumns", () =>
      this.columns.filter(
        (column: IBaseObject) =>
          column.fixed === "left" || column.fixed === true
      )
    )

  public getMainColumns = () =>
    this.cache("getMainColumns", () =>
      this.columns.filter((column: IBaseObject) => !column.fixed)
    )

  public getRightColumns = () =>
    this.cache("getRightColumns", () =>
      this.columns.filter((column: IBaseObject) => column.fixed === "right")
    )

  public getColumns = () => [
    ...this.getLeftColumns(),
    ...this.getMainColumns(),
    ...this.getRightColumns(),
  ]

  public getLeftColumnsWidth = () =>
    this.cache("getLeftColumnsWidth", () =>
      this.getColumnsWidthBase(this.getLeftColumns())
    )

  public getRightColumnsWidth = () =>
    this.cache("getRightColumnsWidth", () =>
      this.getColumnsWidthBase(this.getRightColumns())
    )

  public getGroupColumnsDepth = () =>
    this.cache("getGroupColumnsDepth", () => {
      let depth = 1
      const children = this.columns.filter(
        (column: IBaseObject) => !!column.children
      )
      if (children.length) {
        depth = 2
        children.forEach(child => {
          const grands = child.children.some(
            (grand: IBaseObject) => !!grand.children
          )
          if (grands) {
            depth = 3
          }
        })
      }
      return depth
    })

  public getColumnsWidthBase = (columns: IBaseObject[]) => {
    let sum = "calc("
    columns.forEach((column: IBaseObject) => {
      const { width } = column
      if (typeof width === "number") {
        sum += `${width}px + `
      } else {
        sum += `${width} + `
      }
    })
    return `${sum.slice(0, -2)})`
  }

  public normalize = (elementsParam: IBaseObject[]) => {
    const columns: IBaseObject[] = []
    const elements = Array.isArray(elementsParam)
      ? elementsParam
      : [elementsParam]
    if (elements.find(o => React.isValidElement(o))) {
      React.Children.forEach(elements, element => {
        /**
         * Column 名存实亡，实际上是从 children 获取每一列的 props
         * 因此需要判断 children isValidElement，再从 children 遍历 prop
         */
        if (!React.isValidElement(element)) {
          return
        }
        const column: any = { ...(element.props as {}) }
        let { children } = column
        if (children) {
          children = Array.isArray(children) ? children : [children]
          column.children = this.normalize(children)
        }
        columns.push(column)
      })
    } else {
      elements.forEach(o => {
        columns.push(o)
      })
    }
    return columns
  }

  public reset = (elements: IBaseObject[]) => {
    this.columns = this.normalize(elements)
    this.cached = {}
  }

  public cache = (name: string, fn: () => void) => {
    if (name in this.cached) {
      return this.cached[name]
    }
    this.cached[name] = fn()
    return this.cached[name]
  }
}
