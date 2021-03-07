# navView 侧滑导航页

- 组件源码 `dwz.navView.js`
- 从右边滑入打开
- 全屏卡片式布局，支持多个 navView 页面共享同一个显示空间，像重叠在一起的一幅扑克牌重叠在一起
- 打开多个 navView 页面时，组件内部控制 z-index，显示最顶层页面
- 支持 dwz_interceptor 请求拦截器，支持全局 dwz 全局拦截函数 $.urlInterceptor
- 支持 dwz_callback 页面加载回调函数
- 支持 dwz_helper 页面加载辅助函数

> ## 基础用法

```html
<a
  target="navView"
  data-href="tpl/about.html?dwz_callback=biz.home.aboutRender"
  rel="about"
  >关于</a
>

<a
  onclick="$.navView.open({
        url:'tpl/transport/driving.html?dwz_callback=biz.transport.drivingRender', 
        data:{name: '杭州大前端网络技术工作室',address: '杭州余杭区文一西路1218号',lng: 20.005807, lat: 30.278029},
        rel:'driving'
    })"
  >导航</a
>

<a data-href="http://baidu.com" target="navView" rel="test" data-external="true"
  >外部页面</a
>
```

> ## 组件 js 接口

### open() 打开页面

**参数说明**

- rel: 非必填，默认 `_blank`
- url: 必填，html 页面路径
- type: 非必填，默认`GET`，取值范围 `GET, POST`
- data: 非必填，默认空对象
- wipeClose: 支持向右滑动返回，默认 false,
- external: iframe 打开外部页面，默认 false
- interceptor: 拦截器如果存在，并返回 false 时 open 失效
- callback: 回调函数如果存在，加载完页面执行回调函数

```js
$.navView.open({
  rel: "driving",
  url: "tpl/transport/driving.html?dwz_callback=biz.transport.drivingRender",
  type: "POST",
  data: {
    name: "杭州大前端网络技术工作室",
    address: "杭州余杭区文一西路1218号",
    lng: 20.005807,
    lat: 30.278029,
  },
  callback: function (tpl, params) {},
});
```

### close() 关闭当前页面

```js
$.navView.close();
```

### closeByRel() 关闭指定页面

```js
$.navView.closeByRel("about");
```
