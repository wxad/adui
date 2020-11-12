import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Grid,
  Slider,
} from '../../components'

const numbers = { 0: 2, 1: 3, 2: 4, 3: 6 }
const gutters = { 0: 4, 1: 8, 2: 12, 3: 16, 4: 20, 5: 24 }

export default class PropertyBox extends React.Component {

  state = {
    number: 1,
    gutter: 3,
  }

  render() {
    const {
      number,
      gutter,
    } = this.state

    const codes = `<Grid.Row
  gutter={${gutters[gutter]}}
>
  <Grid.Col span={${12 / numbers[number]}} />
  ...
</Grid.Row>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left} style={{ padding: "40px" }}>
            <Grid.Row
              style={{ flex: 1 }}
              gutter={gutters[gutter]}
            >
              {
                Array.from(new Array(numbers[number]), (_, i) => i).map(item => (
                  <Grid.Col span={12 / numbers[number]} key={item}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "160px",
                        fontFamily: "SFMono-Semibold",
                        fontSize: "13px",
                        lineHeight: "20px",
                        color: "#fff",
                        fontWeight: "600",
                        backgroundColor: "var(--primary-color)",
                      }}
                    >
                      Frame
                    </div>
                  </Grid.Col>
                ))
              }
            </Grid.Row>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>可配置项</div>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>栅格数量</dt>
              <dd className={styles.controlContent}>
                <Slider
                  inputVisible={false}
                  defaultValue={1}
                  onChange={value => { this.setState({ number: value }) }}
                  min={0}
                  max={3}
                  marks={numbers}
                />
              </dd>
              <dt className={styles.controlTitle}>栅栏间距</dt>
              <dd className={styles.controlContent}>
                <Slider
                  inputVisible={false}
                  defaultValue={3}
                  onChange={value => { this.setState({ gutter: value }) }}
                  min={0}
                  max={5}
                  marks={gutters}
                />
              </dd>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}