import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Switch, Button } from "../../components"
import { SIZES } from "./consts"

export default class PropertyBox extends React.Component {
  state = {
    activeIndex: 0,
    size: "small",
    theme: null,
  }

  render() {
    const { theme, size, activeIndex } = this.state

    const codes = `<Button.Group${size === "small" ? "" : ` size="${size}"`}${
      theme ? ` theme="${theme}"` : ""
    }>
  <Button ${activeIndex === 0 ? "active" : ""}>内容一</Button>
  <Button ${activeIndex === 1 ? "active" : ""}>内容二</Button>
  <Button ${activeIndex === 2 ? "active" : ""}>内容三</Button>
  <Button ${activeIndex === 3 ? "active" : ""}>内容四</Button>
</Button.Group>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Button.Group {...this.state}>
              <Button
                active={activeIndex === 0}
                onClick={() => {
                  this.setState({
                    activeIndex: 0,
                  })
                }}
              >
                内容一
              </Button>
              <Button
                active={activeIndex === 1}
                onClick={() => {
                  this.setState({
                    activeIndex: 1,
                  })
                }}
              >
                内容二
              </Button>
              <Button
                active={activeIndex === 2}
                onClick={() => {
                  this.setState({
                    activeIndex: 2,
                  })
                }}
              >
                内容三
              </Button>
              <Button
                active={activeIndex === 3}
                onClick={() => {
                  this.setState({
                    activeIndex: 3,
                  })
                }}
              >
                内容四
              </Button>
            </Button.Group>
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
              <div className={styles.switchControl}>
                <Switch
                  checkedText="轻量风格"
                  unCheckedText="轻量风格"
                  checked={!!theme}
                  onChange={(param) =>
                    this.setState({ theme: param ? "light" : null })
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
