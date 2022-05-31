/* eslint-disable */
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import JsonML from "jsonml.js/lib/utils"
import capitalize from "capitalize"
import { transform } from "@babel/standalone"
import classNames from "classnames"
import { Alert, Icon, Input, Switch, Select, Table, Tag } from "componentPath"

const Option = Select.Option
import * as Components from "componentPath"
import IconSvgPaths from "componentPath/icon/IconSvgPaths"
import { default as AffixRaw } from "!raw-loader!../../../../components/affix/Affix"
import { default as AlertRaw } from "!raw-loader!../../../../components/alert/Alert"
import { default as BreadcrumbRaw } from "!raw-loader!../../../../components/breadcrumb/Breadcrumb"
import { default as BreadcrumbItemRaw } from "!raw-loader!../../../../components/breadcrumb/Item"
import { default as ButtonRaw } from "!raw-loader!../../../../components/button/Button"
import { default as ButtonGroupRaw } from "!raw-loader!../../../../components/button-group/Group"
import { default as CardRaw } from "!raw-loader!../../../../components/card/Card"
import { default as CardHeaderRaw } from "!raw-loader!../../../../components/card/Header"
import { default as CascaderRaw } from "!raw-loader!../../../../components/cascader/Cascader"
import { default as CheckboxRaw } from "!raw-loader!../../../../components/checkbox/Checkbox"
import { default as CheckboxGroupRaw } from "!raw-loader!../../../../components/checkbox/Group"
import { default as ColorPickerRaw } from "!raw-loader!../../../../components/color-picker/ColorPicker"
import { default as ConfigProviderRaw } from "!raw-loader!../../../../components/config-provider/ConfigProvider"
import { default as DatePickerRaw } from "!raw-loader!../../../../components/date-picker/DatePicker"
import { default as DatePickerRangePickerRaw } from "!raw-loader!../../../../components/date-picker/RangePicker"
import { default as DialogRaw } from "!raw-loader!../../../../components/dialog/Dialog"
import { default as DrawerRaw } from "!raw-loader!../../../../components/drawer/Drawer"
import { default as FormRaw } from "!raw-loader!../../../../components/form/Form"
import { default as FormItemRaw } from "!raw-loader!../../../../components/form/Item"
import { default as FormTipRaw } from "!raw-loader!../../../../components/form/Tip"
import { default as GridColRaw } from "!raw-loader!../../../../components/grid/Col"
import { default as GridRowRaw } from "!raw-loader!../../../../components/grid/Row"
import { default as IconRaw } from "!raw-loader!../../../../components/icon/Icon"
import { default as InputRaw } from "!raw-loader!../../../../components/input/Input"
import { default as InputTextareaRaw } from "!raw-loader!../../../../components/input/Textarea"
import { default as LayoutRaw } from "!raw-loader!../../../../components/layout/Layout"
import { default as LayoutHeaderRaw } from "!raw-loader!../../../../components/layout/Header"
import { default as LayoutMainRaw } from "!raw-loader!../../../../components/layout/Main"
import { default as LayoutAsideRaw } from "!raw-loader!../../../../components/layout/Aside"
import { default as MessageRaw } from "!raw-loader!../../../../components/message/Message"
import { default as MenuRaw } from "!raw-loader!../../../../components/menu/Menu"
import { default as MenuSubMenuRaw } from "!raw-loader!../../../../components/menu/SubMenu"
import { default as MenuItemRaw } from "!raw-loader!../../../../components/menu/Item"
import { default as MotionRaw } from "!raw-loader!../../../../components/motion/Motion"
import { default as NavRaw } from "!raw-loader!../../../../components/nav/Nav"
import { default as NavItemRaw } from "!raw-loader!../../../../components/nav/Item"
import { default as NavSubNavRaw } from "!raw-loader!../../../../components/nav/SubNav"
import { default as NavGroupRaw } from "!raw-loader!../../../../components/nav/Group"
import { default as NavDividerRaw } from "!raw-loader!../../../../components/nav/Divider"
import { default as NumericInputRaw } from "!raw-loader!../../../../components/numeric-input/NumericInput"
import { default as PaginationRaw } from "!raw-loader!../../../../components/pagination/Pagination"
import { default as PopconfirmRaw } from "!raw-loader!../../../../components/popconfirm/Popconfirm"
import { default as PopoverRaw } from "!raw-loader!../../../../components/popover/Popover"
import { default as PortalRaw } from "!raw-loader!../../../../components/portal/Portal"
import { default as RadioRaw } from "!raw-loader!../../../../components/radio/Radio"
import { default as RadioGroupRaw } from "!raw-loader!../../../../components/radio/Group"
import { default as ResizeObserverRaw } from "!raw-loader!../../../../components/resize-observer/ResizeObserver"
import { default as SelectRaw } from "!raw-loader!../../../../components/select/Select"
import { default as SliderRaw } from "!raw-loader!../../../../components/slider/Slider"
import { default as SuggestRaw } from "!raw-loader!../../../../components/suggest/Suggest"
import { default as SpinnerRaw } from "!raw-loader!../../../../components/spinner/Spinner"
import { default as SwitchRaw } from "!raw-loader!../../../../components/switch/Switch"
import { default as TableRaw } from "!raw-loader!../../../../components/table/Table"
import { default as TableColumnRaw } from "!raw-loader!../../../../components/table/Column"
import { default as TabsRaw } from "!raw-loader!../../../../components/tabs/Tabs"
import { default as TabsTabRaw } from "!raw-loader!../../../../components/tabs/Tab"
import { default as TagRaw } from "!raw-loader!../../../../components/tag/Tag"
import { default as TimePickerRaw } from "!raw-loader!../../../../components/time-picker/TimePicker"
import { default as TooltipRaw } from "!raw-loader!../../../../components/tooltip/Tooltip"
import { default as TreeSelectRaw } from "!raw-loader!../../../../components/tree-select/TreeSelect"
import { default as TreeSelectTreeNodeRaw } from "!raw-loader!../../../../components/tree-select/TreeNode"
import { default as UploadImgRaw } from "!raw-loader!../../../../components/upload/Img"
import { default as UploadFileRaw } from "!raw-loader!../../../../components/upload/File"

