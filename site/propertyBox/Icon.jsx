import React from "react"
import classNames from "classnames"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Input, Icon, Switch, ColorPicker } from "../../components"
import dataSource from "../../components/icon/IconShowData"

export default class PropertyBox extends React.Component {
  static timer = null

  constructor(props) {
    super(props)

    const icons = Object.keys(dataSource).reduce(
      (acc, cur) => [
        ...acc,
        ...dataSource[cur].data.map(o => ({ type: cur, ...o })),
      ],
      []
    )

    this.state = {
      color: "#a3a3a3",
      copiedName: "",
      interactive: false,
      icons,
      iconsFiltered: icons,
    }
  }

  handleCopyIconName = icon => {
    this.setState(
      {
        copiedName: icon.name,
      },
      () => {
        this.textArea.select()
        document.execCommand("copy")
      }
    )
  }

  handleMouseEnter = () => {
    clearTimeout(this.timer)
  }

  handleMouseLeave = () => {
    this.timer = setTimeout(() => {
      this.setState({
        copiedName: "",
      })
    }, 100)
  }

  handleSearch = value => {
    const { icons } = this.state
    if (value === "") {
      this.setState({
        iconsFiltered: icons,
      })
    } else {
      this.setState({
        iconsFiltered: icons.filter(({ keywords }) => {
          let bool = false
          keywords.forEach(o => {
            if (!bool && o.includes(value)) {
              bool = true
            }
          })
          return bool
        }),
      })
    }
  }

  render() {
    const { color, copiedName, icons, iconsFiltered, interactive } = this.state

    const codes = `<Icon
  color="${color}"
  icon="help-circle"
  ${interactive ? `interactive` : ""}  
/>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Icon color={color} icon="help-circle" interactive={interactive} />
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>可配置项</div>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>颜色</dt>
              <dd className={styles.controlContent}>
                <ColorPicker
                  value={color}
                  onChange={param => {
                    this.setState({ color: param })
                  }}
                />
              </dd>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="可交互"
                  unCheckedText="可交互"
                  checked={interactive}
                  onChange={param => this.setState({ interactive: param })}
                />
              </div>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
        <div>
          <Input
            autoFocus
            leftElement={<Icon icon="search" size={18} />}
            placeholder="搜索图标名称"
            size="large"
            className={styles.iconSearch}
            onChange={({ target: { value } }) => {
              this.handleSearch(value)
            }}
          />
          <div>
            <textarea
              ref={textarea => {
                this.textArea = textarea
              }}
              value={copiedName}
              readOnly
              style={{
                position: "absolute",
                top: "-99999px",
              }}
            />
            {iconsFiltered.length !== 0 ? (
              Object.keys(dataSource).map(type => {
                const array = iconsFiltered.filter(item => item.type === type)
                if (array.length) {
                  return (
                    <div className={styles.iconType} key={type}>
                      <div className={styles.typeHeader}>
                        <div className={styles.typeTitle}>{type}</div>
                        <div className={styles.decri}>
                          {dataSource[type].decription}
                        </div>
                      </div>
                      <div className={styles.iconList}>
                        {array.map(icon => {
                          return (
                            <div
                              role="none"
                              key={icon.name}
                              className={styles.iconCard}
                              onClick={() => {
                                this.handleCopyIconName(icon)
                              }}
                              onMouseEnter={this.handleMouseEnter}
                              onMouseLeave={this.handleMouseLeave}
                            >
                              <div className={styles.iconCardContent}>
                                <div>
                                  <Icon
                                    icon={icon.name}
                                    size={36}
                                    color="var(--gray-800)"
                                    className={styles.icon}
                                  />
                                  <div className={styles.iconName}>
                                    {icon.name}
                                  </div>
                                  <div
                                    className={classNames(styles.copyIconName, {
                                      [styles.copiedIconName]:
                                        icon.name === copiedName,
                                    })}
                                  >
                                    {icon.name === copiedName
                                      ? "已复制"
                                      : "点击复制名称"}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                }
                return null
              })
            ) : (
              <div>没有查询到相关的组件</div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
