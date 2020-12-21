> ## 百度人脸识别模块配套授权包制作

### 下载 DwzBaiduFaceLiveLicense.zip

制作 Android 和 iOS 授权包之前先下载 [DwzBaiduFaceLiveLicense.zip](http://mobile.jui.org/apk/DwzBaiduFaceLiveLicense.zip)

### Android 授权包

- 需要先确认自己的电脑安装了 jdk，配置 javahome 环境变量

1. 请将 `Android_命令处理包/assets` 目录下 `idl-license.face-android` 文件下替换为 Android 的 License 文件

2. 在 cmd 中切换到`Android_命令处理包`目录下，执行命令

```bash
cd Android_命令处理包/assets
jar -cvf DwzBaiduFaceLiveLicense.jar \*
```

3. 在`Android_命令处理包`目录下会生成 `DwzBaiduFaceLiveLicense.jar` 文件

4. 将生成的 `DwzBaiduFaceLiveLicense.jar` 文件替换`zip/android/DwzBaiduFaceLiveLicense/source` 下的 `DwzBaiduFaceLiveLicense.jar` 文件

5. 将`zip/android/DwzBaiduFaceLiveLicense` 文件夹压缩为 `DwzBaiduFaceLiveLicense.zip`, 需要包含一层模块目录

### iOS 授权包

1. 将`zip/ios/DwzBaiduFaceLiveLicense/target` 下的 `idl-license.face-android` 替换为你自己的 `idl-license.face-ios` 文件
2. 将`zip/ios/DwzBaiduFaceLiveLicense` 文件夹压缩为 `DwzBaiduFaceLiveLicense.zip`

> ## 百度人脸识别模块配套授权包上传

1. 登录 APICloud，进入一个 App 管理界面
2. 点击 App 管理界面中的 模块 -> 自定义模块 -> 上传自定义模块
   ![](../../_media/apicloud/DwzBaiduFaceLive/21.jpg)
