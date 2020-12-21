> ## 功能介绍

- HTML5 跨平台支持（Android & iOS）
- 人脸识别后可以精准截取头像
- 基于百度人脸采集 SDK，分 2 个版本：
  - 包含活体动作 `faceLiveness()`
  - 不包含活体动作 `faceDetect()`
  - [DwzBaiduFaceLive 模块前端调用示例 biz.faceBaidu.js](https://github.com/dwzteam/dwz_mobile_app/blob/master/widget/js/biz.baiduFace.js)

> ## 效果展示

![](../../_media/apicloud/DwzBaiduFaceLive/1.jpg?height=360)
![](../../_media/apicloud/DwzBaiduFaceLive/2.jpg?height=360)
![](../../_media/apicloud/DwzBaiduFaceLive/3.jpg?height=360)

> ## 模块使用攻略

1. 使用之前须从百度开放平台申请开发者账号并完成企业认证，获取 LicenseID 和 LicenseFileName。[百度开发平台控制台](https://console.bce.baidu.com/ai/#/ai/face/overview/index)
   ![](../../_media/apicloud/DwzBaiduFaceLive/11.jpg)
2. License 文件打包模块包需注意事项请参考 [License 打包模块包注意事项](/doc/apicloud/DwzBaiduFaceLiveLicense.md)，然后将制作好的授权模块包上传到自定义模块，添加到自己的 App 进行使用
3. APICloud 模块市场搜索 DwzBaiduFaceLive，增加到 APICloud 工程中
4. 使用此模块之前先配置 config.xml 文件，配置完毕后，需通过云端编译生效，配置方法如下：

```xml
<feature name="DwzBaiduFaceLive">
    <param name="LicenseID_iOS" value="DwzMobileApp-face-ios"/>
    <param name="LicenseFileName_iOS" value="idl-license.face-ios"/>
    <param name="LicenseID_Android" value="DwzMobileApp-face-android"/>
    <param name="LicenseFileName_Android" value="idl-license.face-android"/>
</feature>
```

5. [自定义 Loader 编译，真机调试](/doc/apicloud/package?id=真机调试)或者[云编译测试版](/doc/apicloud/package?id=云编译)
6. 代码调用

> 包含活体动作调用

```javascript
const module = api.require("DwzBaiduFaceLive");
module.faceLiveness(
  {
    debug: 1, // 调试开关(默认:0)：0, 1
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

> 不包含活体动作调用

```javascript
const module = api.require("DwzBaiduFaceLive");
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
