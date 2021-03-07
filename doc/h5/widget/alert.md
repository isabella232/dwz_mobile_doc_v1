# alert 提示框

> ## 效果展示

![](../../../_media/h5/widget/alert/1.jpg?height=360)
![](../../../_media/h5/widget/alert/2.jpg?height=360)

> ## toast 提示

```js
$.alert.toast("alert组件示例 toast");
```

> ## 成功提示

```js
$.alert.success("alert组件示例 success");
```

> ## 错误提示

```js
$.alert.error("alert组件示例 error");
```

> ## 自定义提示

```js
$.alert.open({
  msg: "DWZ Mobile alert组件示例，基础提示",
});

$.alert.open({
  title: "自定义标题",
  msg: "DWZ Mobile alert组件示例，自定义标题",
});

$.alert.open(
  {
    title: "自定义标题",
    msg: "DWZ Mobile alert组件示例，自定义标题 + 点击回调",
  },
  function (ret) {
    $.alert.toast("buttonIndex: " + ret.buttonIndex);
  }
);
```

> ## 确认提示

```js
$.alert.confirm(
  {
    msg: "确认要删除吗？",
  },
  function (ret) {
    $.alert.toast("buttonIndex: " + ret.buttonIndex);
  }
);

// 确认提示 + 自定义标题和按钮
$.alert.confirm(
  {
    title: "操作确认",
    msg: "这个3个按钮的确认提醒",
    buttons: ["是", "否", "取消"],
  },
  function (ret) {
    $.alert.toast("buttonIndex: " + ret.buttonIndex);
  }
);
```

> ## prompt 提示

```js
$.alert.prompt("tpl/widget/alert/prompt.html?dwz_callback=biz.pageRender", {
  form_url: biz.server.getUrl(biz.server.changePwd),
});
```

> ## close 关闭

```js
// 关闭提示框：成功提示、错误提示、确认提示、自定义提示
$.alert.close();

// 关闭prompt 提示
$.alert.close("prompt");
```
