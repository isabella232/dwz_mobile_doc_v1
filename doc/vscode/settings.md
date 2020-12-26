## VS Code Settings eslint 配制

```json
{
  "window.zoomLevel": 0,
  // "prettier.semi": false,
  // "prettier.singleQuote": true,
  //.vue文件template格式化支持，并使用js-beautify-html插件
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.js": "vscode-typescript",

  //js-beautify-html格式化配置，属性强制换行
  //文档：https://github.com/beautify-web/js-beautify#css--html
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force"
    }
  },

  //根据文件后缀名定义vue文件类型
  "files.associations": {
    "*.vue": "vue",
    "*.html": "html"
  },
  "workbench.settings.editor": "json",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "svn.enableProposedApi": "product",
  "editor.codeActionsOnSave": {
    // "editor.formatOnSave": true,
    "source.fixAll.eslint": true //保存时eslint自动修复错误
  },
  "explorer.autoReveal": false,
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "git.enableSmartCommit": true,
  "git.autofetch": true,
  "workbench.colorTheme": "Default Light+"
}
```
