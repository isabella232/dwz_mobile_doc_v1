## 文件说明

- `package-win_x64.bat`：打包程序用的脚本，将 zip 文件自动包装为.nw 文件后部署到 nwjs 打包插件的目录下，并自动转换为 nwjs 认可的 exe（待打包）文件，最后自动打开配置好的**Enigma Virtual Box**程序
- `deploy-win_x64.bat`：使用**Enigma Virtual Box**打包程序完成后，执行该脚本，自动将打包好的 exe（用户可用）文件部署到对应产品目录下。

## 使用前的准备

需要先手动打开**Enigma Virtual Box**程序配置好相关内容  
![](../_media/other/e2e3b556.png)  
然后`ctrl + s`保存为快捷文件`x64.evb`，这一步主要为了方便 package 中自动打开**Enigma Virtual Box**程序

## 示例

我现在在用的项目结构示例（春熙路互动投影墙）：  
![](../_media/other/1cee7748.png)

`package-win_x64.bat`脚本示例：

```
:: nwjs打包程序
:: copy /b nw.exe+extend.nw extend.exe
@echo off
@title 打包程序到nwjs

:: 64位nwjs程序路径
set x64_path=E:\server\nwjs\nwjs-v0.35.5-win-x64
:: Enigma Virtual Box快捷方式的文件名
set evb=x64.evb

if exist app.zip (
	copy app.zip app.nw
)

if exist app.nw (
	echo copy app to nwjs_x64...
	copy app.nw %x64_path%\app.nw
	copy /b %x64_path%\nw.exe+%x64_path%\app.nw %x64_path%\app.exe
	del /a /f /s app.nw
	if exist %evb% (
		start /d %cd% %evb%
	)
) else (
	echo app.nw is not exist!
)

pause
```

`deploy-win_x64.bat`脚本示例：

```
:: nwjs打包程序
:: copy /b nw.exe+extend.nw extend.exe
@echo off
@title 从nwjs部署到inTouch目录

:: 64位的nwjs打包程序所在目录
set x64_path=E:\server\nwjs\nwjs-v0.35.5-win-x64
:: 产品所在目录
set prod_path=D:\work\package\wall\互动投影墙安装程序

if exist %x64_path%\app_boxed.exe (
	echo Y|xcopy /k %x64_path%\app_boxed.exe %prod_path%\
	copy %prod_path%\app_boxed.exe %prod_path%\app_x64.exe
	del /a /f /s %prod_path%\app_boxed.exe
	del /a /f /s %x64_path%\app.exe
	del /a /f /s %x64_path%\app.nw
	del /a /f /s %x64_path%\app_boxed.exe
)

pause
```

## 使用步骤

以互动投影墙项目为例：

- 项目源码 copy 到`app`目录下
- 在`app`目录中全选文件，然后压缩成`app.zip`(一定要是 zip)
- 剪切`app.zip`到上一级目录（和脚本、app 目录同级的目录）
- 执行`package-win_x64.bat`
- 在**Enigma Virtual Box**中打包完成后，执行`deploy-win_x64.bat`脚本
- 打包`互动投影墙安装程序`目录成`互动投影墙安装程序-xxx.zip`发给甲方（这一步非必要）

![](../_media/other/bd1bed89.png)