import AffixPropertyBox from "../../../propertyBox/Affix"
import AlertPropertyBox from "../../../propertyBox/Alert"
import BreadcrumbPropertyBox from "../../../propertyBox/Breadcrumb"
import ButtonPropertyBox from "../../../propertyBox/Button"
import ButtonGroupPropertyBox from "../../../propertyBox/ButtonGroup"
import CardPropertyBox from "../../../propertyBox/Card"
import CascaderPropertyBox from "../../../propertyBox/Cascader"
import CheckboxPropertyBox from "../../../propertyBox/Checkbox"
import ColorPickerPropertyBox from "../../../propertyBox/ColorPicker"
import DatePickerPropertyBox from "../../../propertyBox/DatePicker"
import DialogPropertyBox from "../../../propertyBox/Dialog"
import DrawerPropertyBox from "../../../propertyBox/Drawer"
import FormPropertyBox from "../../../propertyBox/Form"
import GridPropertyBox from "../../../propertyBox/Grid"
import IconPropertyBox from "../../../propertyBox/Icon"
import InputPropertyBox from "../../../propertyBox/Input"
import MenuPropertyBox from "../../../propertyBox/Menu"
import MessagePropertyBox from "../../../propertyBox/Message"
import MotionPropertyBox from "../../../propertyBox/Motion"
import LayoutPropertyBox from "../../../propertyBox/Layout"
import NavPropertyBox from "../../../propertyBox/Nav"
import NumericInputPropertyBox from "../../../propertyBox/NumericInput"
import PaginationPropertyBox from "../../../propertyBox/Pagination"
import PopoverPropertyBox from "../../../propertyBox/Popover"
import PortalPropertyBox from "../../../propertyBox/Portal"
import RadioPropertyBox from "../../../propertyBox/Radio"
import ResizeObserverPropertyBox from "../../../propertyBox/ResizeObserver"
import SelectPropertyBox from "../../../propertyBox/Select"
import SliderPropertyBox from "../../../propertyBox/Slider"
import SpinnerPropertyBox from "../../../propertyBox/Spinner"
import SuggestPropertyBox from "../../../propertyBox/Suggest"
import SwitchPropertyBox from "../../../propertyBox/Switch"
import TablePropertyBox from "../../../propertyBox/Table"
import TabsPropertyBox from "../../../propertyBox/Tabs"
import TagPropertyBox from "../../../propertyBox/Tag"
import TooltipPropertyBox from "../../../propertyBox/Tooltip"
import TimePickerPropertyBox from "../../../propertyBox/TimePicker"

