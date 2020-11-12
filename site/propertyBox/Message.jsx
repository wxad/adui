import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Button,
  Message,
  Switch,
} from '../../components'

import { INTENTS } from "./consts"

export default class PropertyBox extends React.Component {

  state = {
    operatable: false,
    closable: false,
    intent: "normal",
  }

  render() {
    const {
      operatable,
      closable,
      intent,
    } = this.state
    const codes = `<div
  onClick={() => {
    const message = Message.${intent}({
      content: "${INTENTS.find(o => o.value === intent).text}类提醒",
      ${closable ? "closable," : ""}
      ${operatable ? `
      action: {
        text: "撤销",
        onClick: () => message.destroy(),
      },
      ` : ""}
    })
  }}
/>`
    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div
            className={styles.left}
          >
            {
              INTENTS.map(({ value, text }) => (
                <Button
                  key={value}
                  intent={value}
                  style={{
                    marginRight: "16px",
                  }}
                  onClick={() => {
                    this.setState({ intent: value })
                    const message = Message[value]({
                      content: `${text}类提醒`,
                      closable,
                      action: {
                        text: operatable ? "撤销" : "",
                        onClick: () => { message.destroy() },
                      },
                    })
                  }}
                >
                  {`${text}类`}
                </Button>
              ))
            }
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>配置项</div>
            <dl className={styles.controls}>
              <div className={styles.switchControl}>
                <Switch checkedText="带操作" unCheckedText="带操作" checked={operatable} onChange={param => this.setState({ operatable: param })} />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="可关闭" unCheckedText="可关闭" checked={closable} onChange={param => this.setState({ closable: param })} />
              </div>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}