import React from "react"
import styles from "./components/propertyBox.scss"
import CodeBox from "./components/CodeBox"
import { Select, Switch, Button, Table } from "../../components"
import { SIZES } from "./consts"

export default class PropertyBox extends React.Component {
  state = {
    expandedRowKeys: [],
    columnsResizable: true,
    loading: false,
    selectSin: false,
    selectMul: false,
    size: "small",
    sort: true,
    filter: true,
    expand: false,
    nodata: false,
    filteredValue: [],
    fontSize: "13px",
    dataSource: [
      {
        key: 0,
        one: "项目一",
        two: "6,755,654",
        three: "92,435,344",
        four: "3,635",
        five: "34.52%",
      },
      {
        key: 1,
        one: "项目二",
        two: "12,344",
        three: "3,756,464",
        four: "1,452",
        five: "42.63",
      },
      {
        key: 2,
        one: "项目三",
        two: "4,463,346",
        three: "4,463,346",
        four: "2,535",
        five: "4.96%",
      },
      {
        key: 3,
        one: "项目四",
        two: "6,534,785",
        three: "1,345,645",
        four: "2,643",
        five: "5.79%",
      },
      {
        key: 4,
        one: "项目五",
        two: "67,278,63",
        three: "1,323,531",
        four: "3,467",
        five: "0.25%",
      },
    ],
  }

