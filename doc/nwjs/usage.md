一：node-webkit打包.exe程序
1. 将程序源文件压缩到一个zip压缩包里，命名为app.zip
    源文件中必须包含package.json，其他注意事项：https://github.com/nwjs/nw.js/wiki/How-to-package-and-distribute-your-apps#step-1-make-a-package
2. 将app.zip重命名为app.nw
3. 去https://nwjs.io/官网下载一个windows版的node-webkit并解压
4. 将第二步得到的app.nw文件拖到node-webkit目录下
5. 在node-webkit目录下打开命令行
7. 执行copy /b nw.exe+app.nw app.exe 
	
二：Resource Hacker修改应用图标
1. 下载安装后运行Resource Hacker。http://www.angusj.com/resourcehacker/
2. 将nwjs目录下的nw.exe拖到Resource Hacker中
3. 打开Icon Group目录后右键IDR_MAINFRAME选择Replace Icon...
4. 选择准备好的图标之后点击Save

注意：
- 图标为icon格式；换完之后，你可能会发现图标没有变，你不妨试试将你的应用换一个盘存放或者压缩后发给你的好友，在他的电脑打开看看。如果图标有变化，大功告成
- 图标大小必须和原图标一致（默认256），生成ico图标：http://ico.duduxuexi.com/

三：Enigma Virtual Box将app.exe依赖的文件封装成一个单独的exe文件
1. 下载安装后运行Enigma Virtual Box。http://enigmaprotector.com/assets/files/enigmavb.exe
2. “Enter Input File Name”中输入app.exe的路径
3. 点击Add按钮，选择Add Files，选择除了exe结尾的全部文件
4. 点击Add按钮，选择New Folders，新建一个locales文件夹
5. 选中locales文件夹，重复第三步，添加locales文件夹中的所有文件
6. 点击Add按钮，选择New Folders，新建一个swiftshader文件夹
7. 选中swiftshader文件夹，重复第三步，添加swiftshader文件夹中的所有文件
8. 点击Files Option，选择Compress Files。(打包时压缩文件)
9. 点击Process按钮		
	
四：视频无法播放
1. 下载对应版本的ffmpeg.dll替换掉原来的就可以正常使用video标签。
2. https://github.com/iteufel/nwjs-ffmpeg-prebuilt/releases
3. https://dl.nwjs.io/v0.35.4/
	
五：参考
1. https://github.com/nwjs/nw.js
2. https://github.com/nwjs/nw.js/wiki/How-to-package-and-distribute-your-apps
3. https://segmentfault.com/a/1190000009918306
4. https://blog.csdn.net/qq_41739431/article/details/82970815
