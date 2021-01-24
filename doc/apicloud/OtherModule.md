# Apicloud 第三方原生模块示例

> ## mam 模块

- [用于 App 版本检测更新](/doc/apicloud/package?id=发布和版本更新)
- [APICloud 平台在线文档](https://www.apicloud.com/mod_detail/mam)
- DWZ Mobile 框架中已经包含了 mam 模块 App 更新代码逻辑

```js
// mam 模块检测新版本
function checkUpdate() {
  const mam = api.require("mam");
  mam.checkUpdate(function (ret, err) {
    if (ret && ret.status) {
      const result = ret.result;
      if (result.update) {
        const msg = `新版本型号:${result.version};更新提示语:${result.updateTip};发布时间:${result.time}`;

        if (result.closed) {
          api.alert(
            {
              title: "有新的版本，请下载并安装",
              msg,
              buttons: ["确定"],
            },
            function (ret, err) {
              if (ret.buttonIndex == 1) {
                biz.updateApp(result);
              }
            }
          );
        } else {
          api.confirm(
            {
              title: "有新的版本，是否下载并安装",
              msg,
              buttons: ["确定", "取消"],
            },
            function (ret, err) {
              if (ret.buttonIndex == 1) {
                biz.updateApp(result);
              }
            }
          );
        }
      }
    } else {
      $.alert.toast(err.msg);
    }
  });
}

// 版本更新
function updateApp(result) {
  if (api.systemType == "android") {
    api.download(
      {
        url: result.source,
        report: true,
      },
      function (ret, err) {
        if (ret && !ret.state) {
          /* 下载进度 */
          $.alert.toast("正在下载应用" + ret.percent + "%");
        }
        if (ret && ret.state) {
          /* 下载完成 */
          const savePath = ret.savePath;
          api.installApp({
            appUri: savePath,
          });
        }
      }
    );
  } else if (api.systemType == "ios") {
    api.installApp({
      appUri: result.source,
    });
  }
}
```

> ## aMapNavigation 模块

- [App 内部嵌入高德导航](https://www.apicloud.com/mod_detail/aMapNavigation)
- 打开手机安装的导航 App【DWZ Mobile 前端框架中有封装】

```
// 打开导航App
biz.openMapNav({lng:120.005807, lat:30.278029});
```

![](../../_media/apicloud/aMapNavigation/1.jpg?height=568)
![](../../_media/apicloud/aMapNavigation/2.jpg?height=568)

> ## FNImageClip 模块

- FNImageClip 模块封装了图片裁剪功能，在 DWZ Mobile 中主要用在`用户头像上传裁剪`
- [APICloud 平台在线文档](https://www.apicloud.com/mod_detail/FNImageClip)

![](../../_media/apicloud/FNImageClip/1.jpg?height=360)
![](../../_media/apicloud/FNImageClip/2.jpg?height=360)
![](../../_media/apicloud/FNImageClip/3.jpg?height=360)
![](../../_media/apicloud/FNImageClip/4.jpg?height=360)

> ## clipBoard 模块

- clipBoard 模块封装剪切板的相关功能，可实现向剪切版复制、读取字符串相关操作
- [APICloud 平台在线文档](https://www.apicloud.com/mod_detail/clipBoard)
- 配合 DWZ Mobile 模块 input 输入框`class="dwz-clipboard"`使用，用于解决 apicloud config.xml 没有 allowEdit 配制，安卓下不能粘贴问题

> ## 更多模块

- [点击查看 APICloud 模块市场](https://www.apicloud.com/modulestore)
- 大部分的模块在 APICloud 模块市场都可以找到
- 也可以自己写自定义模块（Android & iOS）
- DWZ 官方自定义模块开发咨询微信号：`17767167745`
