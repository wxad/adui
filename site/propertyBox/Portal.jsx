import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Button, Portal, Grid } from "../../components"

export default class PropertyBox extends React.Component {
  state = {
    position: "0",
    show: false,
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ show: true })
    }, 0)
  }

  render() {
    const { show, position } = this.state

    const codes = `<>
  <div id="adui-portal-0" />
  <div id="adui-portal-1" />
  <div id="adui-portal-2" />

  <Portal
    className="adui-portal-custom"
    container={document.getElementById("adui-portal-${position}")}
  >
    <div>
      渲染父节点 #adui-portal-${position}
    </div>
  </Portal>
</>`

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left} style={{ padding: "40px" }}>
            <Grid.Row style={{ flex: 1 }} gutter={16}>
              {Array.from(new Array(3), (_, i) => i).map((item, i) => (
                <Grid.Col span={4} key={item}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "160px",
                      fontFamily: "SFMono-Semibold",
                      fontSize: "13px",
                      lineHeight: "20px",
                      fontWeight: "600",
                      border: "2px solid var(--primary-color)",
                    }}
                    id={`adui-portal-${i}`}
                  />
                </Grid.Col>
              ))}
            </Grid.Row>
            {show && (
              <Portal
                className="adui-portal-custom"
                container={document.getElementById(`adui-portal-${position}`)}
              >
                <div>
                  渲染父节点 <br />
                  #adui-portal-{position}
                </div>
              </Portal>
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>可配置项</div>
            <dl className={styles.controls}>
              <dt className={styles.controlTitle}>渲染父节点</dt>
              <dd className={styles.controlContent}>
                <Button.Group banner>
                  {["0", "1", "2"].map((o) => (
                    <Button
                      key={o}
                      active={o === position}
                      onClick={() => {
                        this.setState(
                          {
                            show: false,
                          },
                          () => {
                            this.setState({ position: o, show: true })
                          }
                        )
                      }}
                    >
                      {o}
                    </Button>
                  ))}
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
