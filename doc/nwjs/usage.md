一：node-webkit 打包.exe 程序

1. 将程序源文件压缩到一个 zip 压缩包里，命名为 app.zip
   源文件中必须包含 package.json，其他注意事项：https://github.com/nwjs/nw.js/wiki/How-to-package-and-distribute-your-apps#step-1-make-a-package
2. 将 app.zip 重命名为 app.nw
3. 去https://nwjs.io/官网下载一个windows版的node-webkit并解压
4. 将第二步得到的 app.nw 文件拖到 node-webkit 目录下
5. 在 node-webkit 目录下打开命令行
6. 执行 copy /b nw.exe+app.nw app.exe

二：Resource Hacker 修改应用图标

1. 下载安装后运行 Resource Hacker。http://www.angusj.com/resourcehacker/
2. 将 nwjs 目录下的 nw.exe 拖到 Resource Hacker 中
3. 打开 Icon Group 目录后右键 IDR_MAINFRAME 选择 Replace Icon...
4. 选择准备好的图标之后点击 Save

注意：

- 图标为 icon 格式；换完之后，你可能会发现图标没有变，你不妨试试将你的应用换一个盘存放或者压缩后发给你的好友，在他的电脑打开看看。如果图标有变化，大功告成
- 图标大小必须和原图标一致（默认 256），生成 ico 图标：http://ico.duduxuexi.com/

三：Enigma Virtual Box 将 app.exe 依赖的文件封装成一个单独的 exe 文件

1. 下载安装后运行 Enigma Virtual Box。http://enigmaprotector.com/assets/files/enigmavb.exe
2. “Enter Input File Name”中输入 app.exe 的路径
3. 点击 Add 按钮，选择 Add Files，选择除了 exe 结尾的全部文件
4. 点击 Add 按钮，选择 New Folders，新建一个 locales 文件夹
5. 选中 locales 文件夹，重复第三步，添加 locales 文件夹中的所有文件
6. 点击 Add 按钮，选择 New Folders，新建一个 swiftshader 文件夹
7. 选中 swiftshader 文件夹，重复第三步，添加 swiftshader 文件夹中的所有文件
8. 点击 Files Option，选择 Compress Files。(打包时压缩文件)
9. 点击 Process 按钮

四：视频无法播放

1. 下载对应版本的 ffmpeg.dll 替换掉原来的就可以正常使用 video 标签。
2. https://github.com/iteufel/nwjs-ffmpeg-prebuilt/releases
3. https://dl.nwjs.io/v0.35.4/

五：参考

1. https://github.com/nwjs/nw.js
2. https://github.com/nwjs/nw.js/wiki/How-to-package-and-distribute-your-apps
3. https://segmentfault.com/a/1190000009918306
4. https://blog.csdn.net/qq_41739431/article/details/82970815
