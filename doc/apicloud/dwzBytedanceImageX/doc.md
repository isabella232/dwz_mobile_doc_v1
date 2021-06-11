# dwzBytedanceImageX 图片服务

> ## 功能介绍

原图
https://imagex.75live.com/public/attachments/2020/12/17/ytUyx0S0Xfq9tw7jpps2flvKlfIFWRhjH9OE1b7V.JPEG

直接添加一个 ~tplv-n9b2vwdhz3-face-conic-v1:500:500.jpeg 这个模板后缀就可以转换成其他格式图片，节省带宽流量、还有特效；
https://imagex.75live.com/public/attachments/2020/12/17/ytUyx0S0Xfq9tw7jpps2flvKlfIFWRhjH9OE1b7V.JPEG~tplv-n9b2vwdhz3-face-conic-v1:500:500.jpeg

格式转换：直接后缀改一下格式，webp、avif、heic、都支持
http://imagex.75live.com/tos-cn-i-n9b2vwdhz3/public/attachments/2020/12/17/VGFtTeK4r5Rji6XEP5YZL7WmQxsoWAzKzpFd3Unw.JPEG~tplv-n9b2vwdhz3-75ww:500:0.webp

> ## 测评

原图 50kB，用其他格式 10KB，CDN 的带宽节省 5 倍
https://blog.csdn.net/weixin_44643524/article/details/112550247

> ## 参考模块

apicloud 参考模块 volcWebImage
https://docs.apicloud.com/Client-API/Func-Ext/volcWebImage

> ## 问题整理

http://www.ioncannon.net/wp-content/uploads/2011/06/test2.webp
webp 图片浏览器可以直接打开，应该就不需要 volcWebImage 模块异步、同步打开图片 openPicture 和 openPictureSync

webp 对 chrome 浏览器友好，压缩率相对较高
HEIC 下一代图片格式，压缩率更高，兼容性不太好需要 SDK 支持
AVIF 下一代图片格式，压缩率较高，图片格式比较新，对 chrome 85+ 系统默认支持

openPicture 和 openPictureSync 打开的图片无法完美的融合到 html5

ios 工程 https://github.com/TTvcloud/BDWebImage

安卓工程 https://github.com/liaohuqiu/fresco-demo-for-gradle
使用方式和正常的 Fresco 一样，Fresco 的 api 并没有修改，参考：https://www.fresco-cn.org/
