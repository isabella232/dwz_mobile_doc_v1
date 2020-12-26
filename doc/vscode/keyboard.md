> macos 系统`Ctrl`统一换成`Command`键

## 主命令框

- `F1` 或 `Ctrl+Shift+P`（俗称万能键） ：打开命令面板
- 按一下 Backspace 会进入到 `Ctrl+P` 模式
- 在 `Ctrl+P` 下输入 > 可以进入 `Ctrl+Shift+P` 模式
- 在 `Ctrl+P` 窗口下还可以直接输入文件名，跳转到该文件
- 在 `Ctrl+P` 模式下输入 `?` 会弹出下拉菜单

```
?   列出当前可执行的动作
!   显示 Errors或 Warnings，也可以 Ctrl+Shift+M
:   跳转到行数，也可以 Ctrl+G 直接进入
@    跳转到 symbol（搜索变量或者函数），也可以 Ctrl+Shift+O 直接进入
@    根据分类跳转 symbol，查找属性或函数，也可以 Ctrl+Shift+O 后输入" : "进入
#   根据名字查找 symbol，也可以 Ctrl+T
```

## 常用快捷键

> ### 命令行切换

- 打开关闭命令行: `Ctrl+J`

> ### 编辑器与窗口管理

- 新建文件: `Ctrl+N`
- 文件之间切换: Ctrl+Tab
- 打开一个新的 VS Code 编辑器: `Ctrl+Shift+N`
- 关闭当前窗口: `Ctrl+W`
- 关闭当前的 VS Code 编辑器: Ctrl+Shift+W
- 切出一个新的编辑器窗口（最多 3 个): `Ctrl+\`
- 切换左中右 3 个编辑器窗口的快捷键: `Ctrl+1` `Ctrl+2` `Ctrl+3`

> ### 代码编辑

> #### 格式调整

- 代码行向左或向右缩进: `Ctrl+[` 、 `Ctrl+]`
- 复制或剪切当前行/当前选中内容: Ctrl+C 、 Ctrl+V
- 代码格式化: `Shift+Alt+F`
- 向上或向下移动一行: `Alt+Up` 或 `Alt+Down`
- 向上或向下复制一行: `Shift+Alt+Up` 或 `Shift+Alt+Down`
- 在当前行下方插入一行: `Ctrl+Enter`
- 在当前行上方插入一行: `Ctrl+Shift+Enter`

> #### 光标相关

- 移动到行首: Home
- 移动到行尾: End
- 移动到文件结尾: Ctrl+End
- 移动到文件开头: Ctrl+Home
- 移动到定义处: `F12`
- 查看定义处缩略图(只看一眼而不跳转过去): `Alt+F12`
- 选择从光标到行尾的内容: `Shift+End`
- 选择从光标到行首的内容： `Shift+Home`
- 删除光标右侧的所有内容(当前行): `Ctrl+Delete`
- 扩展/缩小选取范围： `Shift+Alt+Right` 和 `Shift+Alt+Left`
- 多行编辑(列编辑): `Alt+Shift+鼠标左键` 或 `Ctrl+Alt+Down/Up`
- **同时选中所有匹配编辑**(与当前行或选定内容匹配): `Ctrl+Shift+L`
- 下一个匹配的也被选中: `Ctrl+D`
- 回退上一个光标操作: `Ctrl+U`
- 撤销上一步操作: Ctrl+Z
- 手动保存: Ctrl+S

> #### 重构代码

- 找到所有的引用: `Shift+F12`
- 同时修改本文件中所有匹配的: `Ctrl+Shift+L`
- 跳转到下一个 Error 或 Warning: 当有多个错误时可以按 F8 逐个跳转

> #### 查找替换

- 查找: `Ctrl+F`
- 展开`>`替换

> #### 显示相关

- 放大或缩小(以编辑器左上角为基准): `Ctrl +/-`
- 侧边栏显示或隐藏： `Ctrl+B`
- 全局搜索: `Ctrl+Shift+F`
- 全局搜索替换: `Ctrl+Shift+H`
- 显示 Debug: Ctrl+Shift+D
- 显示 Output: Ctrl+Shift+U

> #### 其他设置

- 自动保存：File -> AutoSave(中文界面下“文件”->“自动保存”) 或者 Ctrl+Shift+P，输入 auto

## VS Code 批量修改快捷键

- 按住`Alt`，用`鼠标左键点击`，可以出现多个光标，输入的代码可以在光标处同时增加
- 按住`Ctrl+Alt`，再按键盘上`向上或者向下的键`，可以使一列上出现多个光标
- 选中一段文字，按`Shift+Alt+I`，可以在每行末尾出现光标
- 光标放在一个地方，按`Ctrl+Shift+L`，可以在页面中出现这个词的不同地方都出现光标
- 按`Shift+Alt`，再使用鼠标拖动，也可以出现竖直的列光标，同时可以选中多列

## 更多参考

- [VS Code 官方快捷键大全](https://code.visualstudio.com/docs/getstarted/keybindings)
- [VS Code 常用快捷键与插件推荐](https://www.cnblogs.com/echolun/p/10872717.html)
