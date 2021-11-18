import { FocusManager } from "./_util/focusManager"
import "./style/base.css"

export type { IAffixProps } from "./affix"
export { default as Affix } from "./affix"

export type { IAlertProps } from "./alert"
export { default as Alert } from "./alert"

export type { IBreadcrumbProps, IBreadcrumbItemProps } from "./breadcrumb"
export { default as Breadcrumb } from "./breadcrumb"

export type { IButtonProps, IButtonGroupProps } from "./button"
export { default as Button } from "./button"

export type { ICardProps, ICardHeaderProps } from "./card"
export { default as Card } from "./card"

export type { ICascaderProps } from "./cascader"
export { default as Cascader } from "./cascader"

export type { ICheckboxProps, ICheckboxGroupProps } from "./checkbox"
export { default as Checkbox } from "./checkbox"

export type { IColorPickerProps } from "./color-picker"
export { default as ColorPicker } from "./color-picker"

export type { IConfigProviderProps } from "./config-provider"
export { default as ConfigProvider } from "./config-provider"

export type { IDatePickerProps, IRangePickerProps } from "./date-picker"
export { default as DatePicker } from "./date-picker"

export type { IDialogProps } from "./dialog"
export { default as Dialog } from "./dialog"

export type { IDrawerProps } from "./drawer"
export { default as Drawer } from "./drawer"

export type { IFormProps, IFormItemProps, IFormTipProps } from "./form"
export { default as Form } from "./form"

export type { IGrid, IGridRowProps, IGridColProps } from "./grid"
export { default as Grid } from "./grid"

export type { IIconProps, IconNames } from "./icon"
export { default as Icon } from "./icon"

export type { IInputProps, IInputRef, ITextareaProps } from "./input"
export { default as Input } from "./input"

export type {
  ILayoutProps,
  ILayoutAsideProps,
  ILayoutHeaderProps,
  ILayoutMainProps,
} from "./layout"
export { default as Layout } from "./layout"

export type { IMenuProps, IMenuItemProps, IMenuSubMenuProps } from "./menu"
export { default as Menu } from "./menu"

export type { IMessageProps } from "./message"
export { default as Message } from "./message"

export type { IMotionProps } from "./motion"
export { default as Motion } from "./motion"

export type {
  INavProps,
  INavGroupProps,
  INavItemProps,
  INavDividerProps,
  INavSubNavProps,
} from "./nav"
export { default as Nav } from "./nav"

export type { INumericInputProps } from "./numeric-input"
export { default as NumericInput } from "./numeric-input"

export type { IPaginationProps } from "./pagination"
export { default as Pagination } from "./pagination"

export type { IPopoverProps } from "./popover"
export { default as Popover } from "./popover"

export type { IPopconfirmProps } from "./popconfirm"
export { default as Popconfirm } from "./popconfirm"

export type { IPopTriggerProps, ITrigger, Placement } from "./pop-trigger"
export { default as PopTrigger } from "./pop-trigger"

export type { IPortalProps } from "./portal"
export { default as Portal } from "./portal"

export type { IRadioProps, IRadioGroupProps } from "./radio"
export { default as Radio } from "./radio"

export type { IResizeObserverProps } from "./resize-observer"
export { default as ResizeObserver } from "./resize-observer"

export type {
  ISelectProps,
  ISelectOptionProps,
  ISelectOptGroupProps,
} from "./select"
export { default as Select } from "./select"

export type { ISliderProps } from "./slider"
export { default as Slider } from "./slider"

export type { ISpinnerProps } from "./spinner"
export { default as Spinner } from "./spinner"

export type { ISuggestProps } from "./suggest"
export { default as Suggest } from "./suggest"

export type { ISwitchProps } from "./switch"
export { default as Switch } from "./switch"

export type { ITabsProps, ITabsTabProps } from "./tabs"
export { default as Tabs } from "./tabs"

export type {
  ITableProps,
  ITableFilterProps,
  ITableSortProps,
  IColumnProps,
} from "./table"
export { default as Table } from "./table"

export type { ITagProps } from "./tag"
export { default as Tag } from "./tag"

export type { ITimePickerProps } from "./time-picker"
export { default as TimePicker } from "./time-picker"

export type { ITooltipProps } from "./tooltip"
export { default as Tooltip } from "./tooltip"

export type { ITransitionProps } from "./transition"
export { default as Transition } from "./transition"

export type { ITreeSelectProps, ITreeNodeProps } from "./tree-select"
export { default as TreeSelect } from "./tree-select"

export type { IUploadFileProps, IUploadImgProps } from "./upload"
export { default as Upload } from "./upload"

export { default as ChannelsButton } from "./channels-button"
export { default as ChannelsCheckbox } from "./channels-checkbox"
export { default as ChannelsDialog } from "./channels-dialog"
export { default as ChannelsForm } from "./channels-form"
export { default as ChannelsInput } from "./channels-input"
export { default as ChannelsMessage } from "./channels-message"
export { default as ChannelsPagination } from "./channels-pagination"
export { default as ChannelsRadio } from "./channels-radio"
export { default as ChannelsTabs } from "./channels-tabs"

const fakeFocusEngine = { start: () => true }
const focusEngine =
  typeof document !== "undefined"
    ? new FocusManager(document.documentElement, "adui-focus-disabled")
    : fakeFocusEngine
focusEngine.start()
