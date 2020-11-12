import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Slider,
  Switch,
  Button,
  Card,
} from '../../components'
import { SIZES } from "./consts"

export default class PropertyBox extends React.Component {

  state = {
    size: "small",
    header: true,
    title: true,
    subTitle: false,
    interactive: false,
    elevation: 1,
  }

  render() {
    const {
      size,
      header,
      title,
      subTitle,
      interactive,
      elevation,
    } = this.state

    const codes = `<Card
  ${interactive ? `interactive` : ""}
  elevation={${elevation}}
>
  ${header ? `<Card.Header 
    ${title ? `title="卡片标题"` : ""} 
    ${size === "small" ? "" : `size="${size}"`}
    ${subTitle ? `subTitle="副标题"` : ""} 
    ${title ? `style={{ boxShadow: "0 1px 0 0 rgba(0,0,0,0.06)" }}` : ""}
  />` : ""}
  <div> ... </div>
</Card>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left} style={{ padding: "40px 90px", backgroundColor: "#fafafa" }}>
            <Card
              style={{ flex: 1 }}
              interactive={interactive}
              elevation={elevation}
            >
              {
                header && (
                  <Card.Header
                    title={title ? "卡片标题" : ""}
                    size={size}
                    subTitle={subTitle ? "副标题" : ""}
                    style={{ boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.06)" }} 
                  />
                )
              }
              <div style={{ height: "182px" }} />
            </Card>
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
              <dt className={styles.controlTitle}>投影层级</dt>
              <dd className={styles.controlContent}>
                <Slider
                  inputVisible={false}
                  defaultValue={1}
                  onChange={value => { this.setState({ elevation: value }) }}
                  min={0}
                  max={4}
                  marks={{ 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 }}
                />
              </dd>
              <div className={styles.switchControl}>
                <Switch checkedText="卡片顶栏" unCheckedText="卡片顶栏" checked={header} onChange={param => this.setState({ header: param })} />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="标题" unCheckedText="标题" checked={title} onChange={param => this.setState({ title: param })} />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="副标题" unCheckedText="副标题" checked={subTitle} onChange={param => this.setState({ subTitle: param })} />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="可交互" unCheckedText="可交互" checked={interactive} onChange={param => this.setState({ interactive: param })} />
              </div>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}