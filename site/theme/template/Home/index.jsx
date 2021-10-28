/* eslint-disable */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "bisheng/router"
import styles from "./home.scss"
import LogoSvg from "./LogoSvg"
import KeyWordSvg0 from "./KeyWordSvg0"
import KeyWordSvg1 from "./KeyWordSvg1"
import KeyWordSvg2 from "./KeyWordSvg2"
import MenuSvg0 from "./MenuSvg0"
import MenuSvg1 from "./MenuSvg1"
import MenuSvg2 from "./MenuSvg2"
import MenuSvg3 from "./MenuSvg3"

import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Icon,
  Input,
  Message,
  Pagination,
  Popover,
  Radio,
  Slider,
  Switch,
  Table,
  TreeSelect,
} from "componentPath"

class Home extends React.Component {
  state = {
    buttonActive: "",
    checkboxValue: [],
    color: "#07c160",
    dateValue: null,
    loadingTable: false,
    radioValue: 0,
    switchChecked: false,
    visible: false,
    count: 0,
  }

  componentDidMount = () => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0)
    }
    setTimeout(() => {
      this.setState({
        buttonActive: "code",
        checkboxValue: [1],
        radioValue: 1,
        switchChecked: true,
      })
    }, 1500)
    setTimeout(() => {
      this.setState({
        dateValue: new Date(),
      })
    }, 1600)
  }

  render() {
    const {
      buttonActive,
      checkboxValue,
      color,
      dateValue,
      inputValue,
      loadingTable,
      radioValue,
      switchChecked,
      visible,
      count,
    } = this.state
    return (
      <div>
        <div className={styles.home}>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <LogoSvg className={styles.logo} />
              <p>
                为 B 端中后台系统界面设计，以简易的基础工具，
                <br />
                搭建有秩序的、一致的体验环境。
              </p>
              <Link to="/docs/start">
                <Button size="large" intent="primary">
                  开始使用
                </Button>
              </Link>
              <Link to="/docs/spec/principle">
                <Button size="large">设计语言</Button>
              </Link>
            </div>
          </div>
          <div className={styles.header}>
            <div className={styles.headerInner} id="header">
              <div className={styles.wrapper} style={{ height: "100%" }}>
                <div className={styles.right}>
                  <div className={styles.rightInner}>
                    <div className={styles["right-top"]}>
                      <Input
                        size="medium"
                        className={styles.input}
                        leftElement={<Icon icon="search" />}
                        placeholder=""
                      />
                      <Button.Group
                        size="medium"
                        className={styles.buttonGroup}
                      >
                        {["code", "computer", "edit-outlined"].map((o) => (
                          <Button
                            leftIcon={o}
                            key={o}
                            active={o === buttonActive}
                            onClick={() => this.setState({ buttonActive: o })}
                          />
                        ))}
                      </Button.Group>
                      <Button
                        className={styles.button}
                        rightIcon="triangle-down"
                        size="medium"
                      />
                    </div>
                    <div className={styles["right-medium"]}>
                      <Radio.Group
                        value={radioValue}
                        onChange={(param) =>
                          this.setState({ radioValue: param })
                        }
                        size="medium"
                        className={styles.radioGroup}
                      >
                        <Radio value={1} />
                        <Radio value={2} />
                      </Radio.Group>
                      <Checkbox.Group
                        value={checkboxValue}
                        onChange={(param) =>
                          this.setState({ checkboxValue: param })
                        }
                        size="medium"
                        className={styles.checkboxGroup}
                      >
                        <Checkbox value={1} />
                        <Checkbox value={2} />
                      </Checkbox.Group>
                      <Switch
                        className={styles.switch}
                        size="medium"
                        checked={switchChecked}
                        onChange={(param) =>
                          this.setState({ switchChecked: param })
                        }
                      />
                      <div className={styles.sliders}>
                        <Slider defaultValue={50} inputVisible={false} />
                        <Slider defaultValue={20} inputVisible={false} />
                      </div>
                    </div>
                    <div className={styles["right-bottom"]}>
                      <div className={styles.block}>
                        {Array.from(new Array(21), (_, i) => i).map((o) => (
                          <div className={styles.element} key={o} />
                        ))}
                      </div>
                      <div className={styles.pagination}>
                        AD UI for Web
                        <div>
                          <Button leftIcon="arrow-left" />
                          <Button
                            leftIcon="arrow-right"
                            onClick={() => {
                              this.setState(
                                ({ count }) => ({
                                  count: count + 1,
                                }),
                                () => {
                                  if (this.state.count % 10 === 0) {
                                    Message.success({
                                      content: "Please use AD UI.😊",
                                      icon: "game",
                                    })
                                  }
                                }
                              )
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["right-small"]} />
              </div>
            </div>
          </div>
          <div className={styles.mainWrapper}>
            <div className={styles.wrapper}>
              <main className={styles.main}>
                <div className={styles.keywords}>
                  <div className={styles.keyword}>
                    <div className={styles["keyword-card"]}>
                      <KeyWordSvg0 />
                    </div>
                    <div>
                      <div className={styles["keyword-title"]}>简易</div>
                      <div className={styles["keyword-desc"]}>
                        基础 UI 工具，简单易用
                      </div>
                    </div>
                  </div>
                  <div className={styles.keyword}>
                    <div className={styles["keyword-card"]}>
                      <KeyWordSvg1 />
                    </div>
                    <div>
                      <div className={styles["keyword-title"]}>秩序</div>
                      <div className={styles["keyword-desc"]}>
                        设计后台系统的整体体验环境
                      </div>
                    </div>
                  </div>
                  <div className={styles.keyword}>
                    <div className={styles["keyword-card"]}>
                      <KeyWordSvg2 />
                    </div>
                    <div>
                      <div className={styles["keyword-title"]}>效率</div>
                      <div className={styles["keyword-desc"]}>
                        开发构建稳定，组件灵活配置
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.menu}>
                  <div className={styles["menu-title"]}>
                    <span>文档内容</span>
                    <span>Menu</span>
                  </div>
                  <div className={styles["menu-cards"]}>
                    <Link to="/docs/start">
                      <Card interactive className={styles["menu-card"]}>
                        <MenuSvg0 className={styles["menu-card-indicator"]} />
                        <Icon
                          size={28}
                          icon="arrow-forward"
                          className={styles["menu-card-icon"]}
                        />
                        <div>
                          <div className={styles["menu-card-title"]}>
                            开始使用
                          </div>
                          <div className={styles["menu-card-desc"]}>
                            adui 安装及使用方法。包含按钮、输入框、单选、勾选等
                            AD UI 组件的各类可配置 Props 及使用方法。
                          </div>
                        </div>
                      </Card>
                    </Link>
                    <Link to="/components/grid">
                      <Card interactive className={styles["menu-card"]}>
                        <MenuSvg1 className={styles["menu-card-indicator"]} />
                        <Icon
                          size={28}
                          icon="arrow-forward"
                          className={styles["menu-card-icon"]}
                        />
                        <div>
                          <div className={styles["menu-card-title"]}>组件</div>
                          <div className={styles["menu-card-desc"]}>
                            包含布局、基础、导航、选择、反馈五类 UI 组件的
                            Playground、常用示例、使用方法及 Props。
                          </div>
                        </div>
                      </Card>
                    </Link>
                    <Link to="/components/icon">
                      <Card interactive className={styles["menu-card"]}>
                        <MenuSvg2 className={styles["menu-card-indicator"]} />
                        <Icon
                          size={28}
                          icon="arrow-forward"
                          className={styles["menu-card-icon"]}
                        />
                        <div>
                          <div className={styles["menu-card-title"]}>
                            图标库
                          </div>
                          <div className={styles["menu-card-desc"]}>
                            系统图标列表，包含导航、反馈、编辑、工具、图表、生活五类。
                          </div>
                        </div>
                      </Card>
                    </Link>
                    <Link to="/docs/resource">
                      <Card interactive className={styles["menu-card"]}>
                        <MenuSvg3 className={styles["menu-card-indicator"]} />
                        <Icon
                          size={28}
                          icon="arrow-forward"
                          className={styles["menu-card-icon"]}
                        />
                        <div>
                          <div className={styles["menu-card-title"]}>
                            设计资源
                          </div>
                          <div className={styles["menu-card-desc"]}>
                            设计资源与设计工具下载，目前包含 AD UI Sketch
                            组件源文件。将持续更新完善。
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </div>
                </div>
              </main>
            </div>
            <div className={styles.footer}>
              <footer className={styles.wrapper}>
                <p>
                  AD UI
                  针对网页端后台界面而设计，方便设计师与开发搭建整体的后台体验环境。
                  <br />
                  AD UI 建议以简单、合理的方案解决后台系统中的实际使用问题。
                </p>
                <div className={styles["footer-contact"]}>
                  yijiejiang@tencent.com
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
