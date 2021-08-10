/* eslint-disable */
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import shallowEqual from "shallowequal"
import { Link, Router, browserHistory } from "bisheng/router"
import classNames from "classnames"
import { LogoLeft, LogoRight } from "./aduiLogo"
import {
  Button,
  ColorPicker,
  Icon,
  Layout,
  Popover,
  Select,
  Suggest,
  Tabs,
  Nav,
} from "../../../../components/"
import styles from "./site.scss"

class SiteLayout extends React.Component {
  static propTypes = {
    /**
     * 子节点
     */
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  state = {
    asideCollapsible: false,
    asideCollapsed: true,
    appendNavSide: false,
    color: "#07c160",
    visible: false,
    searchInputValue: "",
    selectItem: 0,
  }

  navSide = null

  scrollJugePoint = []

  shouldComponentUpdate(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      document.documentElement.style.setProperty("scroll-behavior", "auto")
      window.scroll(0, 0)
    }
    return true
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible })
    if (visible) {
      this.setState({
        color: getComputedStyle(document.documentElement)
          .getPropertyValue("--primary-color")
          .trim(),
      })
    }
  }

  handleColorChange = (color) => {
    document.documentElement.style.setProperty("--primary-color", color)
    this.setState({ color })
  }

  handleResize = () => {
    const { asideCollapsible } = this.state
    const { innerWidth } = window
    if (innerWidth >= 1024 && asideCollapsible) {
      this.setState({ asideCollapsible: false })
    }
    if (innerWidth < 1024 && !asideCollapsible) {
      this.setState({ asideCollapsible: true })
    }
  }

  handleScroll = (scrolltop) => {
    document.documentElement.style.setProperty("scroll-behavior", "smooth")
    window.scroll(0, scrolltop - 20)
  }

  renderNavSide = () => {
    if (this.scrollJugePoint.length !== 0) {
      this.scrollJugePoint = []
    }
    const { selectItem } = this.state
    const points = Array.from(document.getElementsByClassName("scrollPoint"))
    const pointsElement = points.map((item, index) => {
      this.scrollJugePoint.push({
        scrolltop: item.offsetTop,
      })
      return (
        <div
          role="none"
          key={item.offsetTop}
          className={selectItem === index ? styles.selectedItem : ""}
          onClick={() => {
            this.handleScroll(item.offsetTop, index)
          }}
        >
          {index === 0 ? "Demo" : item.innerHTML}
        </div>
      )
    })
    if (pointsElement.length > 1) {
      return <div className={styles.navSide}>{pointsElement}</div>
    }
    return null
  }

  // 监听页面滚动进行右侧边导航的变更
  changeNavAside = () => {
    const docScroll = document.documentElement.scrollTop
    this.scrollJugePoint.map((item, index) => {
      if (
        index === this.scrollJugePoint.length - 1 &&
        docScroll >= item.scrolltop - 20
      ) {
        this.setState({
          selectItem: index,
        })
      }
      if (
        index < this.scrollJugePoint.length - 1 &&
        docScroll >= item.scrolltop - 20 &&
        docScroll <= this.scrollJugePoint[index + 1].scrolltop - 20
      ) {
        this.setState({
          selectItem: index,
        })
      }
    })
  }

  componentDidUpdate = (prevProps) => {
    const { appendNavSide } = this.state
    if (this.props.location.pathname.includes("components")) {
      window.addEventListener("scroll", this.changeNavAside, false)
      if (document.getElementsByClassName("componentTitle")) {
        if (!appendNavSide) {
          this.setState({
            appendNavSide: true,
          })
        }
      }
    } else {
      window.removeEventListener("scroll", this.changeNavAside, false)
    }
    if (prevProps.params.children !== this.props.params.children) {
      document.documentElement.style.setProperty("scroll-behavior", "auto")
      window.scroll(0, 0)
    }
    if (appendNavSide) {
      if (document.getElementsByClassName("navSideContainer")[0]) {
        const container = document.getElementsByClassName("navSideContainer")[0]
        this.navSide = this.renderNavSide()
        ReactDOM.render(this.navSide, container)
      }
    }
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({
        selectItem: 0,
      })
    }
  }

  componentDidMount = () => {
    this.handleResize()
    window.addEventListener("resize", this.handleResize, false)
    if (this.props.location.pathname.includes("components")) {
      window.addEventListener("scroll", this.changeNavAside, false)
      if (document.getElementsByClassName("componentTitle")) {
        this.setState({
          appendNavSide: true,
        })
      }
    }
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleResize, false)
  }

  render() {
    const { children, location, params, picked } = this.props
    const {
      asideCollapsed,
      asideCollapsible,
      appendNavSide,
      color,
      searchInputValue,
      visible,
    } = this.state

    const locationStringtoArray = location.pathname.split("/")
    const name = locationStringtoArray[locationStringtoArray.length - 1]
    const isHome = location.pathname === "" || location.pathname === "/"
    let tabValue
    if (location.pathname.includes("acss")) {
      tabValue = 2
    } else if (
      location.pathname.includes("components") ||
      location.pathname.includes("docs/start") ||
      location.pathname.includes("docs/resource") ||
      location.pathname.includes("changelog")
    ) {
      tabValue = 1
    } else if (
      location.pathname.includes("docs") &&
      !location.pathname.includes("docs/start") &&
      !location.pathname.includes("docs/resource")
    ) {
      tabValue = 0
    }
    let headerStyle = {}
    if (isHome) {
      headerStyle = {
        marginBottom: "-72px",
        backgroundColor: "transparent",
        boxShadow: "none",
      }
    }

    let { components } = this.props.picked
    components = components.map(
      (cpn) => `${cpn.meta.subtitle} ${cpn.meta.title}`
    )

    return (
      <React.StrictMode>
        <Layout>
          <Layout.Header
            className={styles.header}
            style={{
              paddingLeft: asideCollapsible ? 0 : "28px",
              paddingRight: "28px",
              ...headerStyle,
            }}
            affixed={!isHome}
          >
            <div className={styles["header-left"]}>
              {asideCollapsible && (
                <div className={styles["header-left-button-wrapper"]}>
                  <Button
                    className={styles["header-left-button"]}
                    theme="light"
                    leftIcon="menu"
                    onClick={() => {
                      this.setState({ asideCollapsed: false })
                      document.body.style.overflow = "hidden"
                      document.body.style.paddingRight = "14px"
                    }}
                  />
                </div>
              )}
              <Link to="/">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      boxShadow:
                        "0 3px 6px 0 rgba(0,0,0,0.04), 0 0 0 1px rgba(223,223,223,0.50)",
                    }}
                  >
                    <LogoLeft
                      style={{
                        marginBottom: "1px",
                      }}
                    />
                  </div>
                  <LogoRight />
                </div>
              </Link>
            </div>
            <div className={styles["header-right"]}>
              <Tabs
                value={tabValue !== undefined ? tabValue : ""}
                size="large"
                className={styles.tabs}
              >
                <Link
                  to="/docs/spec/principle"
                  style={{
                    marginRight: "40px",
                    color: "#000",
                  }}
                >
                  <Tabs.Tab title="设计语言" value={0} />
                </Link>
                <Link
                  to="/docs/acss/start"
                  style={{
                    marginRight: "40px",
                    color: "#000",
                  }}
                >
                  <Tabs.Tab title="原子规范" value={2} />
                </Link>
                <Link
                  to="/docs/start"
                  style={{
                    color: "#000",
                  }}
                >
                  <Tabs.Tab title="组件" value={1} />
                </Link>
                {/* <Popover
                placement="bottom"
                mouseEnterDelay={0.5}
                popup={
                  <div style={{ padding: "16px" }}>建站模板，即将上线</div>
                }
              >
                <Tabs.Tab
                  title="最佳实践"
                  value={2}
                  style={{ paddingBottom: "22px" }}
                  disabled
                />
              </Popover> */}
              </Tabs>
              <i />
              <Popover
                arrowed={false}
                placement="bottomRight"
                getPopupContainer={(trigger) => trigger.parentNode}
                popup={
                  <div style={{ padding: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {[
                        "#07c160",
                        "#4285F4",
                        "#0AC2A9",
                        "#ED8D18",
                        "#D259D4",
                        "#525252",
                      ].map((o, i) => (
                        <div
                          key={o}
                          role="none"
                          onClick={() => this.handleColorChange(o)}
                          style={{
                            display: "inline-block",
                            width: "30px",
                            height: "30px",
                            marginRight: i !== 5 ? "6px" : 0,
                            marginBottom: "6px",
                            backgroundColor: o,
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                        />
                      ))}
                    </div>
                    <ColorPicker
                      value={color}
                      onChange={this.handleColorChange}
                    />
                  </div>
                }
                trigger="click"
                visible={visible}
                onVisibleChange={this.handleVisibleChange}
              >
                <div className={styles.picker}>
                  <i style={{ backgroundColor: "var(--primary-color)" }} />
                </div>
              </Popover>
            </div>
          </Layout.Header>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              maxWidth: "100vw",
            }}
            className="content"
          >
            {(location.pathname.includes("components") ||
              location.pathname.includes("changelog") ||
              location.pathname.includes("docs")) && (
              <Layout.Aside
                className={styles.aside}
                collapsible={asideCollapsible}
                collapsed={asideCollapsed}
                onCollapseChange={(bool) => {
                  this.setState({ asideCollapsed: bool })
                  document.body.style.overflow = ""
                  document.body.style.paddingRight = ""
                }}
                affixed
              >
                {true && (
                  <div className={styles.search}>
                    <Suggest
                      leftElement={<Icon icon="search" />}
                      placeholder="搜索"
                      onSelect={(val) => {
                        const valUncaped = val
                          .split(" ")[1]
                          .replace(/([A-Z])/g, "-$1")
                          .toLowerCase()
                          .slice(1, 100)
                        document
                          .querySelector(
                            `.adui-layout-asideInner [href="/components/${valUncaped}"]`
                          )
                          .click()
                      }}
                      dataSource={components}
                    />
                  </div>
                )}
                <Nav style={{ marginTop: "24px" }} selectedIndex={name}>
                  {location.pathname.includes("docs/spec") && (
                    <>
                      <Nav.Group title="视觉语言">
                        <Nav.Item index="principle">
                          <Link to="docs/spec/principle">
                            设计准则 Principle
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="typeface">
                          <Link to="docs/spec/typeface">字体 Typeface</Link>
                        </Nav.Item>
                        <Nav.Item index="color">
                          <Link to="docs/spec/color">色彩 Color</Link>
                        </Nav.Item>
                        <Nav.Item index="elevation">
                          <Link to="docs/spec/elevation">投影 Elevation</Link>
                        </Nav.Item>
                        <Nav.Item index="size">
                          <Link to="docs/spec/size">尺寸 Size</Link>
                        </Nav.Item>
                        <Nav.Item index="layout">
                          <Link to="docs/spec/layout">布局 Layout</Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Divider />
                    </>
                  )}
                  {location.pathname.includes("docs/acss") ? (
                    <>
                      <Nav.Item index="start">
                        <Link to="/docs/acss/start">开始使用</Link>
                      </Nav.Item>
                      <Nav.Item index="color">
                        <Link to="/docs/acss/color">色彩 Color</Link>
                      </Nav.Item>
                      <Nav.Item index="spacing">
                        <Link to="/docs/acss/spacing">间距 Spacing</Link>
                      </Nav.Item>
                      <Nav.Group title="布局">
                        <Nav.Item index="display">
                          <Link to="/docs/acss/display">Display</Link>
                        </Nav.Item>
                        <Nav.Item index="object-fit">
                          <Link to="/docs/acss/object-fit">Object Fit</Link>
                        </Nav.Item>
                        <Nav.Item index="overflow">
                          <Link to="/docs/acss/overflow">Overflow</Link>
                        </Nav.Item>
                        <Nav.Item index="position">
                          <Link to="/docs/acss/position">Position</Link>
                        </Nav.Item>
                        <Nav.Item index="top-right-bottom-left">
                          <Link to="/docs/acss/top-right-bottom-left">
                            Top Right Bottom Left
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="visibility">
                          <Link to="/docs/acss/visibility">Visibility</Link>
                        </Nav.Item>
                        <Nav.Item index="z-index">
                          <Link to="/docs/acss/z-index">Z-Index</Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Group title="Flex 和 Grid">
                        <Nav.Item index="flex-direction">
                          <Link to="/docs/acss/flex-direction">
                            Flex Direction
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="flex-wrap">
                          <Link to="/docs/acss/flex-wrap">Flex Wrap</Link>
                        </Nav.Item>
                        <Nav.Item index="flex">
                          <Link to="/docs/acss/flex">Flex</Link>
                        </Nav.Item>
                        <Nav.Item index="grid-template-columns">
                          <Link to="/docs/acss/grid-template-columns">
                            Grid Template Columns
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="grid-template-rows">
                          <Link to="/docs/acss/grid-template-rows">
                            Grid Template Rows
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="grid-auto-flow">
                          <Link to="/docs/acss/grid-auto-flow">
                            Grid Auto Flow
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="gap">
                          <Link to="/docs/acss/gap">Gap</Link>
                        </Nav.Item>
                        <Nav.Item index="justify-content">
                          <Link to="/docs/acss/justify-content">
                            Justify Content
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="justify-items">
                          <Link to="/docs/acss/justify-items">
                            Justify Items
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="justify-self">
                          <Link to="/docs/acss/justify-self">Justify Self</Link>
                        </Nav.Item>
                        <Nav.Item index="align-content">
                          <Link to="/docs/acss/align-content">
                            Align Content
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="align-items">
                          <Link to="/docs/acss/align-items">Align Items</Link>
                        </Nav.Item>
                        <Nav.Item index="align-self">
                          <Link to="/docs/acss/align-self">Align Self</Link>
                        </Nav.Item>
                        <Nav.Item index="place-content">
                          <Link to="/docs/acss/place-content">
                            Place Content
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="place-items">
                          <Link to="/docs/acss/place-items">Place Items</Link>
                        </Nav.Item>
                        <Nav.Item index="place-self">
                          <Link to="/docs/acss/place-self">Place Self</Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Group title="间距">
                        <Nav.Item index="space-between">
                          <Link to="/docs/acss/space-between">
                            Space Between
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="padding">
                          <Link to="/docs/acss/padding">Padding</Link>
                        </Nav.Item>
                        <Nav.Item index="margin">
                          <Link to="/docs/acss/margin">Margin</Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Group title="尺寸">
                        <Nav.Item index="width">
                          <Link to="/docs/acss/width">Width</Link>
                        </Nav.Item>
                        <Nav.Item index="min-width">
                          <Link to="/docs/acss/min-width">Min Width</Link>
                        </Nav.Item>
                        <Nav.Item index="max-width">
                          <Link to="/docs/acss/max-width">Max Width</Link>
                        </Nav.Item>
                        <Nav.Item index="height">
                          <Link to="/docs/acss/height">Height</Link>
                        </Nav.Item>
                        <Nav.Item index="min-height">
                          <Link to="/docs/acss/min-height">Min Height</Link>
                        </Nav.Item>
                        <Nav.Item index="max-height">
                          <Link to="/docs/acss/max-height">Max Height</Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Group title="字体">
                        <Nav.Item index="font-size">
                          <Link to="/docs/acss/font-size">Font Size</Link>
                        </Nav.Item>
                        <Nav.Item index="font-weight">
                          <Link to="/docs/acss/font-weight">Font Weight</Link>
                        </Nav.Item>
                        <Nav.Item index="letter-spacing">
                          <Link to="/docs/acss/letter-spacing">
                            Letter Spacing
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="line-height">
                          <Link to="/docs/acss/line-height">Line Height</Link>
                        </Nav.Item>
                        <Nav.Item index="text-align">
                          <Link to="/docs/acss/text-align">Text Align</Link>
                        </Nav.Item>
                        <Nav.Item index="text-color">
                          <Link to="/docs/acss/text-color">Text Color</Link>
                        </Nav.Item>
                        <Nav.Item index="text-opacity">
                          <Link to="/docs/acss/text-opacity">Text Opacity</Link>
                        </Nav.Item>
                        <Nav.Item index="text-decoration">
                          <Link to="/docs/acss/text-decoration">
                            Text Decoration
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="text-transform">
                          <Link to="/docs/acss/text-transform">
                            Text Transform
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="text-overflow">
                          <Link to="/docs/acss/text-overflow">
                            Text Overflow
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="line-clamp">
                          <Link to="/docs/acss/line-clamp">
                            Line Clamp
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="vertical-align">
                          <Link to="/docs/acss/vertical-align">
                            Vertical Align
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="whitespace">
                          <Link to="/docs/acss/whitespace">Whitespace</Link>
                        </Nav.Item>
                        <Nav.Item index="word-break">
                          <Link to="/docs/acss/word-break">Word Break</Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Group title="背景">
                        <Nav.Item index="background-color">
                          <Link to="/docs/acss/background-color">
                            Background Color
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="background-opacity">
                          <Link to="/docs/acss/background-opacity">
                            Background Opacity
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="background-position">
                          <Link to="/docs/acss/background-position">
                            Background Position
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="background-repeat">
                          <Link to="/docs/acss/background-repeat">
                            Background Repeat
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="background-size">
                          <Link to="/docs/acss/background-size">
                            Background Size
                          </Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Group title="边框">
                        <Nav.Item index="shadow">
                          <Link to="/docs/acss/shadow">Shadow</Link>
                        </Nav.Item>
                        <Nav.Item index="border-radius">
                          <Link to="/docs/acss/border-radius">
                            Border Radius
                          </Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Group title="动画">
                        <Nav.Item index="transition-property">
                          <Link to="/docs/acss/transition-property">
                            Transition Property
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="transition-duration">
                          <Link to="/docs/acss/transition-duration">
                            Transition Duration
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="transition-timing-function">
                          <Link to="/docs/acss/transition-timing-function">
                            Transition Timing Function
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="transition-delay">
                          <Link to="/docs/acss/transition-delay">
                            Transition Delay
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="animation">
                          <Link to="/docs/acss/animation">Animation</Link>
                        </Nav.Item>
                        <Nav.Item index="transform">
                          <Link to="/docs/acss/transform">Transform</Link>
                        </Nav.Item>
                        <Nav.Item index="transform-origin">
                          <Link to="/docs/acss/transform-origin">
                            Transform Origin
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="scale">
                          <Link to="/docs/acss/scale">Scale</Link>
                        </Nav.Item>
                        <Nav.Item index="rotate">
                          <Link to="/docs/acss/rotate">Rotate</Link>
                        </Nav.Item>
                        <Nav.Item index="translate">
                          <Link to="/docs/acss/translate">Translate</Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Group title="其他">
                        <Nav.Item index="opacity">
                          <Link to="/docs/acss/opacity">Opacity</Link>
                        </Nav.Item>
                        <Nav.Item index="fill">
                          <Link to="/docs/acss/fill">Fill</Link>
                        </Nav.Item>
                        <Nav.Item index="cursor">
                          <Link to="/docs/acss/cursor">Cursor</Link>
                        </Nav.Item>
                        <Nav.Item index="pointer-events">
                          <Link to="/docs/acss/pointer-events">
                            Pointer Events
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="user-select">
                          <Link to="/docs/acss/user-select">User Select</Link>
                        </Nav.Item>
                      </Nav.Group>
                    </>
                  ) : (
                    <>
                      <Nav.Item index="start">
                        <Link to="/docs/start">开始使用</Link>
                      </Nav.Item>
                      <Nav.Item index="resource">
                        <Link to="/docs/resource">设计资源</Link>
                      </Nav.Item>
                      <Nav.Item index="changelog">
                        <Link to="/changelog">更新日志</Link>
                      </Nav.Item>
                      <Nav.Divider />
                      <Nav.Group title="布局">
                        <Nav.Item index="grid">
                          <Link to="/components/grid">栅格 Grid</Link>
                        </Nav.Item>
                        <Nav.Item index="layout">
                          <Link to="/components/layout">布局 Layout</Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Divider />
                      <Nav.Group title="基础类">
                        <Nav.Item index="icon">
                          <Link to="/components/icon">图标 Icon</Link>
                        </Nav.Item>
                        <Nav.Item index="button">
                          <Link to="/components/button">按钮 Button</Link>
                        </Nav.Item>
                        <Nav.Item index="input">
                          <Link to="/components/input">输入框 Input</Link>
                        </Nav.Item>
                        <Nav.Item index="numeric-input">
                          <Link to="/components/numeric-input">
                            数字输入框 NumericInput
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="radio">
                          <Link to="/components/radio">单选 Radio</Link>
                        </Nav.Item>
                        <Nav.Item index="checkbox">
                          <Link to="/components/checkbox">勾选 Checkbox</Link>
                        </Nav.Item>
                        <Nav.Item index="switch">
                          <Link to="/components/switch">开关 Switch</Link>
                        </Nav.Item>
                        <Nav.Item index="tag">
                          <Link to="/components/tag">标签 Tag</Link>
                        </Nav.Item>
                        <Nav.Item index="slider">
                          <Link to="/components/slider">滑动条 Slider</Link>
                        </Nav.Item>
                        <Nav.Item index="menu">
                          <Link to="/components/menu">行动菜单 Menu</Link>
                        </Nav.Item>
                        <Nav.Item index="form">
                          <Link to="/components/form">表单 Form</Link>
                        </Nav.Item>
                        <Nav.Item index="table">
                          <Link to="/components/table">表格 Table</Link>
                        </Nav.Item>
                        <Nav.Item index="card">
                          <Link to="/components/card">卡片 Card</Link>
                        </Nav.Item>
                        <Nav.Item index="upload">
                          <Link to="/components/upload">上传 Upload</Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Divider />
                      <Nav.Group title="导航类">
                        <Nav.Item index="affix">
                          <Link to="/components/affix">固钉 Affix</Link>
                        </Nav.Item>
                        <Nav.Item index="nav">
                          <Link to="/components/nav">导航栏 Nav</Link>
                        </Nav.Item>
                        <Nav.Item index="tabs">
                          <Link to="/components/tabs">导航页签 Tabs</Link>
                        </Nav.Item>
                        <Nav.Item index="pagination">
                          <Link to="/components/pagination">
                            分页器 Pagination
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="breadcrumb">
                          <Link to="/components/breadcrumb">
                            面包屑 Breadcrumbs
                          </Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Divider />
                      <Nav.Group title="选择类">
                        <Nav.Item index="select">
                          <Link to="/components/select">选择器 Select</Link>
                        </Nav.Item>
                        <Nav.Item index="suggest">
                          <Link to="/components/suggest">
                            推荐选择器 Suggest
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="tree-select">
                          <Link to="/components/tree-select">
                            树形选择器 TreeSelect
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="date-picker">
                          <Link to="/components/date-picker">
                            日期选择器 DatePicker
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="time-picker">
                          <Link to="/components/time-picker">
                            时间选择器 TimePicker
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="color-picker">
                          <Link to="/components/color-picker">
                            颜色选择器 ColorPicker
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="cascader">
                          <Link to="/components/cascader">
                            级联选择器 Cascader
                          </Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Divider />
                      <Nav.Group title="反馈类">
                        <Nav.Item index="dialog">
                          <Link to="/components/dialog">对话框 Dialog</Link>
                        </Nav.Item>
                        <Nav.Item index="drawer">
                          <Link to="/components/drawer">浮层 Drawer</Link>
                        </Nav.Item>
                        <Nav.Item index="alert">
                          <Link to="/components/alert">提醒 Alert</Link>
                        </Nav.Item>
                        <Nav.Item index="message">
                          <Link to="/components/message">全局提醒 Message</Link>
                        </Nav.Item>
                        <Nav.Item index="popover">
                          <Link to="/components/popover">气泡提示 Popover</Link>
                        </Nav.Item>
                        <Nav.Item index="tooltip">
                          <Link to="/components/tooltip">工具提示 Tooltip</Link>
                        </Nav.Item>
                        <Nav.Item index="spinner">
                          <Link to="/components/spinner">旋转加载 Spinner</Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Divider />
                      <Nav.Group title="其他">
                        <Nav.Item index="motion">
                          <Link to="/components/motion">动效 Motion</Link>
                        </Nav.Item>
                        <Nav.Item index="resize-observer">
                          <Link to="/components/resize-observer">
                            尺寸监听 ResizeObserver
                          </Link>
                        </Nav.Item>
                        <Nav.Item index="portal">
                          <Link to="/components/portal">节点渲染 Portal</Link>
                        </Nav.Item>
                        <Nav.Item index="config-provider">
                          <Link to="/components/config-provider">
                            全局配置 ConfigProvider
                          </Link>
                        </Nav.Item>
                      </Nav.Group>
                      <Nav.Divider />
                    </>
                  )}
                </Nav>
              </Layout.Aside>
            )}
            {location.pathname === "/" ? (
              children
            ) : (
              <div style={{ flex: "1" }}>
                <Layout.Main className={styles.main}>
                  <div className="navSideContainer" />
                  {children}
                </Layout.Main>
                <div className={styles.footer}>
                  <div className={styles.footerInner}>
                    <svg width={180} height={40}>
                      <image
                        width={180}
                        height={40}
                        xlinkHref="data:image/png;base64,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"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                    <div className={styles.description}>
                      <p>
                        AD UI
                        针对网页端后台界面而设计，方便设计师与开发搭建整体的后台体验环境。
                      </p>
                      <p>
                        AD UI
                        建议以简单、合理的方案解决后台系统中的实际使用问题。
                      </p>
                    </div>
                    <p className={styles.connection}>
                      如有任何优化建议，请联系我们：yijiejiang@tencent.com
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Layout>
      </React.StrictMode>
    )
  }
}

export default SiteLayout
