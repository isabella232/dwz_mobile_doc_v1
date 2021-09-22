# AR 笔记

> ## AR 识别分类

- 平面检测技术
- 射线检测技术
- 模型检测技术：汽车换颜色换轮胎
- 图片识别技术：AR 卡牌、AR 书籍
- AR 云锚点：大空间 AR 导航定位
- 人脸检测技术
- 苹果动作扑捉技术

> ## AR 技术

- ARFoundation: 对 ARKit、ARCore 封装，解决跨平台问题
- ARKit【免费】：Apple iOS 平台
- ARCore【免费】：Google Android 平台
- SenseAR【免费】：商汤 云锚点免费开放，手指动作扑捉功能： 缺点是目前只支持安卓
- 华为 AR【免费】：P40 以后的手机都不支持 ARCore，技术资料少
- 高通 Vuforia【收费】：可以识别点击，识别稳定性高，缺点就是贵想要去除试用水印一年需要 20W+
- EasyAR【收费】：视+，云锚点比较好、大屏 AR、小程序 AR、AR 导航，缺点是去水印需要收费
- Void AR【收费】：太虚 AR，slam 技术领先，缺点是去水印需要收费
- WebAR：基于浏览器的 AR

  - AR.js 坑有点多

    - https://ar-js-org.github.io/AR.js-Docs/marker-based/#api-reference-for-marker-based
    - https://techbrood.com/aframe/core?p=entity
    - [AR.js 视频教程](https://www.bilibili.com/s/video/BV19f4y1W7LK)
    - [NFT 识别图](https://github.com/Carnaux/NFT-Marker-Creator/wiki/Creating-good-markers)
    - [识别图要求](https://ai.baidu.com/ai-doc/AR/Jk3h7lpr2)
    - https://www.npmjs.com/package/cordova-plugin-webrtc
    - https://www.npmjs.com/package/cordova-plugin-arjs
    - https://github.com/whitmer/cordova-plugin-ARKit
    - https://www.npmjs.com/package/cordova-plugin-wkwebview-engine
    - npm remove cordova -g && npm install -g cordova@8.1.1
    - [react-native-webrtc 之采坑之旅](https://blog.csdn.net/qq_40091720/article/details/103116814)

  - [JSARToolKit5 + ThreeJS](https://github.com/artoolkitx/jsartoolkit5)
  - http://127.0.0.1/AR/jsartoolkit5/doc/introduction.html
  - http://127.0.0.1/AR/jsartoolkit5/doc/using_different_marker_types.html
  - [JSARToolKit5 loadNFTMarkers 加载多张识别图片](https://github.com/hiukim/artoolkit5/tree/nftfix)
  - https://github.com/hiukim/jsartoolkit5/tree/fixnft/build
  - https://github.com/artoolkitx/jsartoolkit5/issues/95

```js
arController.loadNFTMarkers([markerURI_1, markerURI_2], function (markerIds) {
	// console.log(markerIds[0], markerIds[1]);
});
```

https://carnaux.github.io/NFT-Marker-Creator/
https://ar-js-org.github.io/AR.js/three.js/examples/marker-training/examples/generator.html
https://www.cnblogs.com/polobymulberry/p/5905912.html
https://herohuyongtao.github.io/research/publications/topo-tag/

[模型的重叠部位闪烁 Z-Fighting 问题）](https://www.cnblogs.com/lst619247/p/9098845.html)

- WebARonARKit
- Kivicube：成都弥知科技，上手比较容易，账号 dwzteam

> ## cordova

- cordova 打包测试不能用
- 使用 ipad safari 打开，再添加到主屏幕（iOS 14.7 测试成功）

```bash
cordova create WebArApp com.dwz.WebArApp WebArApp

cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-network-information
cordova plugin add cordova-plugin-camera
cordova plugin add cordova-plugin-media-capture
cordova plugin add cordova-plugin-media
cordova plugin add cordova-plugin-whitelist

cordova plugin add cordova-plugin-aframe
cordova plugin add cordova-plugin-file
cordova plugin add cordova-plugin-webrtc
cordova plugin add cordova-plugin-xhr-local-file

cordova platform add ios
cordova prepare
```

> ## unity

> ## unreal
