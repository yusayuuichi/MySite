# ResumeSite

Created with CodeSandbox
建造屬於自己的履歷網站

# 目的

- 學習 React & Hooks 的基礎使用
- 搭配後端使用 Node.js 實現 CRUD
- 履歷兼作品集

# 使用套件

- eslint
- prettier

# Node.js 版本

v16.10.0

```
nvm install v16.10.0
```

# 啟動 Server

```
yarn
yarn run start
```

## VS code 安裝 套件

- eslint v2.4.0 extension
- prettier v9.12..0 extension

```
Eslint安裝
eslint已存在於 react-scripts內，所以直接執行指令
npm init @eslint/config

? How would you like to use ESLint? …
  To check syntax only
❯ To check syntax and find problems
  To check syntax, find problems, and enforce code style

? What type of modules does your project use? …
❯ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

? Which framework does your project use? …
❯ React
  Vue.js
  None of these

? Does your project use TypeScript? › No / Yes V

? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node

? What format do you want your config file to be in? …
  JavaScript
  YAML
❯ JSON

@typescript-eslint/eslint-plugin@latest eslint-plugin-react@latest @typescript-eslint/parser@latest eslint@latest
? Would you like to install them now? › No / Yes

? Which package manager do you want to use? …
  npm
❯ yarn
  pnpm

react-scripts因為內建eslint
上述的init會下載別的eslint
所以執行yarn start 後會被要刪除package.json內的esling
刪除yarn.lock 跟 node_modules 資料夾
```

```
Prettier 安裝
yarn add prettier -D -E

關閉所有不必要或可能 ESLint 與 Prettier 衝突的規則
yarn add eslint-config-prettier -D

.eslintrc.json 新增 prettier extends 規則並擺在最後
"extends": [
    // ...,
    "prettier"
  ]

安裝 eslint-plugin-prettier
將 Prettier 作為 ESLint 規則運行，並將差異報告為單個 ESLint 問題。
yarn add eslint-plugin-prettier -D

.eslintrc.json 新增設定
  "extends": ["plugin:prettier/recommended"]
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "warn"
  }

新增 .prettierrc.json 並加入內容
// 其中 jsxSingleQuote，這是指在 jsx 裡也是使用單引號規則。
{
  "printWidth": 100,
  "useTabs": true,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "all"
}

新增 .prettierignore 排除檔案並加入內容
.github
.husky
dist
node_modules
```

在 package.json 檔案新增 prettier and lint 檢查及格式化指令。
"scripts": {
// ...,
// ESLint 檢查指令
"lint:check": "eslint --ext=ts,tsx src/",
// ESLint 修正指令，--fix 修正，--ext=.ts,.tsx 修正副檔名為 .ts,.tsx，src/ 底下全部目錄
"lint": "eslint --fix --ext=ts,tsx src/",
// prettier 檢查指令
"format:check": "prettier . --check --ignore-unknown",
// prettier 格式化指令，. 是全部目錄，--write 是複寫，--ignore-unknown 略過它不認識的檔案
"format": "prettier . --write --ignore-unknown",
}

安裝 react hooks eslint

```
yarn add eslint-plugin-react-hooks -D

在 .eslintrc.json 檔案，新增 plugin:react-hooks/recommended 設定。
{
  "extends": [
    // ...
    "plugin:react-hooks/recommended"
  ]
}

{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

不需要強制引用 React library 設定
在 React 17.0.0 之後的版本，將 React 是否要引用，變成一個可選擇的規則

```
"rules": {
  "react/react-in-jsx-scope": "off"
}
```

https://ithelp.ithome.com.tw/m/articles/10298012