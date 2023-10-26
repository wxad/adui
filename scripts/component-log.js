const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

function sortTags(tags) {
  return tags.sort((a, b) => {
    const [majorA, minorA, patchA] = a.slice(1).split(".").map(Number)
    const [majorB, minorB, patchB] = b.slice(1).split(".").map(Number)
    if (majorA !== majorB) return majorB - majorA
    if (minorA !== minorB) return minorB - minorA
    return patchB - patchA
  })
}

function getTags() {
  const output = execSync("git tag").toString()
  const tags = output.trim().split("\n")
  return sortTags(tags)
}

function getTagDate(tag) {
  const output = execSync(`git log -1 --format=%ai ${tag}`).toString()
  return output.trim()
}

function getCommits(tag1, tag2) {
  const output = execSync(
    `git log ${tag1}..${tag2} --pretty=format:%H:%s`
  ).toString()
  return output.trim().split("\n")
}

function parseComponent(commit) {
  const regex = /(fix|feat)\((.+)\)/i
  const match = commit.match(regex)
  return match ? { type: match[1].toLowerCase(), name: match[2] } : null
}

function generateChangelog() {
  const tags = getTags()
  const changelog = {}

  tags.forEach((tag, index) => {
    const date = getTagDate(tag)
    const previousTag = index !== tags.length - 1 ? tags[index + 1] : ""
    const commitList = getCommits(previousTag, tag)

    commitList.forEach((commitLine) => {
      const [hash, ...commitParts] = commitLine.split(":")
      const commit = commitParts.join(":")
      const component = parseComponent(commit)
      if (component) {
        const { type, name } = component
        if (!changelog[name]) {
          changelog[name] = {}
        }

        if (!changelog[name][tag]) {
          changelog[name][tag] = {
            date,
            logs: [],
          }
        }

        changelog[name][tag].logs.push({
          type,
          text: commitParts.slice(1).join("").trim(),
          hash,
        })
      }
    })
  })

  return changelog
}

const changelog = generateChangelog()
fs.writeFileSync(
  path.join(__dirname, "../site/theme/component-changelog.json"),
  JSON.stringify(changelog, null, 2)
)
