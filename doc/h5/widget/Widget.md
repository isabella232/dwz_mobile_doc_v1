[设计原则(有赞)](https://design.youzan.com/design-principle/high-efficiency.html)

皮肤包
- 全部组件在设计的时候，必须使用通用的颜色，最好是面板颜色可以固定下来，包括字体的颜色

## web组件（推迟......）

### 基础
- Color 色彩
    - [有赞](https://design.youzan.com/visual/color.html)
    - [iview](https://www.iviewui.com/components/color)
    - 面板类颜色：C1 - Cn  什么场景使用怎么样的颜色
- [边框类型](https://design.youzan.com/visual/corner.html)
    - 上，下，左，右，上下，左右，全包围，空
    - 边框宽度：L1 - Ln
    - 边框圆角：R1 - Rn 
- [阴影](https://design.youzan.com/visual/shadow.html)
    - 阴影层级：S1 - Sn
- Font 字体
    - [iview](https://www.iviewui.com/components/font)
    - [有赞](https://design.youzan.com/visual/font.html)
    - 字体大小：T1 - Tn  每个字体大小配合一个行高
    - 字体颜色：C1 - Cn
    - 字重：F1 - Fn
- Button 按钮
    - [iview](https://www.iviewui.com/components/button)
- Icon 图标
    - [有赞](https://design.youzan.com/visual/icon.html)
    - [iview](https://www.iviewui.com/components/icon)
    - 通用图标大小
    - 后续考虑出一个图标库
    - 类似于 [REMIX ICON](https://remixicon.com/)

### 布局
- Card 卡片 别名：panel
    - 主要是定义面板的结构
    - [iview](https://www.iviewui.com/components/card)
- List 列表
    - 滚动列表
    - 列表布局
    - [iview](https://www.iviewui.com/components/list)
- Collapse 别名：手风琴 [折叠面板](https://www.iviewui.com/components/collapse) 
- Divider 分割线
    - [iview](https://www.iviewui.com/components/divider)
- ClamPlines 多行文本裁剪 
    - [zent](https://youzan.github.io/zent/zh/component/clamp-lines)

### 导航
- Tabs 标签页
    - [iview](https://www.iviewui.com/components/tabs)
    - 全屏切换（tabs在上，下，左，右）
    - 单独tabs（tabs在上，下，做，右）
- Table 表格
    - [iview](https://www.iviewui.com/components/table)

#### 表单
- Radio 单选框
    - [iview](https://www.iviewui.com/components/radio)
- Checkbox 多选框
    - [iview](https://www.iviewui.com/components/checkbox)

### 视图
- [iview](https://www.iviewui.com/components/alert)
- 警告提示（样式）
- 全局提示（基本上用在开发中调试错误）
- 通知提醒（用户使用）
- 对话框（用户使用）
- 抽屉（用户使用）
- Swiper 轮播图
    - [Swiper官网](https://www.swiper.com.cn/)
    - [vant](https://youzan.github.io/vant/#/zh-CN/swipe)
    
### 图表类
- [设计参照echars图表](https://echarts.apache.org/zh/index.html)

## 移动端组件
- 在设计组件的时候，不能单单为云宝服务，应当脱离项目和业务，思考纯粹的移动端可能会需要的功能，只有这样才能做出跨项目，跨行业通用的组件
- 参照一些优秀的移动端框架整理即可(基本上基础组件都是能用到的)
- [Vant](https://youzan.github.io/vant-weapp/#/intro)
- [WebUi](https://weui.io/)
- [MUI](https://dev.dcloud.net.cn/mui/)

## 小程序组件
- [小程序官方组件](https://developers.weixin.qq.com/miniprogram/dev/component/)
- ColorUI  微信小程序搜索 —— ColorUI组件库 ， colorui

#### 注意！！！！
小程序端在设计的时候，应当摒弃使用外部的框架，使用原生的编写组件

设计上，需要注意底部的导航栏，还有顶部的头，尽量不要用新的设计，使用原生自带的底部导航栏，和顶部（可沉浸式）。

这样做的原因：小程序他自带的页面挑战的方法包含了很多的页面路由，可是我们自己写的话，需要重新封装

#### 组件格式（命名篇）

> 字体 font

```html
@T1: 32px // 强调性文字
@T2: 28px // 导航标题名称
@T3: 24px // 一级标题、强调性文字
@T4: 18px // 二级标题
@T5: 16px // 三级标题、特殊字体样式
@T6: 14px // 正文、长文本内容、标签名称、四级标题
@T7: 12px // 图标坐标轴数字、弱化文字、装饰性英文、注释文字
```

>  颜色 color

颜色分类：主色调1、主色调2、辅助色调1、辅助色调2......

在设计时，应当明确，标题1、2、3、4使用哪个色调，面板1、2、3、4使用哪个色调（为做皮肤包考虑）

```html

```

> 边距 padding margin

```html
@padding: 
@margin:
```

> 图标 icon

正常图标

二级导航图标

序号类图标

```html
.icon-xxx:
```

> 布局 

盛满容器

```html
.full-abs:
.full-fixed:
.full-size:
```

flex 布局

table 布局(看情况)

grade 布局

> 阴影

> 阴影 shadow

```html
.inset-shadow:
```

> 模糊 filter

```html
.backdrop-filter:
```

#### 组件类

> 分割线

```html
.dwz-divider:

不同类型
.dwz-divider {
    &.type-1 {}
}
```

> `>` 图标

```html
.dwz-arrow-l:
.dwz-arrow-r:
.dwz-arrow-t:
.dwz-arrow-b:
```

> card 卡片 别名：panel

```html
<div class="dwz-panel type-1">
    <div class="dwz-panel-head"></div>
    <div class="dwz-panel-content"></div>
    <div class="dwz-panel-footer"></div>
</div>
```

> list 列表

- 普通列表

```html
<ul class="dwz-list type-1">
    <li class="dwz-list-item">test1</li>
</ul>
```

- 滚动列表

```html
<div id="dwz-list-scroll">
    <ul class="dwz-list type-1">
        <li class="dwz-list-item">test1</li>
    </ul>
</div>

const marquee2 = new DwzMarquee({
    $el: "#dwz-list-scroll",
    cls: "dwz-list",
    itemCls: "dwz-list-item",
    duration: 500,
    pageSize: 4
});
```

> 手风琴 collapse （折叠面板）

```html
<div class="dwz-accordion type-1" id="dwz-accordion">
    <div class="dwz-accordion-item active">
        <div class="tab"><i class="icon icon-xxx"></i><span
            class="txt-info"></span><span class="dwz-arrow-l"></span></div>
        <div class="panel"></div>
    </div>
</div>
```
