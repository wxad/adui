import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Button, Switch, Dialog } from "../../components"

export default class PropertyBox extends React.Component {
  state = {
    type: "confirm",
    headerElement: true,
    footerElement: true,
    mask: false,
    visible: false,
    destroyAfterClose: false,
  }

  render() {
    const {
      type,
      headerElement,
      footerElement,
      mask,
      visible,
      destroyAfterClose,
    } = this.state

    const codes = `<Dialog
  ${!footerElement ? `footerElement={null}` : ""}
  ${!headerElement ? `headerElement={null}` : ""}
  ${mask ? `maskClosable` : ""}
  onCancel={() => this.setState({ visible: false })}
  onConfirm={() => this.setState({ visible: false })}
  title="标题"
  ${type === "inform" ? `type="inform"` : ""}
  visible={visible}
  ${destroyAfterClose ? `destroyAfterClose` : ""}
>
  内容
</Dialog>`
    const dialogProps = {}

    if (headerElement === false) {
      dialogProps.headerElement = null
    }

    if (footerElement === false) {
      dialogProps.footerElement = null
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Button onClick={() => this.setState({ visible: true })}>
              弹出对话框
            </Button>
            <Dialog
              maskClosable={mask}
              onCancel={() => this.setState({ visible: false })}
              onConfirm={() => this.setState({ visible: false })}
              title="标题"
              type={type}
              visible={visible}
              destroyAfterClose={destroyAfterClose}
              {...dialogProps}
            >
              内容
            </Dialog>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>可配置项</div>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>底栏类型</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  <Button
                    active={type === "confirm"}
                    onClick={() => this.setState({ type: "confirm" })}
                  >
                    确认类
                  </Button>
                  <Button
                    active={type === "inform"}
                    onClick={() => this.setState({ type: "inform" })}
                  >
                    告知类
                  </Button>
                </Button.Group>
              </dd>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="带顶栏"
                  unCheckedText="带顶栏"
                  checked={headerElement}
                  onChange={(param) => this.setState({ headerElement: param })}
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="带底栏"
                  unCheckedText="带底栏"
                  checked={footerElement}
                  onChange={(param) => this.setState({ footerElement: param })}
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="点击遮罩可关闭"
                  unCheckedText="点击遮罩可关闭"
                  checked={mask}
                  onChange={(param) => this.setState({ mask: param })}
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="关闭后是否销毁 DOM"
                  unCheckedText="关闭后是否销毁 DOM"
                  checked={destroyAfterClose}
                  onChange={(param) =>
                    this.setState({ destroyAfterClose: param })
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
