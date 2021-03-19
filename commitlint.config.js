module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
        "site",
        "tailwind",
      ],
    ],
    "header-max-length": [0, "always", 150],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"],
    "scope-case": [0, "always", "camel-case"],
  },
}
