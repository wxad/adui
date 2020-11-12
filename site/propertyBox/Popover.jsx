import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Button,
  Switch,
  Popover,
  Popconfirm,
  Select,
  Radio,
} from '../../components'

export default class PropertyBox extends React.Component {

  state = {
    hasArrow: true,
    popType: "normal",
    place: "bottom",
    trigger: "hover",
    activeButton: 0,
    visible: false,
    showExample: true,
  }

  render() {

    const {
      hasArrow,
      popType,
      place,
      trigger,
      activeButton,
      visible,
      showExample,
    } = this.state

    const codes = `${popType === "normal" ? `<Popover
  alignEdge${hasArrow ? "={false}" : ""}
  ${hasArrow ? "arrowed" : ""}
  placement="${place}"
  popup="文字提示"
  ${trigger === "hover" ? "" : 'trigger="click"'}
>
  <Button>
    气泡提示
  </Button>
</Popover>` : `<Popconfirm
  alignEdge${hasArrow ? "={false}" : ""}
  ${hasArrow ? "arrowed" : ""}
  placement="${place}"
  popup="确认是否修改？"
  ${trigger === "hover" ? "" : 'trigger="click"'}
>
  <Button>
    气泡提示
  </Button>
</Popconfirm>`}`
    const placement = ["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]
    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            {(popType === "normal" && showExample) && (
              <Popover
                visible={visible}
                onVisibleChange={bool => this.setState({ visible: bool })}
                placement={place}
                trigger={trigger}
                arrowed={hasArrow}
                alignEdge={!hasArrow}
                popup={<div style={{ padding: "20px" }}>文字提示</div>}
                ref={node => { this.popover = node }}
              >
                <Button>
                  气泡提示
                </Button>
              </Popover>
            )}
            {
              (popType !== "normal" && showExample) && (
                <Popconfirm
                  visible={visible}
                  onVisibleChange={bool => this.setState({ visible: bool })}
                  placement={place}
                  trigger={trigger}
                  arrowed={hasArrow}
                  alignEdge={!hasArrow}
                  popup={<div>确认是否修改？</div>}
                  ref={node => { this.popover = node }}
                >
                  <Button>
                    气泡提示
                  </Button>
                </Popconfirm>
              )
            }
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>组件类型</div>
            <dl
              className={styles.controls}
              style={{ paddingBottom: "20px", borderBottom: "1px solid #EBEBEB", marginBottom: "20px" }}
            >
              <Radio.Group
                defaultValue={0}
              >
                <Radio value={0} onClick={() => { this.setState({ popType: "normal", visible: true }) }}>普通气泡</Radio>
                <Radio value={1} onClick={() => { this.setState({ popType: "confirm", visible: true }) }}>确认气泡</Radio>
              </Radio.Group>
            </dl>
            <div className={styles.rightTitle}>配置项</div>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>触发方式</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  <Button
                    active={activeButton === 0}
                    onClick={() => {
                      this.setState({
                        activeButton: 0,
                        trigger: "hover",
                      })
                    }}
                  >
                    鼠标上移
                  </Button>
                  <Button
                    active={activeButton === 1}
                    onClick={() => {
                      this.setState({
                        activeButton: 1,
                        trigger: "click",
                      })
                    }}
                  >
                    鼠标点击
                  </Button>
                </Button.Group>
              </dd>
            </dl>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>弹出位置</dt>
              <dd className={styles.controlContent}>
                <Select
                  defaultValue={place}
                  onSelect={value => {
                    this.setState({ place: value, showExample: false }, () => {
                      this.setState({
                        showExample: true,
                        visible: true,
                      })
                    })
                  }}
                >
                  {
                    placement.map((value) => <Select.Option key={value} value={value}>{value}</Select.Option>)
                  }
                </Select>
              </dd>
            </dl>
            <dl className={styles.controls}>
              <div className={styles.switchControl}>
                <Switch checkedText="带箭头" unCheckedText="带箭头" checked={hasArrow} onChange={param => this.setState({ hasArrow: param, visible: true })} />
              </div>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}