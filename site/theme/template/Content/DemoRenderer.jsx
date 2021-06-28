/* eslint-disable */
import React, { useEffect, useRef, useState, Component } from "react"
import ReactDOM from "react-dom"
import { transform } from "@babel/standalone"
import {
  Affix,
  Alert,
  Breadcrumb,
  Button,
  Card,
  Cascader,
  Checkbox,
  ColorPicker,
  ConfigProvider,
  DatePicker,
  Dialog,
  Drawer,
  Form,
  Grid,
  Icon,
  Input,
  Layout,
  Menu,
  Message,
  Motion,
  Nav,
  NumericInput,
  Pagination,
  Popconfirm,
  Popover,
  PopTrigger,
  Radio,
  ResizeObserver,
  Select,
  Slider,
  Spinner,
  Suggest,
  Switch,
  Tabs,
  Table,
  Tag,
  TimePicker,
  Tooltip,
  Transition,
  TreeSelect,
  Upload,
} from "componentPath"

export default class DemoRenderer extends Component {
  componentDidMount = () => {
    const { lang, codes } = this.props

    if (this.demoWrapper) {
      const output = transform(
        `
        const Demo = () => {
          ${codes}
        }
        
        __rtn = (function() {
          return <Demo {...context.props} />
        })()

      `,
        { presets: ["env", "react"] }
      ).code.replace("__rtn = ", "return ")
      ReactDOM.unmountComponentAtNode(this.demoWrapper)
      const args = [
        "context",
        "useEffect",
        "useRef",
        "useState",
        "React",
        "ReactDOM",
        "Affix",
        "Alert",
        "Breadcrumb",
        "Button",
        "Card",
        "Cascader",
        "Checkbox",
        "ColorPicker",
        "ConfigProvider",
        "DatePicker",
        "Dialog",
        "Drawer",
        "Form",
        "Grid",
        "Icon",
        "Input",
        "Layout",
        "Menu",
        "Message",
        "Motion",
        "Nav",
        "NumericInput",
        "Pagination",
        "Popconfirm",
        "Popover",
        "PopTrigger",
        "Radio",
        "ResizeObserver",
        "Select",
        "Slider",
        "Spinner",
        "Suggest",
        "Switch",
        "Tabs",
        "Table",
        "Tag",
        "TimePicker",
        "Tooltip",
        "Transition",
        "TreeSelect",
        "Upload",
      ]
      const argv = [this, useEffect, useRef, useState, React, ReactDOM]
      args.push(output)
      argv.push(
        Affix,
        Alert,
        Breadcrumb,
        Button,
        Card,
        Cascader,
        Checkbox,
        ColorPicker,
        ConfigProvider,
        DatePicker,
        Dialog,
        Drawer,
        Form,
        Grid,
        Icon,
        Input,
        Layout,
        Menu,
        Message,
        Motion,
        Nav,
        NumericInput,
        Pagination,
        Popconfirm,
        Popover,
        PopTrigger,
        Radio,
        ResizeObserver,
        Select,
        Slider,
        Spinner,
        Suggest,
        Switch,
        Tabs,
        Table,
        Tag,
        TimePicker,
        Tooltip,
        Transition,
        TreeSelect,
        Upload
      )
      setTimeout(() => {
        ReactDOM.render(
          new Function(...args).apply(null, argv),
          this.demoWrapper
        )
      }, 50)
    }
  }

  componentWillUnmount = () => {
    if (this.demoWrapper) {
      ReactDOM.unmountComponentAtNode(this.demoWrapper)
    }
  }

  render() {
    const { codes, ...otherProps } = this.props
    return (
      <section
        {...otherProps}
        ref={(demoWrapper) => {
          this.demoWrapper = demoWrapper
        }}
      />
    )
  }
}
