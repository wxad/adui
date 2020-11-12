import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Button, Drawer, Switch } from "../../components"
import { SIZES } from "./consts"

const POSITIONS = [
  {
    text: "上",
    value: "top",
  },
  {
    text: "下",
    value: "bottom",
  },
  {
    text: "左",
    value: "left",
  },
  {
    text: "右",
    value: "right",
  },
]

export default class PropertyBox extends React.Component {
  state = {
    visible: false,
    position: "left",
    size: "medium",
    headerElementVisible: true,
    headerSticky: true,
    maskVisible: true,
    maskClosable: true,
    bodyScrollable: false,
    closeBtnAlign: "left",
  }

  render() {
    const {
      position,
      visible,
      size,
      headerElementVisible,
      headerSticky,
      maskVisible,
      maskClosable,
      bodyScrollable,
      closeBtnAlign,
    } = this.state

    const codes = `<Button onClick={() => { setVisible(true) }}>点击弹出浮层</Button>
<Drawer
  ${size === "medium" ? "" : `size="${size}"`}
  ${bodyScrollable ? "bodyScrollable" : ""}
  ${headerElementVisible ? "" : "headerElement={null}"}
  headerContent="浮层标题"
  ${
    headerSticky && closeBtnAlign === "left"
      ? ""
      : `headerStyle={{
    ${headerSticky ? "" : 'position: "static",'}
    ${closeBtnAlign === "left" ? "" : 'flexDirection: "row-reverse",'}
  }}`
  }
  placement="${position}"
  ${maskClosable ? "maskClosable" : ""}
  ${maskVisible ? "maskVisible" : ""}
  visible={visible}
  onClose={() => {
    setVisible(false)
  }}
>
  <div
    style={{
      height: "200vh",
    }}
  />
</Drawer>
`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Button
              onClick={() => {
                this.setState({ visible: true })
              }}
            >
              点击弹出浮层
            </Button>
            <Drawer
              size={size}
              bodyScrollable={bodyScrollable}
              headerElement={headerElementVisible ? undefined : null}
              headerContent="浮层标题"
              headerStyle={{
                position: headerSticky ? "sticky" : "static",
                flexDirection: closeBtnAlign === "left" ? "row" : "row-reverse",
              }}
              placement={position}
              maskClosable={maskClosable}
              maskVisible={maskVisible}
              visible={visible}
              onClose={() => {
                this.setState({ visible: false })
              }}
            >
              <div
                style={{
                  height: "200vh",
                }}
              />
            </Drawer>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>可配置项</div>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>尺寸</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  {SIZES.map(({ value, text }) => (
                    <Button
                      key={value}
                      active={value === size}
                      onClick={() => this.setState({ size: value })}
                    >
                      {text}
                    </Button>
                  ))}
                </Button.Group>
              </dd>
              <dt className={styles.controlTitle}>位置</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  {POSITIONS.map(({ value, text }) => (
                    <Button
                      key={value}
                      active={value === position}
                      onClick={() => this.setState({ position: value })}
                    >
                      {text}
                    </Button>
                  ))}
                </Button.Group>
              </dd>
              <div
                className={styles.rightTitle}
                style={{
                  marginTop: "20px",
                  marginBottom: "10px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--gray-300)",
                }}
              >
                顶栏
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="显示顶栏"
                  unCheckedText="显示顶栏"
                  checked={headerElementVisible}
                  onChange={param =>
                    this.setState({
                      headerElementVisible: param,
                    })
                  }
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="固定顶栏"
                  unCheckedText="固定顶栏"
                  checked={headerSticky}
                  onChange={param =>
                    this.setState({
                      headerSticky: param,
                    })
                  }
                />
              </div>
              <dt className={styles.controlTitle}>删除按钮位置</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  {[
                    {
                      text: "左",
                      value: "left",
                    },
                    {
                      text: "右",
                      value: "right",
                    },
                  ].map(({ value, text }) => (
                    <Button
                      key={value}
                      active={value === closeBtnAlign}
                      onClick={() => this.setState({ closeBtnAlign: value })}
                    >
                      {text}
                    </Button>
                  ))}
                </Button.Group>
              </dd>
              <div
                className={styles.rightTitle}
                style={{
                  marginTop: "20px",
                  marginBottom: "10px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--gray-300)",
                }}
              >
                浮层外区域
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="显示蒙层"
                  unCheckedText="显示蒙层"
                  checked={maskVisible}
                  onChange={param =>
                    this.setState({
                      maskVisible: param,
                    })
                  }
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="点击蒙层可退出"
                  unCheckedText="点击蒙层可退出"
                  checked={maskClosable}
                  onChange={param =>
                    this.setState({
                      maskClosable: param,
                    })
                  }
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="浮层外可滚动"
                  unCheckedText="浮层外可滚动"
                  checked={bodyScrollable}
                  onChange={param =>
                    this.setState({
                      bodyScrollable: param,
                    })
                  }
                />
              </div>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}
