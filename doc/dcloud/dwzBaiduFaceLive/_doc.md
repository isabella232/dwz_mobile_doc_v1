<p style="color: #ccc; margin-bottom: 30px;">来自于：DWZ Mobile</p>

<div class="outline">

[faceLiveness](#a1)

[faceDetect](#a2)

</div>

# **示例**

为帮助用户更好更快的使用插件，维护了一个[示例](https://dwzteam.gitee.io/dwz_mobile_doc_v1/#/doc/dcloud/dwzBaiduFaceLive/doc)，示例中包含示例代码、知识点讲解、注意事项等，供您参考。

[模块配套百度授权包配制](https://dwzteam.gitee.io/dwz_mobile_doc_v1/#/doc/dcloud/dwzBaiduFaceLive/doc)

[git 示例](https://gitee.com/dwzteam/dwz_mobile_app)

# **概述**

**dwzBaiduFaceLive 模块概述**

本模块封装了新版百度开放平台的人脸识别客户端 SDK(活体检测)，支持活体识别和普通识别 2 种方式。
支持人脸识别截取头像，支持人脸图片分辨率设置、压缩比设置，从而解决了某些第三方实名认证接口图像大小不能超过 20K 的问题。
人脸识别界面自带返回键，使用过程中随时可以退出人脸识别界面。

**不能同时使用的模块：其它百度人脸识别模块**

**模块使用攻略**

使用之前须从百度开放平台申请开发者账号并完成企业认证，获取 LicenseID 和 LicenseFileName。百度 AI 开放平台接入流程参考[百度 AI 开放平台](https://console.bce.baidu.com/ai/?_=1524383952610#/ai/face/overview/index)

## **License 百度 AI 平台证书文件配制注意事项**

HBuilderX 中加入原生插件 dwz-BaiduFaceLive 后，插件面板上填写 LicenseID_Android、LicenseID_iOS

<div id="a1"></div>

# **faceLiveness**

包含活体动作人脸识别，活体参数可配制，至少需要配制一个活体动作

faceLiveness({cropType: 1, cropHeight: 300, quality: 70, eye: true}, callback(ret, err){})

## callback(ret)

ret：

- 类型：JSON 对象
- 内部字段：

```json
{
  "status": 1, //状态值（整数）；1||0，人脸识别成功/失败
  "message": "错误提示", // 当status为0时返回错误信息
  "face": "base64人脸图片" // base64人脸图片，自动截取人脸头像的jpg图片
}
```

err：

- 类型：JSON 对象
- 内部字段：没用到

## 示例代码

```js
const module = uni.requireNativePlugin("dwzBaiduFaceLive");
module.faceLiveness(
  {
    debug: 0, // 调试开关(默认:0)：0, 1
    cropType: 1, // 抠图类型(默认:1)：1:脸部, 2:大头照, 3:头像+肩膀
    cropHeight: 300, // 抠图高的设定，为了保证好的抠图效果，要求高宽比是4:3，所以会在内部进行计算，只需要传入高即可，取值范围50 ~ 1200，默认480
    quality: 70, // 抠图压缩质量，取值范围 20 ~ 100，默认100不压缩
    eye: true, // 活体动作，眨眼(默认:true)
    mouth: false, // 活体动作，张嘴(默认:false)
    headRight: false, // 活体动作，向右转头(默认:false)
    headLeft: false, // 活体动作，向左转头(默认:false)
    headUp: false, // 活体动作，向上抬头(默认:false)
    headDown: false, // 活体动作，向下低头(默认:false)
  },
  (ret) => {
    console.log(JSON.stringify(ret));
  }
);
```

## 可用性

iOS 系统，Android 系统

可提供的 1.0.0 及更高版本

<div id="a2"></div>

# **faceDetect**

不包含活体动作人脸识别

faceDetect({cropType: 1, cropHeight: 300, quality: 70}, callback(ret, err){})

## callback(ret)

ret：

- 类型：JSON 对象
- 内部字段：

```json
{
  "status": 1, //状态值（整数）；1||0，人脸识别成功/失败
  "message": "错误提示", // 当status为0时返回错误信息
  "face": "base64人脸图片" // base64人脸图片，自动截取人脸头像的jpg图片
}
```

err：

- 类型：JSON 对象
- 内部字段：没用到

## 示例代码

```js
const module = uni.requireNativePlugin("dwzBaiduFaceLive");
module.faceDetect(
  {
    debug: 0, // 调试开关(默认:0)：0, 1
    cropType: 1, // 抠图类型(默认:1)：1:脸部, 2:大头照, 3:头像+肩膀
    cropHeight: 300, // 抠图高的设定，为了保证好的抠图效果，要求高宽比是4:3，所以会在内部进行计算，只需要传入高即可，取值范围50 ~ 1200，默认480
    quality: 70, // 抠图压缩质量，取值范围 20 ~ 100，默认100不压缩
  },
  (ret) => {
    JSON.stringify(ret);
  }
);
```

## 可用性

iOS 系统，Android 系统

可提供的 1.0.0 及更高版本
