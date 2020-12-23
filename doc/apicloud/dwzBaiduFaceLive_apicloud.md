/_
Title: dwzBaiduFaceLive
Description: 本模块封装了新版百度开放平台的人脸识别客户端 SDK(活体检测)，支持活体识别和普通识别 2 种方式。
人脸识别完成截取头像，从而解决了某些第三方实名认证接口图像大小不能超过 50K 的问题。
人脸识别界面自带返回键，使用过程中随时可以退出人脸识别界面。
_/

<p style="color: #ccc; margin-bottom: 30px;">来自于：DWZ Mobile<a style="background-color: #95ba20; color:#fff; padding:4px 8px;border-radius:5px;margin-left:30px; margin-bottom:0px; font-size:12px;text-decoration:none;" target="_blank" href="//www.apicloud.com/mod_detail/dwzBaiduFaceLive">立即使用</a></p>

<div class="outline">
[faceLiveness](#a1)

[faceDetect](#a2)

</div>

# **模块示例**

为帮助用户更好更快的使用模块，维护了一个示例，示例中包含示例代码、知识点讲解、注意事项等，供您参考。

模块 demo 示例：http://dwzteam.gitee.io/dwz_mobile_doc_v1/#/doc/apicloud/dwzBaiduFaceLive

# **概述**

**dwzBaiduFaceLive 模块概述**

本模块封装了新版百度开放平台的人脸识别客户端 SDK(活体检测)，支持活体识别和普通识别 2 种方式。
人脸识别完成截取头像，从而解决了某些第三方实名认证接口图像大小不能超过 50K 的问题。
人脸识别界面自带返回键，使用过程中随时可以退出人脸识别界面。

**不能同时使用的模块：其它百度人脸识别模块**

**模块使用攻略**

使用之前须从百度开放平台申请开发者账号并完成企业认证，获取 LicenseID 和 LicenseFileName。百度 AI 开放平台接入流程参考[百度 AI 开放平台](https://console.bce.baidu.com/ai/?_=1524383952610#/ai/face/overview/index)

**使用此模块之前建议先配置 [config.xml](/APICloud/技术专题/app-config-manual) 文件，配置完毕，需通过云端编译生效，配置方法如下：**

- 名称：dwzBaiduFaceLive
- 参数：LicenseID_iOS、LicenseFileName_iOS、LicenseID_Android、LicenseFileName_Android
- 配置示例:

```xml
   <feature name="dwzBaiduFaceLive">
        <param name="LicenseID_iOS" value="DwzMobileApp-face-ios"/>
        <param name="LicenseFileName_iOS" value="idl-license.face-ios"/>
        <param name="LicenseID_Android" value="DwzMobileApp-face-android"/>
        <param name="LicenseFileName_Android" value="idl-license.face-android"/>
    </feature>
```

- 字段描述:

  **urlScheme**：（必须配置）用于实现应用间跳转及数据交换，本应用可以启动微信客户端，也可以从微信客户端跳回本应用。urlScheme 的 value 值是从微信开放平台获取的 appid。appid 申请方法参考[微信开放平台接入文档](//docs.apicloud.com/APICloud/开放平台接入指南/weChat)。

  **apiKey**：（必须配置）从微信开放平台获取的 appid，值与 urlScheme 相同。appid 申请方法参考[微信开放平台接入文档](//docs.apicloud.com/APICloud/开放平台接入指南/weChat)。

  **apiSecret**：从微信开放平台获取的 secret。**获取 accessToken 时需要配置此项**。appid 申请方法参考[微信开放平台接入文档](//docs.apicloud.com/APICloud/开放平台接入指南/weChat)。

**Android 系统平台上需注意事项请参考[微信集成注意事项](//community.apicloud.com/bbs/forum.php?mod=viewthread&tid=9307)**
<img src="/img/docImage/module-doc-img/sdk/wx/wx1.PNG" width=400 />
<img src="/img/docImage/module-doc-img/sdk/wx/wx2.PNG" width=400 />

License 文件打包模块包需注意事项请参考 License 打包模块包注意事项，然后将制作好的授权模块包上传到自定义模块，添加到自己的 App 进行使用。
**[人脸识别模块配套授权包制作](http://dwzteam.gitee.io/dwz_mobile_doc_v1/#/doc/apicloud/dwzBaiduFaceLive)**

## **模块接口**

<div id="a1"></div>

# **faceLiveness**

包含活体动作人脸识别

faceLiveness(callback(ret, err))

## callback(ret, err)

ret：

- 类型：JSON 对象
- 内部字段：

```js
{
  status: 1, //状态值（整数）；1||0，人脸识别成功/失败
  message: "错误提示", // 当status为0时返回错误信息
  face: "base64人脸图片" // base64人脸图片，自动截取人脸头像的jpg图片
}
```

err：

- 类型：JSON 对象
- 内部字段：

```js
{
  code: 0; //数字类型；
}
```

## 示例代码

```js
const module = api.require("dwzBaiduFaceLive");
module.faceLiveness(
  {
    debug: 0, // 调试开关(默认:0)：0, 1
    cropType: 1, // 抠图类型(默认:1)：1:脸部, 2:大头照, 3:头像+肩膀
    mouth: false, // 活体动作，张嘴(默认:false)
    headRight: false, // 活体动作，向右转头(默认:false)
    headLeft: false, // 活体动作，向左转头(默认:false)
    headUp: false, // 活体动作，向上抬头(默认:false)
    headDown: false, // 活体动作，向下低头(默认:false)
    headLeftOrRight: false, // 活体动作，摇头(默认:false)
  },
  function (ret, err) {
    alert(JSON.stringify(ret));
  }
);
```

## 可用性

iOS 系统，Android 系统

可提供的 1.0.0 及更高版本

<div id="a2"></div>
# **faceDetect**

不包含活体动作人脸识别

faceDetect(callback(ret, err))

## callback(ret, err)

ret：

- 类型：JSON 对象
- 内部字段：

```js
{
  status: 1, //状态值（整数）；1||0，人脸识别成功/失败
  message: "错误提示", // 当status为0时返回错误信息
  face: "base64人脸图片" // base64人脸图片，自动截取人脸头像的jpg图片
}
```

err：

- 类型：JSON 对象
- 内部字段：

```js
{
  code: 0; //数字类型；
}
```

## 示例代码

```js
const module = api.require("dwzBaiduFaceLive");
module.faceDetect(
  {
    debug: 0, // 调试开关(默认:0)：0, 1
    cropType: 1, // 抠图类型(默认:1)：1:脸部, 2:大头照, 3:头像+肩膀
  },
  function (ret, err) {
    alert(JSON.stringify(ret));
  }
);
```

## 可用性

iOS 系统，Android 系统

可提供的 1.0.0 及更高版本
