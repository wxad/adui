import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Button,
  Switch,
  TimePicker,
} from '../../components'
import { SIZES } from "./consts"

export default class PropertyBox extends React.Component {

  state = {
    onlyHour: false,
    disabled: false,
    size: "small",
    theme: false,
  }

  render() {
    const {
      onlyHour,
      disabled,
      size,
      theme,
    } = this.state

    const codes = `<TimePicker
  ${disabled ? `disabled` : ""}
  ${onlyHour ? `onlyHour` : ""}
  ${size === "small" ? "" : `size="${size}"`}
  ${theme ? `theme="light"` : ""}
/>`

    const d = new Date()
    const hour = d.getHours()
    const minute = d.getMinutes()

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            {
              onlyHour ? (
                <TimePicker
                  key="0"
                  defaultValue={`${hour < 10 ? `0${hour}` : hour}:00`}
                  disabled={disabled}
                  size={size}
                  onlyHour
                  theme={theme ? "light" : null}
                />
              ) : (
                <TimePicker
                  key="1"
                  defaultValue={`${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`}
                  disabled={disabled}
                  size={size}
                  theme={theme ? "light" : null}
                />
              )
            }
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>可配置项</div>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>尺寸</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  {
                    SIZES.map(({ value, text }) => (
                      <Button
                        key={value}
                        active={value === size}
                        onClick={() => this.setState({ size: value })}
                      >
                        {text}
                      </Button>
                    ))
                  }
                </Button.Group>
              </dd>
            </dl>
            <dl className={styles.controls}>
              <div className={styles.switchControl}>
                <Switch checkedText="整点选择" unCheckedText="整点选择" checked={onlyHour} onChange={param => this.setState({ onlyHour: param })} />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="禁用态" unCheckedText="禁用态" checked={disabled} onChange={param => this.setState({ disabled: param })} />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="轻量风格" unCheckedText="轻量风格" checked={theme} onChange={param => this.setState({ theme: param })} />
              </div>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}