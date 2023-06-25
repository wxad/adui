const fs = require("fs")
const path = require("path")

async function writeLinesToFile(filename, filepath) {
  const outputPath = path.join(
    path.resolve(__dirname, "../components/icon/"),
    filename
  )
  const contents = [
    "/* eslint-disable */",
    "/**",
    ` * 由 ${filepath} 生成`,
    " */",
    ...fs
      .readFileSync(path.resolve(__dirname, filepath), "utf8")
      .split(/\r?\n/),
    "",
  ].join("\n")
  fs.writeFileSync(outputPath, contents)
}

// writeLinesToFile(
//   "IconShowData.js",
//   "../node_modules/adui-icon/lib/data/icon-types/type-data.js"
// )
writeLinesToFile(
  "IconSvgPaths.ts",
  "../node_modules/adui-icon/lib/data/path/path.ts"
)
writeLinesToFile(
  "IconNames.ts",
  "../node_modules/adui-icon/lib/data/path/adui-icon-names.ts"
)
