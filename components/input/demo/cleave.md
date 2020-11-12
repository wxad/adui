---
order: 2
title:
  zh-CN: 输入内容格式
  en-US: Cleave
---

输入内容格式（[cleave.js](https://github.com/nosir/cleave.js)）

```jsx
  const [date, setDate] = useState("2020-01-21")
  const [password, setPassword] = useState("1234567")
  const [phone, setPhone] = useState("135 0123 4567")
  const [upper, setUpper] = useState("ABC")

  return (
    <React.Fragment>
      <Input
        value={date}
        onChange={({ target: { value: date } }) => setDate(date)}
        cleaveOptions={{
          delimiter: "-",
          blocks: [4, 2, 2],
        }}
        style={{ marginRight: "16px" }}
      />
      <Input
        value={phone}
        onChange={({ target: { value: phone } }) => setPhone(phone)}
        cleaveOptions={{
          blocks: [3, 4, 4],
        }}
        style={{ marginRight: "16px" }}
      />
      <Input
        value={password}
        type="password"
        onChange={({ target: { value: password } }) => setPassword(password)}
        style={{ marginRight: "16px" }}
      />
      <Input
        value={upper}
        type="upper"
        cleaveOptions={{ uppercase: true }}
        onChange={({ target: { value: upper } }) => setUpper(upper)}
      />
    </React.Fragment>
  )
```
## Alert
### 关于 Cleave.js
利用 `cleaveOptions` 可以实现手机号、日期、数字及自定义格式。  
除此之外，还可通过 `cleaveOptions={{ uppercase: true }}` 开启英文字母大写的功能。