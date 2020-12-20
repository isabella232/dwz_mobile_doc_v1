> ## 事件处理

### 绑定事件并传参数

```javascript
$("body").on(
  "touchstart",
  function (event) {
    console.log(event, event.data);
  },
  { test1: "a1", test2: "b1" }
);
```

### 自定义事件并传参数

```javascript
$("body").on("custom.event", function (event) {
  console.log(event, event.data);
});
$("body").trigger("custom.event", { test1: "a1", test2: "b1" });
```

### 绑定多个事件, 解除绑定事件

```javascript
$("body").on("touchstart", testFn, { test: 123 });
$("body").on(
  "touchstart",
  function (event) {
    console.log(event.data);
    $("body").off("touchstart", testFn); // 解除指定的touchstart事件testFn
    // $('body').off('touchstart'); // 解除当前元素全部touchstart事件
  },
  { test: 124 }
);
function testFn(event) {
  console.log(event.data);
}
```

### 判断是否绑定事件 isBind() 方法

```javascript
$(document).on("touchstart touchmove", function (event) {
  console.log(event.type);
});
console.log($(document).isBind("touchstart"));
```

### 绑定事件传参数

```javascript
$("body").on(
  $.event.hasTouch ? "touchstart" : "click",
  function (event) {
    console.log(this.data);
    event.preventDefault();
  },
  { test1: "a", test2: "b" }
);
```

### trigger 传参数

```javascript
$("body").on("custom.event", function (event) {
  console.log(this.data);
  event.preventDefault();
});
$("body").trigger("custom.event", { test1: "a1", test2: "b1" });
```

### 绑定多个事件, 空格分隔的多个事件名称

```javascript
$(document).on("touchstart touchmove", function (event) {
  console.log(event.type);
});
```

> ## 其它技巧

### dwz.eavl() 方法

```javascript
function test1() {
  alert(1);
}
const test2 = dwz.eavl("test1");
test2();
```

### navView, navTab 拦截器 dwz_interceptor

```html
<a data-href="my.html?dwz_interceptor=checkLogin" target="navView" rel="my"
  >My</a
>
```

### 或者定义 dwz 全局拦截函数

```javascript
dwz.urlInterceptor = function (url) {
  // Todo
};
```

### navView 回调 testAjaxSuccess

```html
<a
  data-href="test.html?dwz_callback=testAjaxSuccess"
  target="navView"
  rel="test"
  >test</a
>
```

```javascript
function testAjaxSuccess(html) {
  var $box = $(this);
  $box.html(html).initUI();
}
```

### navView 外部链接

```html
<a data-href="http://baidu.com" target="navView" rel="test" data-external="true"
  >test</a
>
```

### navTab 返回 Home navTab 页面 回调 home_render

```html
<a
  class="bar-button"
  data-href="home.html?dwz_callback=home_render"
  target="navTab"
  rel="home"
  >test</a
>
```

### ajaxTodo 用于收藏、关注等操作

```html
<a class="active" target="ajaxTodo" data-url="{{serverUrl}}">test</a>
```

### unitBox

```javascript
$box.parentsUnitBox();
```

### parentsUntil

```javascript
$box.parentsUntil(function () {
  return $(this).is("selector");
});
```

### 下拉菜单联动

```html
<select
  name="test"
  class="toggleSelectRef"
  data-ref-box="#toggleSelectRef_test1|#toggleSelectRef_test2"
  data-ctr-show="true"
  data-ref-val="1,3|2,3"
>
  <option value="1">显示1</option>
  <option value="2">显示2</option>
  <option value="3">显示1，2</option>
  <option value="4">全部不显示</option>
</select>
<div id="toggleSelectRef_test1">
  # 下拉菜单联动控制局部box显示隐藏, class="toggleSelectRef" [data-ref-box]
  [data-ref-val] [data-ctr-show] 可选，默认控制隐藏，为true时控制显示
</div>
<div id="toggleSelectRef_test2">test2</div>
```

### 表单验证 input 中文验证

```
pattern="[\u4e00-\u9fa5]{1,20}"
pattern=".{1,20}"
```

> ## JS 模版

[腾讯 art-template](https://github.com/aui/art-template)

- https://aui.github.io/art-template/docs/
- https://blog.csdn.net/pupilxiaoming/article/details/77118855

```javascript
// 基于模板名渲染模板
template(filename, data);

// 将模板源代码编译成函数
template.compile(source, options);

// 将模板源代码编译成函数并立刻执行
template.render(source, data, options);
```

> ## 跨域

> Apache 测试环境跨域

RewriteEngine On
RewriteRule ^/app_proxy/(.\*)$ http://api.xxx.com/$1 [P,L]

/etc/apache2/httpd.conf 放开 proxy 和 mod_rewrite 模块

> 开发环境跨域 chrome 跨域

Allow-Control-Allow-Origin: \*
