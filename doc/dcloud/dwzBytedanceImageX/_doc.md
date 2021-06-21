来自于：<a href="https://dwzteam.github.io/dwz_mobile_doc_v1/" target="_blank"><b>DWZ Mobile</b></a>

# **概述**

<a href="https://dwzteam.github.io/dwz_mobile_doc_v1/#/doc/dcloud/dwzBytedanceImageX/doc" target="_blank"><b>点击查看官方文档</b></a>

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
- **插件使用含技术支持，远程协助调试插件请加 QQ 350863780**

|                                      安卓 APK 测试包                                      |                                    技术服务微信                                     |
| :---------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: |
| ![](https://dwzteam.github.io/dwz_mobile_doc_v1/_media/readme/app_download.png?width=200) | ![](https://dwzteam.github.io/dwz_mobile_doc_v1/_media/readme/wx_zhh.png?width=200) |

为帮助用户更好更快的使用插件，点击查看 <a href="https://dwzteam.github.io/dwz_mobile_doc_v1/#/doc/dcloud/dwzBytedanceImageX/doc" target="_blank"><b>dwz-BytedanceImageX 插件详细对接文档</b></a>，包含示例代码、知识点讲解、注意事项等，供您参考。

# **对接步骤**

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

### 可用性

iOS 系统(正在开发中)，Android 系统
