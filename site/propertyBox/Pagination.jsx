import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Button,
  Switch,
  Pagination,
} from '../../components'
import { SIZES } from "./consts"

export default class PropertyBox extends React.Component {

  state = {
    showInput: false,
    size: "small",
    theme: false,
  }

  render() {
    const {
      showInput,
      size,
      theme,
    } = this.state

    const codes = `<Pagination
  defaultCurrent={1}
  pageSize={10}
  showButtonJumper
  ${showInput ? `showInputJumper` : ""}
  ${size === "small" ? "" : `size="${size}"`}
  ${theme ? `theme="light"` : ""}
  total={99}
/>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Pagination
              showInputJumper={showInput}
              theme={theme ? "light" : null}
              size={size}
              align="center"
              defaultCurrent={1}
              pageSize={10}
              total={99}
              onChange={(current, pageSize) => console.log(current, pageSize)}
              showButtonJumper
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
                <Switch checkedText="可快捷键跳转" unCheckedText="可快捷键跳转" checked={showInput} onChange={param => this.setState({ showInput: param })} />
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