import { getChildren } from "jsonml.js/lib/utils"
const reactDocs = require("react-docgen")

const parsed = {
  Affix: {
    raw: AffixRaw,
    doc: reactDocs.parse(AffixRaw, undefined, undefined, {
      filename: "Affix.tsx",
    }),
  },
  Alert: {
    raw: AlertRaw,
    doc: reactDocs.parse(AlertRaw, undefined, undefined, {
      filename: "Alert.tsx",
    }),
  },
  Breadcrumb: {
    raw: BreadcrumbRaw,
    doc: reactDocs.parse(BreadcrumbRaw, undefined, undefined, {
      filename: "Breadcrumb.tsx",
    }),
  },
  "Breadcrumb.Item": {
    raw: BreadcrumbItemRaw,
    doc: reactDocs.parse(BreadcrumbItemRaw, undefined, undefined, {
      filename: "BreadcrumbItem.tsx",
    }),
  },
  Button: {
    raw: ButtonRaw,
    doc: reactDocs.parse(ButtonRaw, undefined, undefined, {
      filename: "Button.tsx",
    }),
  },
  "Button.Group": {
    raw: ButtonGroupRaw,
    doc: reactDocs.parse(ButtonGroupRaw, undefined, undefined, {
      filename: "ButtonGroup.tsx",
    }),
  },
  Card: {
    raw: CardRaw,
    doc: reactDocs.parse(CardRaw, undefined, undefined, {
      filename: "Card.tsx",
    }),
  },
  "Card.Header": {
    raw: CardHeaderRaw,
    doc: reactDocs.parse(CardHeaderRaw, undefined, undefined, {
      filename: "CardHeader.tsx",
    }),
  },
  Cascader: {
    raw: CascaderRaw,
    doc: reactDocs.parse(CascaderRaw, undefined, undefined, {
      filename: "Cascader.tsx",
    }),
  },
  Checkbox: {
    raw: CheckboxRaw,
    doc: reactDocs.parse(CheckboxRaw, undefined, undefined, {
      filename: "Checkbox.tsx",
    }),
  },
  "Checkbox.Group": {
    raw: CheckboxGroupRaw,
    doc: reactDocs.parse(CheckboxGroupRaw, undefined, undefined, {
      filename: "CheckboxGroup.tsx",
    }),
  },
  ColorPicker: {
    raw: ColorPickerRaw,
    doc: reactDocs.parse(ColorPickerRaw, undefined, undefined, {
      filename: "ColorPicker.tsx",
    }),
  },
  ConfigProvider: {
    raw: ConfigProviderRaw,
    doc: reactDocs.parse(ConfigProviderRaw, undefined, undefined, {
      filename: "ConfigProvider.tsx",
    }),
  },
  DatePicker: {
    raw: DatePickerRaw,
    doc: reactDocs.parse(DatePickerRaw, undefined, undefined, {
      filename: "DatePicker.tsx",
    }),
  },
  "DatePicker.RangePicker": {
    raw: DatePickerRangePickerRaw,
    doc: reactDocs.parse(DatePickerRangePickerRaw, undefined, undefined, {
      filename: "DatePickerRangePicker.tsx",
    }),
  },
  Dialog: {
    raw: DialogRaw,
    doc: reactDocs.parse(DialogRaw, undefined, undefined, {
      filename: "Dialog.tsx",
    }),
  },
  Drawer: {
    raw: DrawerRaw,
    doc: reactDocs.parse(DrawerRaw, undefined, undefined, {
      filename: "Drawer.tsx",
    }),
  },
  Form: {
    raw: FormRaw,
    doc: reactDocs.parse(FormRaw, undefined, undefined, {
      filename: "Form.tsx",
    }),
  },
  "Form.Item": {
    raw: FormItemRaw,
    doc: reactDocs.parse(FormItemRaw, undefined, undefined, {
      filename: "FormItem.tsx",
    }),
  },
  "Form.Tip": {
    raw: FormTipRaw,
    doc: reactDocs.parse(FormTipRaw, undefined, undefined, {
      filename: "FormTip.tsx",
    }),
  },
  "Grid.Col": {
    raw: GridColRaw,
    doc: reactDocs.parse(GridColRaw, undefined, undefined, {
      filename: "Col.tsx",
    }),
  },
  "Grid.Row": {
    raw: GridRowRaw,
    doc: reactDocs.parse(GridRowRaw, undefined, undefined, {
      filename: "Row.tsx",
    }),
  },
  Icon: {
    raw: IconRaw,
    doc: reactDocs.parse(IconRaw, undefined, undefined, {
      filename: "Icon.tsx",
    }),
  },
  Input: {
    raw: InputRaw,
    doc: reactDocs.parse(InputRaw, undefined, undefined, {
      filename: "Input.tsx",
    }),
  },
  "Input.Textarea": {
    raw: InputTextareaRaw,
    doc: reactDocs.parse(InputTextareaRaw, undefined, undefined, {
      filename: "Textarea.tsx",
    }),
  },
  Message: {
    raw: MessageRaw,
    doc: reactDocs.parse(MessageRaw, undefined, undefined, {
      filename: "Message.tsx",
    }),
  },
  Menu: {
    raw: MenuRaw,
    doc: reactDocs.parse(MenuRaw, undefined, undefined, {
      filename: "Menu.tsx",
    }),
  },
  "Menu.SubMenu": {
    raw: MenuSubMenuRaw,
    doc: reactDocs.parse(MenuSubMenuRaw, undefined, undefined, {
      filename: "Menu.tsx",
    }),
  },
  "Menu.Item": {
    raw: MenuItemRaw,
    doc: reactDocs.parse(MenuItemRaw, undefined, undefined, {
      filename: "MenuItem.tsx",
    }),
  },
  Layout: {
    raw: LayoutRaw,
    doc: reactDocs.parse(LayoutRaw, undefined, undefined, {
      filename: "Layout.tsx",
    }),
  },
  "Layout.Header": {
    raw: LayoutHeaderRaw,
    doc: reactDocs.parse(LayoutHeaderRaw, undefined, undefined, {
      filename: "LayoutHeader.tsx",
    }),
  },
  "Layout.Main": {
    raw: LayoutMainRaw,
    doc: reactDocs.parse(LayoutMainRaw, undefined, undefined, {
      filename: "LayoutMain.tsx",
    }),
  },
  "Layout.Aside": {
    raw: LayoutAsideRaw,
    doc: reactDocs.parse(LayoutAsideRaw, undefined, undefined, {
      filename: "LayoutAside.tsx",
    }),
  },
  Motion: {
    raw: MotionRaw,
    doc: reactDocs.parse(MotionRaw, undefined, undefined, {
      filename: "Motion.tsx",
    }),
  },
  Nav: {
    raw: NavRaw,
    doc: reactDocs.parse(NavRaw, undefined, undefined, {
      filename: "Nav.tsx",
    }),
  },
  "Nav.Item": {
    raw: NavItemRaw,
    doc: reactDocs.parse(NavItemRaw, undefined, undefined, {
      filename: "Item.tsx",
    }),
  },
  "Nav.Group": {
    raw: NavGroupRaw,
    doc: reactDocs.parse(NavGroupRaw, undefined, undefined, {
      filename: "Group.tsx",
    }),
  },
  "Nav.SubNav": {
    raw: NavSubNavRaw,
    doc: reactDocs.parse(NavSubNavRaw, undefined, undefined, {
      filename: "SubNav.tsx",
    }),
  },
  "Nav.Divider": {
    raw: NavDividerRaw,
    doc: reactDocs.parse(NavDividerRaw, undefined, undefined, {
      filename: "Divider.tsx",
    }),
  },
  NumericInput: {
    raw: NumericInputRaw,
    doc: reactDocs.parse(NumericInputRaw, undefined, undefined, {
      filename: "NumericInput.tsx",
    }),
  },
  Pagination: {
    raw: PaginationRaw,
    doc: reactDocs.parse(PaginationRaw, undefined, undefined, {
      filename: "Pagination.tsx",
    }),
  },
  Popconfirm: {
    raw: PopconfirmRaw,
    doc: reactDocs.parse(PopconfirmRaw, undefined, undefined, {
      filename: "Popconfirm.tsx",
    }),
  },
  Popover: {
    raw: PopoverRaw,
    doc: reactDocs.parse(PopoverRaw, undefined, undefined, {
      filename: "Popover.tsx",
    }),
  },
  Portal: {
    raw: PortalRaw,
    doc: reactDocs.parse(PortalRaw, undefined, undefined, {
      filename: "Portal.tsx",
    }),
  },
  Radio: {
    raw: RadioRaw,
    doc: reactDocs.parse(RadioRaw, undefined, undefined, {
      filename: "Radio.tsx",
    }),
  },
  "Radio.Group": {
    raw: RadioGroupRaw,
    doc: reactDocs.parse(RadioGroupRaw, undefined, undefined, {
      filename: "RadioGroup.tsx",
    }),
  },
  ResizeObserver: {
    raw: ResizeObserverRaw,
    doc: reactDocs.parse(ResizeObserverRaw, undefined, undefined, {
      filename: "ResizeObserver.tsx",
    }),
  },
  Select: {
    raw: SelectRaw,
    doc: reactDocs.parse(SelectRaw, undefined, undefined, {
      filename: "Select.tsx",
    }),
  },
  Slider: {
    raw: SliderRaw,
    doc: reactDocs.parse(SliderRaw, undefined, undefined, {
      filename: "Slider.tsx",
    }),
  },
  Spinner: {
    raw: SpinnerRaw,
    doc: reactDocs.parse(SpinnerRaw, undefined, undefined, {
      filename: "Spinner.tsx",
    }),
  },
  Suggest: {
    raw: SuggestRaw,
    doc: reactDocs.parse(SuggestRaw, undefined, undefined, {
      filename: "Suggest.tsx",
    }),
  },
  Switch: {
    raw: SwitchRaw,
    doc: reactDocs.parse(SwitchRaw, undefined, undefined, {
      filename: "Switch.tsx",
    }),
  },
  Table: {
    raw: TableRaw,
    doc: reactDocs.parse(TableRaw, undefined, undefined, {
      filename: "Table.tsx",
    }),
  },
  "Table.Column": {
    raw: TableColumnRaw,
    doc: reactDocs.parse(TableColumnRaw, undefined, undefined, {
      filename: "Column.tsx",
    }),
  },
  Tabs: {
    raw: TabsRaw,
    doc: reactDocs.parse(TabsRaw, undefined, undefined, {
      filename: "Tabs.tsx",
    }),
  },
  "Tabs.Tab": {
    raw: TabsTabRaw,
    doc: reactDocs.parse(TabsTabRaw, undefined, undefined, {
      filename: "Tab.tsx",
    }),
  },
  Tag: {
    raw: TagRaw,
    doc: reactDocs.parse(TagRaw, undefined, undefined, {
      filename: "Tag.tsx",
    }),
  },
  TimePicker: {
    raw: TimePickerRaw,
    doc: reactDocs.parse(TimePickerRaw, undefined, undefined, {
      filename: "TimePicker.tsx",
    }),
  },
  Tooltip: {
    raw: TooltipRaw,
    doc: reactDocs.parse(TooltipRaw, undefined, undefined, {
      filename: "Tooltip.tsx",
    }),
  },
  TreeSelect: {
    raw: TreeSelectRaw,
    doc: reactDocs.parse(TreeSelectRaw, undefined, undefined, {
      filename: "TreeSelect.tsx",
    }),
  },
  "TreeSelect.TreeNode": {
    raw: TreeSelectTreeNodeRaw,
    doc: reactDocs.parse(TreeSelectTreeNodeRaw, undefined, undefined, {
      filename: "TreeNode.tsx",
    }),
  },
  "Upload.Img": {
    raw: UploadImgRaw,
    doc: reactDocs.parse(UploadImgRaw, undefined, undefined, {
      filename: "UploadImgRaw.tsx",
    }),
  },
  "Upload.File": {
    raw: UploadFileRaw,
    doc: reactDocs.parse(UploadFileRaw, undefined, undefined, {
      filename: "UploadFileRaw.tsx",
    }),
  },
}
const propertyboxes = {
  Affix: AffixPropertyBox,
  Alert: AlertPropertyBox,
  Breadcrumb: BreadcrumbPropertyBox,
  Button: ButtonPropertyBox,
  ButtonGroup: ButtonGroupPropertyBox,
  Card: CardPropertyBox,
  Cascader: CascaderPropertyBox,
  Checkbox: CheckboxPropertyBox,
  ColorPicker: ColorPickerPropertyBox,
  DatePicker: DatePickerPropertyBox,
  Dialog: DialogPropertyBox,
  Drawer: DrawerPropertyBox,
  Form: FormPropertyBox,
  Grid: GridPropertyBox,
  Icon: IconPropertyBox,
  Input: InputPropertyBox,
  Menu: MenuPropertyBox,
  Message: MessagePropertyBox,
  Layout: LayoutPropertyBox,
  Nav: NavPropertyBox,
  NumericInput: NumericInputPropertyBox,
  Pagination: PaginationPropertyBox,
  Popover: PopoverPropertyBox,
  Portal: PortalPropertyBox,
  Radio: RadioPropertyBox,
  ResizeObserver: ResizeObserverPropertyBox,
  Select: SelectPropertyBox,
  Slider: SliderPropertyBox,
  Spinner: SpinnerPropertyBox,
  Suggest: SuggestPropertyBox,
  Switch: SwitchPropertyBox,
  Table: TablePropertyBox,
  Tag: TagPropertyBox,
  Tabs: TabsPropertyBox,
  TimePicker: TimePickerPropertyBox,
  Tooltip: TooltipPropertyBox,
}
import Demo from "./Demo"
import styles from "./ComponentDoc.scss"
import DemoRenderer from "./DemoRenderer"

