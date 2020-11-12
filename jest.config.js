module.exports = {
  "setupFilesAfterEnv": ["<rootDir>/tests/setup.js"],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    ".*\\.(css|less|scss)$": "identity-obj-proxy"
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    "ts-jest": {
      "diagnostics": {          
        "ignoreCodes": "TS1192" 
      }
    }
  }
}