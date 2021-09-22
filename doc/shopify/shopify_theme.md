# Shopify 笔记

> ## shopify 自定义主题

[Shopify CLI 自定义主题](https://shopify.dev/themes/getting-started/customize)

1. 请求访问商家的商店
2. 安装 Shopify CLI

```bash
brew tap shopify/shopify
brew install shopify-cli
```

3. 使用 Shopify CLI 进行身份验证

```bash
shopify login --store 7788sc.myshopify.com
```

> 显示您当前连接到的商店

```bash
shopify store
```

> 无需注销并重新登录即可在商店之间切换

```bash
shopify switch --store 7788sc.myshopify.com
```

4. 下载商户主题码
   如果商家没有他们的主题的 GitHub 存储库，那么您需要下载主题代码的副本才能在本地进行处理。

```bash
shopify theme pull ~/workspace/html5/shopify/thefitville
```

5. 进行自定义
6. 预览您的更改

```bash
shopify theme serve
```

7. 共享您的更改

```bash
shopify theme push
```

8. 发布更新的主题

```bash
shopify theme publish
```

> ## themekit

[Choosing between Shopify CLI and Theme Kit](https://shopify.dev/themes/tools/theme-kit)

Shopify CLI replaces Theme Kit for most Shopify theme development tasks. You should use Shopify CLI if you're working on Online Store 2.0 themes. You should use Theme Kit instead of Shopify CLI only if you're working on older themes or you have Theme Kit integrated into your existing theme development workflows.

- 配制 config.yml
- theme get
- theme watch

> ## 模板语法

### 引入 css

```
{{ 'index.css' | assets_url | stylesheet_tag }}
```

### 自定义下单结束页面

Shopify 后台搜索 Checkout Setting，填入 js 代码

```js
Shopify.Checkout.OrderStatus.addContent('内容');
```

> ## private api

> ## Shopify GitHub 集成

https://shopify.dev/themes/tools/github/getting-started

> ## shopify 参考资料

- [Google Pagespeed 网站优化分析](https://developers.google.cn/speed/pagespeed/insights/)
- https://blog.csdn.net/lubaba20/article/details/112389673
