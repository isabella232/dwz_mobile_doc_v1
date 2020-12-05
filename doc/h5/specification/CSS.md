## 代码风格

> ### 1、代码格式化
```html
# 样式书写一般有两种：一种是紧凑格式 (Compact)
.jdc{ display: block;width: 50px;}
# 一种是展开格式（Expanded）
.jdc{
    display: block;
    width: 50px;
}
```
团队约定

统一使用展开格式书写样式

> ### 2、代码大小写
统一使用小写

推荐

```html
.dwz{
	display:block;
}
```	

不推荐

```html
.DWZ{
	DISPLAY:BLOCK;
}
```

> ### 3、声明

为单个css选择器或新申明开启新行

推荐：

```html
.jdc, 
.jdc-logo, 
.jdc-hd {
    color: #ff0;
}
.nav{
    color: #fff;
}
```

不推荐：

```html
.jdc,jdc-logo,.jdc-hd {
    color: #ff0;
}.nav{
    color: #fff;
}
```

> ### 4、属性值引号

css属性值需要用到引号时，统一使用单引号
      
推荐

```html
.jdc { 
font-family: 'Hiragino Sans GB';
}
```

不推荐

```html
.jdc { 
font-family: "Hiragino Sans GB";
}
```

> ### 5、移动端常用私有属性

```html
.scroll::-webkit-scrollbar {
    width: 0;
    height: 0;
}
```

> ### 6、组件命名

通用组件命名

```html
<div class="dwz-{ 组件名 }">
    <div class="dwz-{ 组件名 }-item"></div>
</div>

<div class="dwz-{ 组件名 }">
    <div class="dwz-{ 组件名 }-head"></div>
    <div class="dwz-{ 组件名 }-content"></div>
    <div class="dwz-{ 组件名 }-footer"></div>
</div>
```

通用组件命名（加不同类型）

注意！！！ 

一般不会在组件内部写新的元素都是使用最外层加一个命名类控制内部功能和样式

```html
<div class="dwz-{ 组件名 } { 组件名 }-{类型}">
    <div class="dwz-{ 组件名 }-item"></div>
</div>

<div class="dwz-{ 组件名 } { 组件名 }-{类型}">
    <div class="dwz-{ 组件名 }-head"></div>
    <div class="dwz-{ 组件名 }-content"></div>
    <div class="dwz-{ 组件名 }-footer"></div>
</div>
```

通用组件嵌套(tabbar组件内部嵌套list组件)

```html
<div class="dwz-tabbar" >
      <div class="dwz-tabbar-item">
          <div class="dwz-list"> 
                <div class="dwz-list-item"></div>
                <div class="dwz-list-item"></div>
          </div>
      </div>
</div>
```
业务组件

业务组件在写的时候使用命名空间来覆盖原有样式

```html
<div class="page-home">
    <div class="dwz-tabbar" >
          <div class="dwz-tabbar-item"></div>
    </div>
</div>

<style>
.page-home {
    .home-tabbar {
        .dwz-tabbar-item {
        
        }
    }
}
</style>
```

> ### 注意！！！

页面内部写业务类组件的时候不可以定具体的宽高，只能使用flex布局，float布局等，或者宽高的时候使用vw，vh，或者 百分比%