export default class ComponentDoc extends React.Component {
  getComponentType = (raw) => {
    if (raw.includes("forwardRef")) {
      return "ForwardRef Component"
    }

    if (raw.includes("extends React.Component")) {
      return "Class Component"
    }
    return "Function Component"
  }

  render() {
    const { doc, demos, utils, location } = this.props
    const { alert, content, meta, props } = doc

    const [...contentClone] = content

    const reactCode = contentClone.find(
      (o) => o[0] && o[1] && o[0] === "pre" && o[1].lang === "jsx"
    )
    const reactCodeIndex = contentClone.findIndex(
      (o) => o[0] && o[1] && o[0] === "pre" && o[1].lang === "jsx"
    )
    if (reactCodeIndex > -1) {
      contentClone.splice(reactCodeIndex, 1)
    }

    let demoos
    if (demos) {
      demoos = Object.keys(demos).map((key) => demos[key])
    }

    /**
     * acss page
     */
    let acssClassNames = contentClone.find(
      (o) => o[0] && o[1] && o[0] === "pre" && o[1].lang === "json classes"
    )
    const acssClassNamesIndex = contentClone.findIndex(
      (o) => o[0] && o[1] && o[0] === "pre" && o[1].lang === "json classes"
    )
    if (acssClassNamesIndex > -1) {
      contentClone.splice(acssClassNamesIndex, 1)
    }
    const acssDemo = contentClone.find(
      (o) => o[0] && o[1] && o[0] === "pre" && o[1].lang === "jsx acss"
    )
    const acssDemoIndex = contentClone.findIndex(
      (o) => o[0] && o[1] && o[0] === "pre" && o[1].lang === "jsx acss"
    )
    if (acssDemoIndex > -1) {
      contentClone.splice(acssDemoIndex, 1)
    }

    if (acssClassNames && acssClassNames[2] && acssClassNames[2][1]) {
      acssClassNames = JSON.parse(acssClassNames[2][1])
    }

    /**
     * title：组件英文名；
     * subtitle：组件中文名。
     */
    const { title, subtitle } = meta
    const Property = propertyboxes[title] || null

    return (
      <div
        className={
          location.pathname.includes("doc") |
          location.pathname.includes("changelog")
            ? styles.docWrapper
            : styles.componentWrapper
        }
      >
        <h1 className="componentTitle scrollPoint">
          {subtitle} {title}
          {parsed[title]?.raw && (
            <Tag
              style={{
                position: "relative",
                top: "-16px",
                left: "10px",
                color: "var(--gray-600)",
                fontWeight: "normal",
                opacity: 0.5,
              }}
              size="mini"
            >
              {this.getComponentType(parsed[title].raw)}
            </Tag>
          )}
        </h1>
        {contentClone &&
          utils.toReactComponent(
            ["section", { className: "markdown" }].concat(
              getChildren(contentClone)
            )
          )}
        {Property ? <Property /> : null}
        {acssClassNames && (
          <Table
            height={500}
            dataSource={Object.keys(acssClassNames).map((o) => ({
              class: o,
              properties: acssClassNames[o],
            }))}
            columns={[
              {
                dataIndex: "class",
                title: "类名",
                width: 300,
                render: ({ class: c }) => (
                  <span
                    style={{
                      color: "rgb(124,58,237)",
                      fontFamily: "SFMono-medium",
                      whiteSpace: "break-spaces",
                    }}
                  >
                    {c}
                  </span>
                ),
              },
              {
                dataIndex: "properties",
                title: "属性",
                render: ({ properties }) => (
                  <span
                    style={{
                      color: "rgb(2,132,199)",
                      fontFamily: "SFMono-medium",
                      whiteSpace: "break-spaces",
                    }}
                  >
                    {properties}
                  </span>
                ),
              },
            ]}
          />
        )}
        {acssDemo && (
          <>
            <h2>示例</h2>
            <Demo
              content={["article", acssDemo]}
              utils={utils}
              defaultExpanded
            />
          </>
        )}
        {demoos && !!demoos.length && (
          <div className={classNames("scrollPoint", styles.demoTitle)}>
            常用示例
          </div>
        )}
        {demoos
          ? demoos
              .sort((a, b) => a.meta.order - b.meta.order)
              .map((demo, index) => {
                return (
                  <Demo
                    {...demo}
                    key={demo.meta.filename}
                    utils={utils}
                    location={location}
                  />
                )
              })
          : null}
        {!!reactCode && (
          <DemoRenderer codes={JsonML.getChildren(reactCode)[0][1]} />
        )}
        {alert ? (
          <div
            style={{
              paddingTop: "36px",
              borderTop: "1px dashed var(--gray-500)",
            }}
          >
            <Alert
              size="medium"
              title={alert[0][1]}
              className={styles.alert}
              text={utils.toReactComponent(
                ["section", { className: "markdown" }].concat(
                  getChildren(alert[1])
                )
              )}
            />
          </div>
        ) : null}
        {!!props &&
          props.map((prop, index) => {
            if (typeof prop !== "string") {
              const propName = prop[1]
              const docProps = parsed[propName]?.doc?.props
              const dataSource = []
              if (docProps) {
                Object.keys(docProps).forEach((docProp) => {
                  const { defaultValue, description, type, tsType } =
                    docProps[docProp]
                  dataSource.push({
                    docProp,
                    defaultValue,
                    description,
                    type,
                    tsType,
                  })
                })
              }

              return (
                <section key={index} className="propsSection">
                  <div
                    style={{
                      marginTop: "72px",
                      marginBottom: "20px",
                      fontSize: "24px",
                      lineHeight: "28px",
                      color: "#1f1f1f",
                      fontWeight: 600,
                    }}
                    className="scrollPoint"
                  >
                    {propName} Props
                  </div>
                  <Table
                    dataSource={dataSource}
                    style={{ fontFamily: "SFMono-Regular" }}
                    getCellStyle={() => ({ whiteSpace: "initial" })}
                  >
                    <Table.Column
                      title="属性"
                      dataIndex="docProp"
                      width="18%"
                    />
                    <Table.Column
                      title="描述"
                      dataIndex="description"
                      width="50%"
                    />
                    <Table.Column
                      title="类型"
                      dataIndex="type"
                      render={(row, col, rowIndex, colIndex) => {
                        return (
                          <div>
                            {row.tsType?.raw ? (
                              row.tsType.raw
                            ) : (
                              <>
                                {row.tsType?.name || row.type?.name}
                                {row.type && row.type.name === "enum" && (
                                  <span>
                                    {" "}
                                    oneOf [
                                    {row.type.value ===
                                    "Object.keys(IconSvgPaths)"
                                      ? "...iconNames"
                                      : row.type.value.map((val, i) => (
                                          <span key={val.value}>
                                            {val.value}
                                            {i !== row.type.value.length - 1 &&
                                              ", "}
                                          </span>
                                        ))}
                                    ]
                                  </span>
                                )}
                                {row.type && row.type.name === "union" && (
                                  <span>
                                    {" "}
                                    oneOfType [
                                    {row.type.value.map((val, i) => (
                                      <span key={val.name}>
                                        {val.name}
                                        {i !== row.type.value.length - 1 &&
                                          ", "}
                                      </span>
                                    ))}
                                    ]
                                  </span>
                                )}
                              </>
                            )}
                          </div>
                        )
                      }}
                    />
                    <Table.Column
                      title="默认值"
                      align="center"
                      width="10%"
                      dataIndex="defaultValue"
                      render={(row, col, rowIndex, colIndex) => {
                        if (row.defaultValue) {
                          return row.defaultValue.value
                        } else {
                          return "无"
                        }
                      }}
                    />
                  </Table>
                </section>
              )
            }
          })}
      </div>
    )
  }
}
