# navTab 导航标签

- App 底部导航标签组件
- 整个 App 中只能有一个 navTab 组件，app 入口 index.html 中初始化

> ## 基础用法

- 注意：tab-panel 中的 panel-item 和 tab-bar 中的 tab-item 个数保持一致

```html
<div id="nav-tab" class="view-container">
  <div class="tab-panel">
    <div class="panel-item cached unitBox"></div>
    <div class="panel-item cached unitBox"></div>
    <div class="panel-item cached unitBox"></div>
    <div class="panel-item cached unitBox"></div>
  </div>
  <div class="tab-bar">
    <a
      class="tab-item"
      data-href="tpl/home.html?dwz_callback=biz.home.render"
      tabid="home"
      data-cache="true"
      ><i class="icon icon-home"></i><span>首页</span></a
    >
    <a
      class="tab-item"
      data-href="tpl/message/index.html?dwz_callback=biz.message.listRender"
      tabid="message"
      ><i class="icon icon-message"></i><span>消息</span></a
    >
    <a
      class="tab-item"
      data-href="tpl/my/favorite.html?dwz_callback=biz.favorite.listRender"
      tabid="favorite"
      data-cache="true"
      ><i class="icon icon-favorite"></i><span>收藏</span></a
    >
    <a
      class="tab-item"
      data-href="tpl/my/index.html?dwz_callback=biz.my.render"
      tabid="my"
      data-cache="true"
      ><i class="icon icon-my"></i><span>我的</span></a
    >
  </div>
</div>
```

> ## tab-item 属性说明

- 组件源码 `dwz.navTab.js`
- tabid: 每个标签页 tabid 必须唯一
- data-href: ajax 加载标签页 url
- data-cache: 标签页缓存配制，默认为 false，为 true 时第二次打开标签页时不会重新加载

> ## 组件 js 接口

### init() 初始化

```js
$.navTab.init({
  openIndex: 0, // 默认打开第0个标签页，下标从0开始
});
```

### open() 切换标签页

```js
$.navTab.open({
  tabid: "home", // 切换到tabid为home有标签页
  url: "tpl/home.html?dwz_callback=biz.home.render", // 标签页url，dwz_callback是页面渲染回调函数，用于自定义加载页面和业务处理
});
```
