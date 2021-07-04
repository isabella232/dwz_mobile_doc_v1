/**
Title: dwzBytedanceImageX
Description: dwzBytedanceImageX
**/

<p style="color: #ccc; margin-bottom: 30px;">来自于：DWZ Mobile<a style="background-color: #95ba20; color:#fff; padding:4px 8px;border-radius:5px;margin-left:30px; margin-bottom:0px; font-size:12px;text-decoration:none;" target="_blank" href="//www.apicloud.com/mod_detail/dwzBytedanceImageX">立即使用</a></p>

<div class="outline">

[convertImg](#a1)

</div>

# **模块示例**

为帮助用户更好更快的使用模块，维护了一个[示例](https://community.apicloud.com/bbs/forum.php?mod=viewthread&tid=190147)，示例中包含示例代码、知识点讲解、注意事项等，供您参考。

[git 示例](https://gitee.com/dwzteam/dwz_mobile_app)

|                                      安卓 APK 测试包                                      |                                    技术服务微信                                     |
| :---------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: |
| ![](https://dwzteam.github.io/dwz_mobile_doc_v1/_media/readme/app_download.png?width=200) | ![](https://dwzteam.github.io/dwz_mobile_doc_v1/_media/readme/wx_zhh.png?width=200) |

# **概述**

**dwzBaiduFaceLive 模块概述**

本模块封装了字节跳动火山引擎图片加载 SDK，支持 heic、heif、webp、avif 格式转化为 jpeg 格式的 base64 字符串，返回给前端 js。

**模块使用攻略**

1. 使用之前须从火山引擎开放平台申请开发者账号并完成企业认证。[字节跳动火山引擎开发平台控制台](https://console.volcengine.com/imagex/overview/)
2. aid 就是 appid，通过[火山引擎应用管理](https://console.volcengine.com/baf/)创建即可
3. 对接火山引擎服务器端图片上传 SDK，服务端和 App 数据交互接口，图片 url 使用火山引擎的图片 url
4. App 获取火山引擎 heic 图片 url
5. APICloud 模块市场搜索 dwzBytedanceImageX，增加到 APICloud 工程中
6. 使用此模块之前先配置 config.xml 文件，配置完毕后，需通过云端编译生效，配置方法如下：

```xml
<feature name="dwzBytedanceImageX">
    <param name="aid" value="123456"/><!--对应字节跳动火山引擎appid-->
</feature>
```

<div id="a1"></div>

# **convertImg**

图片转化接口 convertImg：heic、heif、webp、avif 格式转化为 jpeg 格式的 base64 字符串，返回给前端 js

```js
const module = api.require('dwzBytedanceImageX');
module.convertImg(
	{
		debug: 0, // 调试开关(默认:0)：0, 1
		url: item.url // 原图url
	},
	(ret) => {
		console.log(ret);
	}
);
```

## callback(ret)

ret：

- 类型：JSON 对象

```json
{
	"status": 1, //状态值（整数）；1||0，人脸识别成功/失败
	"base64str": "data:image/jpeg;base64,xxx" // jpeg格式base64图片
}
```

## 示例代码

示例基于 DWZ Mobile，其它前端框架思路也是把 heic 这类图片使用 dwzBytedanceImageX 模块转换成 jpeg 格式的 base64 字符串，最后更新 img 标签的 src 属性。

```html
<main>
	<header>
		<div class="toolbar">
			<a class="bar-button back-button"><i class="dwz-icon-arrow-left"></i></a>
			<div class="header-title">火山引擎+H5轮播</div>
		</div>
	</header>
	<section>
		<div class="preview-big-img">
			<div class="dwz-slide full-size">
				<div class="bd">
					<ul>
						{{each imageList as item}}
						<li>
							<div class="pop-inner">
								<img src="{{item.src|showImg}}" data-src-imagex="{{item.url}}" />
							</div>
						</li>
						{{/each}}
					</ul>
				</div>
				<div class="hd"><ul></ul></div>
			</div>
		</div>
	</section>
</main>
```

```js
biz.dwzBytedanceImageX = {
	testConvertImgRender(tpl, params) {
		const imageList = [
			// { url: 'http://imagex.dwzteam.site/tos-cn-i-yrjczxapd7/gif-1~tplv-yrjczxapd7-heic.heif' },
			{ url: 'http://imagex.dwzteam.site/tos-cn-i-yrjczxapd7/test-1~tplv-yrjczxapd7-heic.webp' },
			{ url: 'http://imagex.dwzteam.site/tos-cn-i-yrjczxapd7/test-2~tplv-yrjczxapd7-heic.heic' },
			{ url: 'http://imagex.dwzteam.site/tos-cn-i-yrjczxapd7/test-3~tplv-yrjczxapd7-image.heic' },
			{ url: 'http://imagex.dwzteam.site/tos-cn-i-yrjczxapd7/test-4~tplv-yrjczxapd7-image.heic' },
			{ url: 'http://imagex.dwzteam.site/tos-cn-i-yrjczxapd7/test-5~tplv-yrjczxapd7-image.heic' },
			{ url: 'http://imagex.dwzteam.site/tos-cn-i-yrjczxapd7/test-6~tplv-yrjczxapd7-image.heic' }
		];
		let html = template.render(tpl.html, { imageList });

		this.html(html).initUI();

		if (window.api) {
			setTimeout(() => {
				const module = api.require('dwzBytedanceImageX');

				this.find('img[data-src-imagex]').each((index, img) => {
					const $img = $(img);

					module.convertImg(
						{
							debug: 0, // 调试开关(默认:0)：0, 1
							url: $img.attr('data-src-imagex') // 原图url
						},
						(ret) => {
							if (ret.status) {
								img.src = ret.base64str;
							} else {
								console.log(JSON.stringify(ret));
							}
						}
					);
				});
			}, 600);
		}
	}
};
```

## 可用性

iOS 系统（后续提供），Android 系统

可提供的 1.0.0 及更高版本
