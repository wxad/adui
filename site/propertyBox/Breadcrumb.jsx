import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Button,
  Breadcrumb,
} from '../../components'
import { SIZES } from "./consts"

export default class PropertyBox extends React.Component {

  state = {
    size: "small",
  }

  render() {
    const {
      size,
    } = this.state

    const codes = `<Breadcrumb${size === "small" ? "" : ` size="${size}" `}>
  <Breadcrumb.Item href="https://ad.weixin.qq.com">页面一</Breadcrumb.Item>
  <Breadcrumb.Item>页面二</Breadcrumb.Item>
  <Breadcrumb.Item>页面三</Breadcrumb.Item>
</Breadcrumb>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Breadcrumb size={size}>
              <Breadcrumb.Item href="https://ad.weixin.qq.com">页面一</Breadcrumb.Item>
              <Breadcrumb.Item>页面二</Breadcrumb.Item>
              <Breadcrumb.Item>页面三</Breadcrumb.Item>
            </Breadcrumb>
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
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}