  render() {
    const {
      columnsResizable,
      loading,
      selectSin,
      selectMul,
      size,
      sort,
      filter,
      expand,
      nodata,
      filteredValue,
      fontSize,
      dataSource,
    } = this.state

    const codes = `<Table
  ${columnsResizable ? "columnsResizable" : ""}
  ${expand ? 'expandedRowRender={() => "这是要展示的内容"}' : ""}
  dataSource={${
    nodata ? "[]" : "Array.from(new Array(2), (_, i) => ({ key: i }))"
  }}
  ${loading ? "loading" : ""}
  ${expand ? "onExpandChange={keys => {}}" : ""}
  ${selectSin || selectMul ? "onSelectChange={keys => {}}" : ""}
  ${selectSin ? "selectMultiple={false}" : ""}
  ${selectMul ? "selectMultiple" : ""}
  ${selectSin || selectMul ? "selectOnRowClick" : ""}
  columns={[
    {
      dataIndex: "xxx",
      title: "项目",
      ${
        filter
          ? `filters: [
        { text: "分类 A", value: 1 },
        { text: "分类 D", value: 2 },
      ],
      filterMultiple: false,
      onFilter: value => {},
      `
          : ""
      }
    },
    {
      dataIndex: "yyy",
      title: "数据项",
      ${sort ? "onSort: value => {}," : ""}
    },
    ...
  ]}
/>`

    const selectFinal = (() => {
      if (selectSin) {
        return false
      }
      if (selectMul) {
        return true
      }
      return false
    })()

    return (
      <div className={styles.wrapper}>
        <div className={styles.property}>
          <div className={styles.left}>
            <Table
              dataSource={nodata ? [] : dataSource}
              columnsResizable={columnsResizable}
              expandedRowKeys={expand ? this.state.expandedRowKeys : null}
              loading={loading}
              selectMultiple={selectFinal}
              onSelectChange={
                selectSin || selectMul
                  ? (keys, options) => {
                      console.log("yijie", keys, options)
                    }
                  : null
              }
              expandedRowRender={
                expand
                  ? () => (
                      <div style={{ padding: "16px 0px 16px 24px" }}>
                        这是要展示的内容
                      </div>
                    )
                  : null
              }
              onExpandChange={
                expand
                  ? (expandedRowKeys) => this.setState({ expandedRowKeys })
                  : null
              }
              expandOnRowClick={expand ? true : null}
              selectOnRowClick={selectSin || selectMul ? true : null}
              size={size}
              style={{
                flex: ".85",
                minWidth: "240px",
                fontSize,
              }}
            >
              <Table.Column
                dataIndex="one"
                title="项目"
                filters={
                  filter
                    ? [
                        {
                          text: "分类 A",
                          value: "1",
                        },
                        {
                          text: "分类 D",
                          value: "2",
                        },
                      ]
                    : null
                }
                filterMultiple={false}
                onFilter={
                  filter
                    ? (value) => {
                        if (value[0] === "1") {
                          this.setState({
                            dataSource: [
                              {
                                key: 0,
                                one: "项目一",
                                two: "6,755,654",
                                three: "92,435,344",
                                four: "3,635",
                                five: "34.52%",
                              },
                              {
                                key: 1,
                                one: "项目二",
                                two: "12,344",
                                three: "3,756,464",
                                four: "1,452",
                                five: "42.63",
                              },
                            ],
                            filteredValue: ["1"],
                          })
                        } else if (value[0] === "2") {
                          this.setState({
                            dataSource: [
                              {
                                key: 2,
                                one: "项目三",
                                two: "4,463,346",
                                three: "4,463,346",
                                four: "2,535",
                                five: "4.96%",
                              },
                              {
                                key: 3,
                                one: "项目四",
                                two: "6,534,785",
                                three: "1,345,645",
                                four: "2,643",
                                five: "5.79%",
                              },
                              {
                                key: 4,
                                one: "项目五",
                                two: "67,278,63",
                                three: "1,323,531",
                                four: "3,467",
                                five: "0.25%",
                              },
                            ],
                            filteredValue: ["2"],
                          })
                        } else {
                          this.setState({
                            dataSource: [
                              {
                                key: 0,
                                one: "项目一",
                                two: "6,755,654",
                                three: "92,435,344",
                                four: "3,635",
                                five: "34.52%",
                              },
                              {
                                key: 1,
                                one: "项目二",
                                two: "12,344",
                                three: "3,756,464",
                                four: "1,452",
                                five: "42.63",
                              },
                              {
                                key: 2,
                                one: "项目三",
                                two: "4,463,346",
                                three: "4,463,346",
                                four: "2,535",
                                five: "4.96%",
                              },
                              {
                                key: 3,
                                one: "项目四",
                                two: "6,534,785",
                                three: "1,345,645",
                                four: "2,643",
                                five: "5.79%",
                              },
                              {
                                key: 4,
                                one: "项目五",
                                two: "67,278,63",
                                three: "1,323,531",
                                four: "3,467",
                                five: "0.25%",
                              },
                            ],
                            filteredValue: [],
                          })
                        }
                      }
                    : null
                }
              />
              <Table.Column
                dataIndex="two"
                title="数据项"
                onSort={
                  sort
                    ? (order) => {
                        if (order === "") {
                          this.setState({
                            dataSource: [
                              {
                                key: 0,
                                one: "项目一",
                                two: "6,755,654",
                                three: "92,435,344",
                                four: "3,635",
                                five: "34.52%",
                              },
                              {
                                key: 1,
                                one: "项目二",
                                two: "12,344",
                                three: "3,756,464",
                                four: "1,452",
                                five: "42.63",
                              },
                              {
                                key: 2,
                                one: "项目三",
                                two: "4,463,346",
                                three: "4,463,346",
                                four: "2,535",
                                five: "4.96%",
                              },
                              {
                                key: 3,
                                one: "项目四",
                                two: "6,534,785",
                                three: "1,345,645",
                                four: "2,643",
                                five: "5.79%",
                              },
                              {
                                key: 4,
                                one: "项目五",
                                two: "67,278,63",
                                three: "1,323,531",
                                four: "3,467",
                                five: "0.25%",
                              },
                            ],
                          })
                        } else if (order === "asc") {
                          this.setState({
                            dataSource: [
                              {
                                key: 0,
                                one: "项目二",
                                two: "12,344",
                                three: "3,756,464",
                                four: "1,452",
                                five: "42.63",
                              },
                              {
                                key: 1,
                                one: "项目三",
                                two: "4,463,346",
                                three: "4,463,346",
                                four: "2,535",
                                five: "4.96%",
                              },
                              {
                                key: 2,
                                one: "项目四",
                                two: "6,534,785",
                                three: "1,345,645",
                                four: "2,643",
                                five: "5.79%",
                              },
                              {
                                key: 3,
                                one: "项目五",
                                two: "67,278,63",
                                three: "1,323,531",
                                four: "3,467",
                                five: "0.25%",
                              },
                              {
                                key: 4,
                                one: "项目一",
                                two: "6,755,654",
                                three: "92,435,344",
                                four: "3,635",
                                five: "34.52%",
                              },
                            ],
                          })
                        } else if (order === "desc") {
                          this.setState({
                            dataSource: [
                              {
                                key: 0,
                                one: "项目一",
                                two: "6,755,654",
                                three: "92,435,344",
                                four: "3,635",
                                five: "34.52%",
                              },
                              {
                                key: 4,
                                one: "项目五",
                                two: "67,278,63",
                                three: "1,323,531",
                                four: "3,467",
                                five: "0.25%",
                              },
                              {
                                key: 3,
                                one: "项目四",
                                two: "6,534,785",
                                three: "1,345,645",
                                four: "2,643",
                                five: "5.79%",
                              },
                              {
                                key: 2,
                                one: "项目三",
                                two: "4,463,346",
                                three: "4,463,346",
                                four: "2,535",
                                five: "4.96%",
                              },
                              {
                                key: 1,
                                one: "项目二",
                                two: "12,344",
                                three: "3,756,464",
                                four: "1,452",
                                five: "42.63",
                              },
                            ],
                          })
                        }
                      }
                    : null
                }
              />
              <Table.Column dataIndex="three" title="数据项" />
              <Table.Column dataIndex="four" title="数据项" />
            </Table>
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
              <dt className={styles.controlTitle}>字体大小</dt>
              <dd className={styles.controlContent}>
                <Select
                  defaultValue="13px"
                  onSelect={(value) => {
                    this.setState({ fontSize: value })
                  }}
                >
                  <Select.Option value="12px">12px</Select.Option>
                  <Select.Option value="13px">13px</Select.Option>
                  <Select.Option value="14px">14px</Select.Option>
                  <Select.Option value="16px">16px</Select.Option>
                </Select>
              </dd>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="可拖拽列"
                  unCheckedText="可拖拽列"
                  checked={columnsResizable}
                  onChange={(param) =>
                    this.setState({ columnsResizable: param })
                  }
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="可排序"
                  unCheckedText="可排序"
                  checked={sort}
                  onChange={(param) => this.setState({ sort: param })}
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="可筛选"
                  unCheckedText="可筛选"
                  checked={filter}
                  onChange={(param) => this.setState({ filter: param })}
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="可单选"
                  unCheckedText="可单选"
                  checked={selectSin}
                  disabled={selectMul || expand}
                  onChange={(param) => {
                    this.setState({
                      selectSin: param,
                    })
                  }}
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="可多选"
                  unCheckedText="可多选"
                  checked={selectMul}
                  disabled={selectSin || expand}
                  onChange={(param) => {
                    this.setState({
                      selectMul: param,
                    })
                  }}
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="可展开"
                  unCheckedText="可展开"
                  checked={expand}
                  disabled={selectSin || selectMul}
                  onChange={(param) => {
                    this.setState({ expand: param })
                    if (!param) {
                      this.setState({
                        expandedRowKeys: [],
                      })
                    }
                  }}
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="加载态"
                  unCheckedText="加载态"
                  checked={loading}
                  onChange={(param) => this.setState({ loading: param })}
                />
              </div>
              <div className={styles.switchControl}>
                <Switch
                  checkedText="无数据"
                  unCheckedText="无数据"
                  checked={nodata}
                  onChange={(param) => this.setState({ nodata: param })}
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
