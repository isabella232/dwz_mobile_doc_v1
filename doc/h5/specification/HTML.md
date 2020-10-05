## 代码规范
### 1、团队约定
为了能让浏览器更好的解析代码以及能让代码具有更好的可读性，有如下约定： 
- 所有具有开始标签和结束标签的元素都要写上起止标签，某些允许省略开始标签或和束标签的元素亦都要写上。
- 空元素标签都不加 “/” 字符
  - 空元素：area、base、br、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr

推荐：
```html
<div>
<h1>我是h1标题</h1>
<p>我是一段文字，我有始有终，浏览器能正确解析</p>
</div>
<br>
```
不推荐：
```html
<div>
<h1>我是h1标题</h1>
<p>我是一段文字，我有始无终，浏览器亦能正确解析
</div>
<br/>
```
### 2、书写风格
#### HTML代码大小写
HTML标签名、类名、标签属性和大部分属性值统一用小写

推荐：
```html
<div class="demo"></div>
```
不推荐：
```html
<div class="DEMO"></div>
<DIV CLASS="DEMO"></DIV>
```
HTML文本、CDATA、JavaScript、meta标签某些属性等内容可大小写混合
```html
<!-- 优先使用 IE 最新版本和 Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<!-- HTML文本内容 -->
<h1>I AM WHAT I AM </h1>
<!-- JavaScript 内容 -->
<script type="text/javascript">
	var demoName = 'demoName';
	...
</script>
<!-- CDATA 内容 -->
<script type="text/javascript"><![CDATA[
...
]]></script>
```
#### 类型属性

需要为 CSS、JS 指定类型属性

推荐：
```html
<link rel="stylesheet" type="text/css" href="" >
<script type="text/javascript" src="" ></script>
```
不推荐：
```html
<link rel="stylesheet" href="" >
<script src=""></script>
```
#### 元素属性

元素属性值使用双引号语法
元素属性值可以写上的都写上

推荐：
```html
<input type="text">
<input type="radio" name="name" checked="checked" >
```
不推荐：
```html
<input type=text>	
<input type='text'>
<input type="radio" name="name" checked >
```
#### 代码缩进

统一使用四个空格进行代码缩进，使得各编辑器表现一致

各编辑器有相关配置,yunli中有.editorconfig配置文件，只需要在编辑器中安装editorconfig插件（用webstorm和phpstorm举例）

```html
<div class="jdc">
    <a href="#"></a>
</div>
```

代码嵌套

元素嵌套规范，每个块状元素独立一行，内联元素可选

推荐：

```html
<div>
    <h1></h1>
    <p></p>
</div>	
<p><span></span><span></span></p>
```

不推荐：

```html
<div>
    <h1></h1><p></p>
</div>
<p> 
    <span></span>
    <span></span>
</p>
```

段落元素与标题元素只能嵌套内联元素

推荐：

```html
<h1><span></span></h1>
<p><span></span><span></span></p>
```
不推荐：

```html
<h1><div></div></h1>
<p><div></div><div></div></p>
```
