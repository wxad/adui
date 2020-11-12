/* eslint-disable */
const fs = require("fs-extra")
const path = require("path")

const libPath = path.resolve(__dirname, "../lib/")
const dirs = fs
  .readdirSync(libPath)
  .filter(
    o =>
      o.indexOf("_") === -1 &&
      o.indexOf("style") === -1 &&
      o.indexOf("motion") === -1 &&
      o.indexOf("portal") === -1 &&
      o.indexOf("resize-observer") === -1 &&
      o.indexOf("config-provider") === -1 &&
      fs.statSync(path.join(libPath, o)).isDirectory()
  )

dirs.forEach(dir => {
  fs.unlink(`${libPath}/${dir}/style.js`)
  fs.writeFile(
    `${libPath}/${dir}/style/index.js`,
    '"use strict";\nrequire("./index.css");',
    "utf8"
  )
})
