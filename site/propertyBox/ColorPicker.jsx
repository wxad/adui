import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Button,
  Switch,
  ColorPicker,
  Radio,
} from '../../components'
import { SIZES } from "./consts"

export default class PropertyBox extends React.Component {

  state = {
    disabled: false,
    inputVisible: true,
    size: "small",
  }

  render() {
    const {
      disabled,
      inputVisible,
      size,
    } = this.state

    const codes = `<ColorPicker
  defaultValue="#07C160"
  ${disabled ? `disabled` : ""}
  ${!inputVisible ? `inputVisible={false}` : ""}
  ${size === "small" ? "" : `size="${size}"`}
/>`
    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <ColorPicker
              defaultValue="#07C160"
              disabled={disabled}
              inputVisible={inputVisible}
              size={size}
            />
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
                <Switch checkedText="禁用态" unCheckedText="禁用态" checked={disabled} onChange={param => this.setState({ disabled: param })} />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="带输入框" unCheckedText="带输入框" checked={inputVisible} onChange={param => this.setState({ inputVisible: param })} />
              </div>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}