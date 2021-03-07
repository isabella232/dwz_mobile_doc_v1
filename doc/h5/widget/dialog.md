# dialog 弹出框组件

> ## 效果展示

![](../../../_media/h5/widget/dialog/1.jpg?height=360)
![](../../../_media/h5/widget/dialog/2.jpg?height=360)
![](../../../_media/h5/widget/dialog/3.jpg?height=360)

> ## 基础用法

```html
<a
  target="dialog"
  data-href="tpl/widget/dialog/dialog1.html"
  data-pop="fullscreen"
  >关于</a
>

<a
  onclick="$.dialog.open({
        url:'tpl/helper/dialogPic.html?dwz_callback=biz.pageRender',
        data:{info: 'Web 3D效果展示', src: 'image/pic/3d_1.jpg'},
        pop:'pic'
    })"
  >导航</a
>
```

> ## 组件 js 接口

> ### open 打开

**参数说明**

- url: 必填，html 页面路径
- type: 非必填，默认`GET`，取值范围 `GET, POST`
- data: 非必填，默认空对象
- external: iframe 打开外部页面，默认 false
- interceptor: 拦截器如果存在，并返回 false 时 open 失效
- callback: 回调函数如果存在，加载完页面执行回调函数

```js
// 全屏模式dialog
$.dialog.open({ url: "tpl/widget/dialog/dialog1.html", pop: "fullscreen" });

// 打开外部页面
$.dialog.open({
  url: "https://gitee.com/dwzteam/dwz_mobile_app",
  pop: "fullscreen",
  external: true,
  page_title: "dialog外部页面",
});

// pop模式dialog【小窗口展示】
$.dialog.open({ url: "tpl/widget/dialog/dialog2.html", pop: "pop" });

// pic模式dialog【查看大图】
$.dialog.open({
  url: "tpl/helper/dialogPic.html?dwz_callback=biz.pageRender",
  data: { info: "Web 3D效果展示", src: "image/pic/3d_1.jpg" },
  pop: "pic",
});

// actionSheet模式【选择省、市、区】
$.dialog.open({
  url: "tpl/helper/signPop.html?dwz_callback=$.drawingBoardRender",
  pop: "actionSheet",
});
```

> ### close 关闭

```js
// 关闭dialog
$.dialog.close();

// 确认关闭dialog
$.dialog.close({ closeMsg: "确认关闭弹出框吗?" });
```
