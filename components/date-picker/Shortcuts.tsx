import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { DateUtils } from "day-picker-react"
import "./style"

const prefix = "adui-date"

export interface IShortcutsProps {
  [key: string]: any
  onShortcutClick: (
    value: Date | [Date | null | undefined, Date | null | undefined]
  ) => void
  selectedDay?: Date | "" | null
  selectedDays?: [Date | null | undefined, Date | null | undefined] | null
  shortcuts?: {
    label: React.ReactNode
    value: Date | [Date | null | undefined, Date | null | undefined]
  }[]
}

/**
 * 日期选择 Shortcuts
 */
const Shortcuts: React.FC<IShortcutsProps> = ({
  onShortcutClick,
  selectedDay,
  selectedDays,
  shortcuts,
}: IShortcutsProps) => (
  <div className={`${prefix}-shortcuts`}>
    {shortcuts &&
      shortcuts.map((shortcut) => {
        const { label, value: valueShortcut } = shortcut
        let selected = false
        if (
          selectedDays &&
          selectedDays.length &&
          Array.isArray(valueShortcut)
        ) {
          selected =
            selectedDays &&
            valueShortcut &&
            DateUtils.isSameDay(selectedDays[0], valueShortcut[0]) &&
            DateUtils.isSameDay(selectedDays[1], valueShortcut[1])
        } else {
          selected =
            selectedDay &&
            valueShortcut &&
            DateUtils.isSameDay(selectedDay, valueShortcut)
        }
        return (
          <div
            key={valueShortcut.toString()}
            className={classNames(`${prefix}-shortcut`, {
              [`${prefix}-shortcutActive`]: selected,
            })}
            data-value={valueShortcut}
            onClick={() => onShortcutClick(valueShortcut)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onShortcutClick(valueShortcut)
              }
            }}
            role="menuitem"
          >
            {label}
          </div>
        )
      })}
  </div>
)

Shortcuts.propTypes = {
  /**
   * shortcut click handler
   */
  onShortcutClick: PropTypes.any.isRequired,
  /**
   * 当前日期，仅供 DatePicker 使用
   */
  selectedDay: PropTypes.any,
  /**
   * 当前日期范围，仅供 RangePicker 使用
   */
  selectedDays: PropTypes.any,
  /**
   * 快捷选择项，格式：
   * [{
   *   label: "祖国生日",
   *   value: new Date("2022-10-01"),
   * }]
   */
  shortcuts: PropTypes.any.isRequired,
}

Shortcuts.defaultProps = {
  selectedDay: null,
  selectedDays: null,
}

export default Shortcuts
