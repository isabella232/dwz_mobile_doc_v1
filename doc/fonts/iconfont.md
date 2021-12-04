# 制作 svg 字体图标库

> ## 生成字体库 woff 文件

1. 打开这个网址
   https://icomoon.io/app/#/select

2. 导入下载好的 svg 文件
   提示：svg 文件可在阿里矢量图库下载，https://www.iconfont.cn/

3. 点击 Cenrate Font 生成 woff 文件

> ## woff 转 base64（小程序）

1. 打开这个网址
   https://www.css-js.com/tools/base64.html

2. woff 转 base64

3. 编写 css

```css
@font-face {
	font-family: biz-icons;
	src: url(data:application/font-woff;base64,xxxxxx);
}

.biz-icon,
i[class*=' biz-icon-'],
i[class^='biz-icon-'] {
	font-family: biz-icons !important;
	speak: none;
	font-style: normal;
	font-weight: 400;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	vertical-align: baseline;
	display: inline-block;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.biz-icon-add-device:before {
	content: '\e900';
}
.biz-icon-add-device:before {
	content: '\e901';
}
```
