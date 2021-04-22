# 打包发布【dcloud】

App 打包发布 iOS & Android

> ## 真机调试

> ## 云编译

> ## 发布和版本更新

1. 正式版打包后，下载安卓 apk 文件和 iOS ipa 文件
2. 安卓 apk 文件上传到自己服务器
3. iOS 需要在苹果开发者中心创建证书，并创建应用，然后再上传 ipa 文件

```
xcrun altool --validate-app -f dwz_mobile_app.ipa -t iOS --apiKey xxxxxxxx --apiIssuer xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --verbose
xcrun altool --upload-app -f dwz_mobile_app.ipa -t iOS --apiKey xxxxxxxxx --apiIssuer xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx  --verbose
```
