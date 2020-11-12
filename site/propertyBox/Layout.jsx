/* eslint-disable */
import React from 'react'
import styles from './components/propertyBox.scss'
import CodeBox from './components/CodeBox'
import {
  Layout,
  Switch,
  Grid,
} from '../../components'

export default class PropertyBox extends React.Component {

  state = {
    topFence: true,
    leftFence: true,
    rightFence: true,
    contentTop: true,
    bottomFence: true,
  }

  render() {
    const {
      topFence,
      leftFence,
      rightFence,
      contentTop,
      bottomFence,
    } = this.state
    const codes = `<Layout
  style={{ display: "flex", flexDirection: "column" }}
>
  ${topFence ? "<Layout.Header />" : ""}
  <Grid.Row style={{ flex: 1 }}>
    ${leftFence ? "<Layout.Aside />" : ""}
    <Layout.Main>
      ${contentTop ? "<div>contentTop</div>" : ""}
      <div>content</div>
      ${bottomFence ? "<div>contentBottom</div>" : ""}
    </Layout.Main>
    ${rightFence ? "<Layout.Aside />" : ""}
  </Grid.Row>
</Layout>`
    const center = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
    return (
      <div className={styles.wrapper}>
        <style dangerouslySetInnerHTML={{ __html: `
          .adui-propertybox-layout-header { position: relative; height: 64px; box-shadow: none; }
          .adui-propertybox-layout-aside { position: relative; }
          .adui-propertybox-layout-content { position: relative; }
          .adui-propertybox-layout-contentHeader { position: relative; }
          .adui-propertybox-layout-header::after,
          .adui-propertybox-layout-contentHeader::after,
          .adui-propertybox-layout-content::after,
          .adui-propertybox-layout-aside::after { content: "";position: absolute;top: 0;left: 0;width: 100%;height: 100%;background-color: var(--primary-color); }
          .adui-propertybox-layout-header::after { opacity: .4 }
          .adui-propertybox-layout-aside::after { opacity: .5 }
          .adui-propertybox-layout-contentHeader::after { opacity: .7 }
          .adui-propertybox-layout-content::after { opacity: .9 }
          .adui-layout-asideContent { height: 100%; }
        `}} />
        <div className={styles.property}>
          <div
            className={styles.left}
            style={{ boxShadow: "none", borderRadius: "8px" }}
          >
            <Layout
              style={{display: "flex", flexDirection: "column", width: "100%", height: "440px", color: "#fff", overflow: "hidden" }}
            >
              {
                topFence && (
                  <Layout.Header
                    className="adui-propertybox-layout-header"
                    style={{ ...center }}
                  >
                    <div style={{ position: "relative", zIndex: 1 }}>header</div>
                  </Layout.Header>
                )
              }
              <Grid.Row style={{ flex: 1,}}>
                {
                  leftFence && (
                    <Layout.Aside style={{ display: "flex", width: "120px", boxShadow: "none" }}>
                      <div
                        className="adui-propertybox-layout-aside"
                        style={{
                          width: "120px",
                          height: "100%",
                          minHeight: "376px",
                          ...center,
                        }}
                      >
                        <div style={{ position: "relative", zIndex: 1 }}>asideLeft</div>
                      </div>
                    </Layout.Aside>
                  )
                }
                <Layout.Main style={{ display: "flex", flexDirection: "column" }}>
                  {
                    contentTop && (
                      <div
                        className="adui-propertybox-layout-contentHeader"
                        style={{
                          height: "64px",
                          ...center,
                        }}
                      >
                        <div style={{ position: "relative", zIndex: 1 }}>contentHeader</div>
                      </div>
                    )
                  }
                  <div
                    className="adui-propertybox-layout-content"
                    style={{
                      flex: 1,
                      minHeight: "248px",
                      ...center,
                    }}
                  >
                    <div style={{ position: "relative", zIndex: 1 }}>content</div>
                  </div>
                  {
                    bottomFence && (
                      <div
                        className="adui-propertybox-layout-contentHeader"
                        style={{
                          height: "64px",
                          ...center,
                        }}
                      >
                        <div style={{ position: "relative", zIndex: 1 }}>contentFooter</div>
                      </div>
                    )
                  }
                </Layout.Main>
                {
                  rightFence && (
                    <Layout.Aside style={{ display: "flex", width: "120px", boxShadow: "none" }}>
                      <div
                        className="adui-propertybox-layout-aside"
                        style={{
                          width: "120px",
                          height: "100%",
                          minHeight: "376px",
                          ...center,
                        }}
                      >
                        <div style={{ position: "relative", zIndex: 1 }}>asideRight</div>
                      </div>
                    </Layout.Aside>
                  )
                }
              </Grid.Row>
            </Layout>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTitle}>可配置项</div>
            <dl className={styles.controls}>
              <div className={styles.switchControl}>
                <Switch checkedText="顶栏" unCheckedText="顶栏" checked={topFence} onChange={param => this.setState({ topFence: param })} />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="左侧栏" unCheckedText="左侧栏" checked={leftFence} onChange={param => this.setState({ leftFence: param })} />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="右侧栏" unCheckedText="右侧栏" checked={rightFence} onChange={param => this.setState({ rightFence: param })} />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="内容区顶部" unCheckedText="内容区顶部" checked={contentTop} onChange={param => this.setState({ contentTop: param })} />
              </div>
              <div className={styles.switchControl}>
                <Switch checkedText="底栏" unCheckedText="底栏" checked={bottomFence} onChange={param => this.setState({ bottomFence: param })} />
              </div>
            </dl>
          </div>
        </div>
        <CodeBox codes={codes} />
      </div>
    )
  }
}