---
order: 0.5
title:
  zh-CN: drag
  en-US: drag
---

使用 HTML `drag and drop API` 实现拖拽：

```jsx
const draggingIndex = useRef(undefined)
const [dataSource, setDataSource] = useState(
  Array.from(new Array(5), (_, i) => ({ key: i }))
)

return (
  <div>
    <Table
      className="demo"
      getRowProps={() => ({
        draggable: true,
        onDragEnter: (e) => {
          e.stopPropagation()
          e.preventDefault()
          e.currentTarget.classList.add("draggingActive")
        },
        onDragOver: (e) => {
          e.stopPropagation()
          e.preventDefault()
          e.dataTransfer.dropEffect = "move"
        },
        onDragLeave: (e) => {
          e.currentTarget.classList.remove("draggingActive")
        },
        onDrop: (e) => {
          e.stopPropagation()
          e.currentTarget.classList.remove("draggingActive")
          if (e.currentTarget.dataset.row !== draggingIndex.current) {
            const dataSourceDuplciated = [...dataSource]
            const obj = dataSourceDuplciated[draggingIndex.current]
            dataSourceDuplciated.splice(draggingIndex.current, 1)
            dataSourceDuplciated.splice(e.currentTarget.dataset.row, 0, obj)
            setDataSource(dataSourceDuplciated)
          }
        },
        onDragStart: (e) => {
          if (draggingIndex.current !== undefined) {
            const item = e.currentTarget
            e.dataTransfer.effectAllowed = "copyMove"
            e.dataTransfer.setDragImage(item, 0, 0)
            document.querySelectorAll(".drag-handles").forEach((o) => {
              o.style.pointerEvents = "none"
            })
          } else {
            e.preventDefault()
          }
        },
        onDragEnd: () => {
          draggingIndex.current = undefined
          document.querySelectorAll(".drag-handles").forEach((o) => {
            o.style.pointerEvents = "initial"
          })
        },
      })}
      dataSource={dataSource}
      columns={[
        {
          dataIndex: "test",
          title: "",
          render: (_, __, rowIndex) => (
            <div
              className="drag-handles"
              style={{ cursor: "grab", pointerEvents: "initial" }}
              onMouseDown={(e) => {
                draggingIndex.current = rowIndex
              }}
            >
              <Icon icon="draggable" />
            </div>
          ),
          width: 40,
        },
        {
          dataIndex: "testt",
          title: "key",
          render: ({ key }) => key,
          width: 100,
        },
        {
          dataIndex: "0",
          title: "100px 定宽",
          render: () => "100px",
          width: 100,
        },
        {
          dataIndex: "1",
          title: "最小 100px 宽度，在宽度有剩余时填充",
          render: () => "100 填充",
          width: 100,
          grow: true,
        },
        {
          dataIndex: "2",
          title: "最小 200px 宽度，在宽度有剩余时填充",
          render: () => "200 填充",
          width: 200,
          grow: true,
        },
      ]}
    />
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .demo .adui-table-td {
            pointer-events: none;
          }
          .draggingActive {
            position: relative;
          }
         .draggingActive::after {
            content: "";
            position: absolute;
            top: calc(100% - 2px);
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--primary-color);
            opacity: 0.3;
          }
        `,
      }}
    />
  </div>
)
```
