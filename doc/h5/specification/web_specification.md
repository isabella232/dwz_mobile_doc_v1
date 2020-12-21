> ## 前端规范

### 目的

旨在增强团队开发协作、提高代码质量和打造开发基石的编码规范，以下规范是团队基本约定的内容，必须严格遵循。

### [HTML 规范](specification/HTML.md)

基于 W3C 等官方文档，并结合团队业务和开发过程中总结的规范约定，让页面 HTML 代码更具语义性。

### 图片规范

了解各种图片格式特性，根据特性制定图片规范，包括但不限于图片的质量约定、图片引入方式、图片合并处理等，旨在从图片层面优化页面性能。

### [CSS 规范、命名规范](specification/CSS.md)

统一规范团队 CSS 代码书写风格和使用 CSS 预编译语言语法风格，提供常用媒体查询语句和浏览器私有属性引用，并从业务层面统一规范常用模块的引用。

### JavaScript 规范

统一团队的 JS 语法风格和书写习惯，减少程序出错的概率，其中也包含了 ES6 的语法规范和最佳实践。

### 页面内部写 css 和 js

目前项目中支持页面底部写 css 和 js

> ## 前端工程启动

```bash
#### 第一次checkout工作，需要初始化
npm intall

#### 前端开发模式
npm run dev

#### 代码压缩混淆打包【注意index页面*js换成all.min.js】
npm run prod

#### 正式打包出问题时调试代码【css、js不压缩混淆】
npm run test

#### 清理dist目录(linux / mac)
npm run clean

#### 清理dist目录（Windows系统）
npm run cleanWin
```

> ## 项目结构

- doc 【文档】
- src 【前端工程源文件】
  - css 【css 目录，通过 less 自动编译生成】
  - images 【UI 相关图标和背景】
  - js 【js 目录】
    - biz.conf.js 【API 接口配制】
    - biz.common.js 【公共业务方法】
    - biz.user.js 【用户相关 js】
    - biz.\*.js 【其它业务模块 js 源文件】
    - dwz/dwz.\*.js 【前端框架相关 js】
  - less 【css 源文件目录】
    - base 【存放公共的样式表：一般不做改动】
      - variables.less 【文字色号，文字层级大小，布局相关，边框样式，模糊背景等】
      - content.less 【内容相关，内容文字标题等】
      - footer.less 【页面底部元素，菜单等】
      - header.less 【页面头部元素，头部标题栏等】
      - icon.less 【各种图标】
      - keyframes.less 【动画效果】
      - latout.less 【grid 布局】
      - normalize.less 【页面初始化】
    - pages 【页面样式】
      - common.less 【页面公共样式】
      - my.less 【我的页面 css】
      - \*.less 【其它页面 css】
    - widget 【组件样式（一般不做修改），目录：widegt】
      - alert.less 【普通弹框类】
      - calendar.less 【日期控件】
      - chart.less 【图表】
      - croppic.less 【用户头像裁剪】
      - dialog.less 【自定义弹出框】
      - dropdown.less 【下拉框】
      - form.less 【input 框】
      - list.less 【列表】
      - map.less 【地图】
      - navTab.less 【底部导航栏（云犁没用到）】
      - panel.less 【各种面板】
      - tab.less 【tab 样式】
      - table.less 【table 表格】
      - upload.less 【图片上传样式】
    - ui.less 【所有页面的 less 通过@import 引入】
  - tpl 【html 页面模板】
  - index.html 【前端页面入口文件】
- gulpfile.js 【gulp 配制】
- package.json 【前端工程配制文件】

> ## 命名规范

- 业务 js 文件 biz 开头，比如：biz.common.js, biz.user.js
- 命名尽量保持前端后端统一命名

> ## css 使用 less 编译生成

- less 文件入口 src/less/ui.less
- 新加 less 文件都要在 ui.less 文件中 import 进来
- less 文件命名详见上面项目结构
