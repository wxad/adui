import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Button,
  Switch,
  Radio,
} from '../../components'
import { SIZES } from "./consts"

export default class PropertyBox extends React.Component {

  state = {
    disabled: false,
    size: "small",
  }

  render() {
    const {
      disabled,
      size,
    } = this.state

    const codes = `<Radio.Group
  defaultValue={0}
  ${disabled ? "disabled" : ""}
  ${size === "small" ? "" : `size="${size}"`}
>
  <Radio value={1}>单选</Radio>
  <Radio value={2}>单选</Radio>
  <Radio value={3}>单选</Radio>
</Radio.Group>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Radio.Group
              defaultValue={1}
              {...this.state}
            >
              <Radio value={1}>单选</Radio>
              <Radio value={2}>单选</Radio>
              <Radio value={3}>单选</Radio>
            </Radio.Group>
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
                        { text }
                      </Button>
                    ))
                  }
                </Button.Group>
              </dd>
              <div className={styles.switchControl}>
                <Switch checkedText="禁用态" unCheckedText="禁用态" checked={disabled} onChange={param => this.setState({ disabled: param })} />
              </div>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}