import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Button,
  Switch,
  Spinner,
} from '../../components'
import { SIZES } from "./consts"

export default class PropertyBox extends React.Component {

  state = {
    hasLetter: false,
    size: "small",
  }

  render() {
    const {
      hasLetter,
      size,
    } = this.state

    const codes = ` <Spinner ${hasLetter ? `text="加载中" ` : ""}${size === "small" ? "" : `size="${size}" `}/>`
    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Spinner text={hasLetter ? "加载中" : null} size={size} />
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>配置项</div>
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
                <Switch checkedText="带文字提示" unCheckedText="带文字提示" checked={hasLetter} onChange={param => this.setState({ hasLetter: param })} />
              </div>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}