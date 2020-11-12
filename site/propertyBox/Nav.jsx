import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Button,
  Nav,
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

    const codes = `<Nav>
  <Nav.Group title="导航分组">
    <Nav.Item index="1">导航</Nav.Item>
  </Nav.Group>
  <Nav.Divider />
  <Nav.SubNav title="导航一" index="sub-1" icon="storage-outlined">
    <Nav.Group title="导航分组">
      <Nav.Item index="3">导航</Nav.Item>
      <Nav.SubNav title="导航" index="sub-2">
        ...
      </Nav.SubNav>
    </Nav.Group>
  </Nav.SubNav>
</Nav>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <section
              style={{
                position: "relative",
                flex: 1,
                height: "470px",
                backgroundColor: "#fafafa",
              }}
            >
              <Nav
                defaultSelectedIndex="4"
                size={size}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "180px",
                  height: "470px",
                  backgroundColor: "#fff",
                  boxShadow: "1px 0px 0px 0px rgba(223,223,223,0.45)",
                }}
              >
                <Nav.Item index="1">数据概览</Nav.Item>
                <Nav.Item index="2">财务管理</Nav.Item>
                <Nav.Item index="3">消息公告</Nav.Item>
                <Nav.Divider />
                <Nav.Item index="4" icon="trending-up">数据概览</Nav.Item>
                <Nav.Item index="5" icon="finance-outlined">财务管理</Nav.Item>
                <Nav.Item index="6" icon="bell-outlined">消息公告</Nav.Item>
                <Nav.Divider />
                <Nav.Group title="导航不可选">
                  <Nav.Item index="7" disabled icon="bell-outlined">导航不可选</Nav.Item>
                </Nav.Group>
              </Nav>
              <Nav
                defaultSelectedIndex="1"
                size={size}
                style={{
                  position: "absolute",
                  top: 0,
                  left: "204px",
                  width: "180px",
                  height: "470px",
                  backgroundColor: "#fff",
                  boxShadow: "1px 0px 0px 0px rgba(223,223,223,0.45)",
                }}
              >
                <Nav.Group title="导航分组">
                  <Nav.Item index="1">导航</Nav.Item>
                  <Nav.Item index="2">导航</Nav.Item>
                </Nav.Group>
                <Nav.Divider />
                <Nav.SubNav title="导航一" index="sub-1" icon="storage-outlined">
                  <Nav.Group title="导航分组">
                    <Nav.Item index="3">导航</Nav.Item>
                    <Nav.SubNav title="导航" index="sub-2">
                      <Nav.SubNav title="导航" index="sub-3">
                        <Nav.Item index="8">Option 1</Nav.Item>
                      </Nav.SubNav>
                    </Nav.SubNav>
                  </Nav.Group>
                </Nav.SubNav>
                <Nav.SubNav title="导航二" index="sub-4" icon="folder-outlined">
                  <Nav.Item index="4">Option 1</Nav.Item>
                  <Nav.Item index="5">Option 1</Nav.Item>
                </Nav.SubNav>
                <Nav.SubNav title="导航三" index="sub-5" icon="mail-outlined">
                  <Nav.Item index="6">Option 1</Nav.Item>
                  <Nav.Item index="7">Option 1</Nav.Item>
                </Nav.SubNav>
              </Nav>
            </section>
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
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}