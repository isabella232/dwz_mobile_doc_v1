# dwz-BytedanceImageX 火山引擎图片加载

DWZ 字节跳动火山引擎图片加载 SDK 插件【dcloud】

> ## 功能介绍

- https://ext.dcloud.net.cn/plugin?id=4794
- 本插件是会对字节跳动火山引擎图片加载 SDK 的封装：
  - 支持现代图片格式 heic、heif、webp、heif、avif 在 HTML5 混合 App 中展示
  - 支持用户感知失败率、解码失败率、解码耗时、超分成功率、超分耗时、排队耗时、加载耗时、文件大小等指标打点上报
- 本插件适用的业务场景：uniapp 开发安卓和 iOS 应用时，如果有大量的图片加载和展示，比如电商产品图片展示、电子相册等场景
- 为什么要使用 dwz-BytedanceImageX

  - 先看一个测评：[高效的图像处理云服务-ImageX](https://blog.csdn.net/weixin_44643524/article/details/112550247)
  - 新款的 iPhone 和一部分新出的安卓手机拍照生成的图片采用新的图片格式 heic，清楚度和分辨率相同的一张 heic 图片，比 jpeg 格式小 7~8 倍，比 png 格式小 20 倍以上，所以如果服务器和 app 之间图片传输如果使用 heic 格式可以至少减少 7 倍流量，可以大大提高图片加载速度
  - 由于 HTML5 img 标签是不能识别 heic 图片，需要使用火山引擎图片加载 SDK 对 heic 图片解码转化成 jpeg 格式

- 本插件针对一个 APP **一次购买永久使用**
- 跨平台支持（Android & iOS）iOS 端与 Android 端 JS 接口保持一致
- 接口支持 debug 参数设置，方便排查 字节跳动火山引擎数据上报配制相关问题

- **插件使用含技术支持，远程协助调试插件请加微信沟通**

|                    安卓 APK 测试包                     |                   技术服务微信                   |
| :----------------------------------------------------: | :----------------------------------------------: |
| ![](../../../_media/readme/app_download.png?width=200) | ![](../../../_media/readme/wx_zhh.png?width=200) |

> ## 使用攻略

1. 使用之前须从火山引擎开放平台申请开发者账号并完成企业认证，获取 aid。[字节跳动火山引擎开发平台控制台](https://console.volcengine.com/imagex/overview/)
2. 对接火山引擎服务器端图片上传 SDK
3. 服务端和 App 数据交互接口，图片 url 使用火山引擎的图片 url
4. App 获取火山引擎 heic 图片 url
5. 前端代码调用 dwz-BytedanceImageX 插件，把 heic 等格式转化成 jpeg 格式

> 图片转化接口 convertImg

heic、heif、webp、heif、avif 格式转化为 jpeg 格式的 base64 字符串，返回给前端 js

```js
const module = uni.requireNativePlugin('dwz-BytedanceImageX');
module.convertImg(
	{
		debug: 0, // 调试开关(默认:0)：0, 1
		url: item.url, // 原图url
		quality: 100 // 抠图压缩质量，取值范围 20 ~ 100，默认100不压缩
	},
	(ret) => {
		console.log(ret);
	}
);
```

> 回调 callback(ret)

ret：

- 类型：JSON 对象
- 内部字段：

```json
{
	"status": 1, //状态值（整数）；1||0，人脸识别成功/失败
	"base64str": "data:image/jpeg;base64,xxx" // jpeg格式base64图片
}
```

> ## 示例代码

```vue
<template>
	<view>
		<view class="img-wrap" v-for="(item, index) in imageList" :key="index">
			<!--  #ifdef H5 || MP -->
			<img :src="item.base64str | filterImg" alt="图片" class="item-img" />
			<!--  #endif -->
			<!--  #ifdef APP-PLUS -->
			<img :src="item.base64str | filterImg" alt="图片" class="item-img" />
			<!--  #endif -->
			<p>{{ item.url }}</p>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			imageList: [
				{ url: 'http://imagex.dwzteam.site/tos-cn-i-yrjczxapd7/gif-1~tplv-yrjczxapd7-heic.heif' },
				{ url: 'http://imagex.dwzteam.site/tos-cn-i-yrjczxapd7/test-1~tplv-yrjczxapd7-heic.webp' },
				{ url: 'http://imagex.dwzteam.site/tos-cn-i-yrjczxapd7/test-2~tplv-yrjczxapd7-heic.heic' },
				{ url: 'http://imagex.dwzteam.site/tos-cn-i-yrjczxapd7/test-3~tplv-yrjczxapd7-image.heic' },
				{ url: 'http://imagex.dwzteam.site/tos-cn-i-yrjczxapd7/test-4~tplv-yrjczxapd7-image.heic' },
				{ url: 'http://imagex.dwzteam.site/tos-cn-i-yrjczxapd7/test-5~tplv-yrjczxapd7-image.heic' },
				{ url: 'http://imagex.dwzteam.site/tos-cn-i-yrjczxapd7/test-6~tplv-yrjczxapd7-image.heic' }
			]
		};
	},
	onLoad() {
		this.convertImgs();
	},
	filters: {
		// 图片过滤
		filterImg(imgUrl) {
			return imgUrl || 'static/no-img.svg';
		}
	},
	methods: {
		convertImgs() {
			// #ifdef APP-PLUS
			const module = uni.requireNativePlugin('dwz-BytedanceImageX');

			this.imageList.forEach((item, index) => {
				setTimeout(() => {
					module.convertImg(
						{
							debug: 0, // 调试开关(默认:0)：0, 1
							url: item.url // 原图url
						},
						(ret) => {
							if (ret.status) {
								item.base64str = ret.base64str;
								this.$set(item, item.base64str, item.url); // 通知vue更新dom
							}
						}
					);
				}, 100 + index);
			});
			// #endif
		}
	}
};
</script>

<style lang="scss">
.img-wrap {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 10px 0;
	border: 1px solid rgba(0, 0, 0, 0.1);
	color: #999;
	font-size: 11px;
}
img.item-img {
	max-width: 320px;
	max-height: 320px;
}
</style>
```
