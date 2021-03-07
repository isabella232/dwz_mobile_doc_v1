# form 表单

> ## 效果展示

![](../../../_media/h5/widget/form/1.jpg?height=360)
![](../../../_media/h5/widget/form/1-1.jpg?height=360)
![](../../../_media/h5/widget/form/2.jpg?height=360)
![](../../../_media/h5/widget/form/3.jpg?height=360)
![](../../../_media/h5/widget/form/4.jpg?height=360)
![](../../../_media/h5/widget/form/5.jpg?height=360)
![](../../../_media/h5/widget/form/6.jpg?height=360)

> ## 基本用法

```html
<form
  class="page-wrap"
  method="post"
  action="./doc/json/ajaxDone.json"
  onsubmit="return validateCallback(this, navViewAjaxDoneClose)"
>
  <header>
    <div class="toolbar">
      <a class="bar-button back-button"><i class="dwz-icon-arrow-left"></i></a>
      <div class="header-title">表单提交 + 验证</div>
    </div>
  </header>

  <section>
    <div class="scroll-content dwz-scroll">
      <div class="scroll">
        <div class="form-content">
          <div class="form-item">
            <div class="item-content">
              <label>交通工具</label>
              <select
                name="traffic_vehicle"
                class="required"
                data-error="请选择交通工具"
              >
                <option>请选择</option>
                <option value="1">飞机</option>
                <option value="2">火车</option>
                <option value="3">汽车</option>
                <option value="4">其它</option>
              </select>
            </div>
          </div>

          <div class="form-item">
            <div class="item-content">
              <label>日期</label>
              <input
                type="text"
                name="start_date"
                placeholder="请选择（必填）"
                class="required dwz-calendar"
                data-error="请选择日期"
                readonly
              />
            </div>
          </div>
          <div class="form-item">
            <div class="item-content">
              <label>手机号</label>
              <input
                type="tel"
                name="mobile"
                class="required dwz-clipboard"
                placeholder="11位手机号"
                maxlength="11"
                data-pattern="[0-9]{11,11}"
                data-error="请输入11位手机号"
              />
            </div>
          </div>

          <div class="form-item">
            <div class="item-content">
              <label>身份证</label>
              <input
                type="tel"
                name="id_code"
                class="required dwz-clipboard"
                placeholder="18位身份证号"
                maxlength="18"
                data-pattern="[0-9]{17,17}[0-9A-Z]{1,1}"
                data-error="请输入18位身份证号"
              />
            </div>
          </div>

          <div class="form-item">
            <div class="item-content">
              <label>整数范围</label>
              <input
                type="number"
                step="1"
                name="number1"
                placeholder="1~10之间的整数"
                class="required"
                min="1"
                max="10"
                data-error="请输入1~10之间的整数"
              />
            </div>
          </div>

          <div class="form-item">
            <div class="item-content">
              <label>小数范围</label>
              <input
                type="number"
                step="0.01"
                name="number1"
                placeholder="1~10之间的小数"
                class="required"
                min="1"
                max="10"
                data-error="请输入1~10之间的小数"
              />
            </div>
          </div>

          <div class="form-item">
            <label>备注</label>
            <div class="item-content">
              <textarea
                class="textarea required"
                name="info"
                rows="4"
                placeholder="请输入备注（必填）"
                maxlength="200"
                data-error="请输入备注"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="form-bar pane">
    <button class="button primary" type="submit">提交</button>
  </div>
</form>
```

> ## 下拉菜单联动

```html
<select
  name="test"
  class="toggleSelectRef"
  data-ref-box="#toggleSelectRef_test1|#toggleSelectRef_test2"
  data-ctr-show="true"
  data-ref-val="1,3|2,3"
>
  <option value="1">显示1</option>
  <option value="2">显示2</option>
  <option value="3">显示1，2</option>
  <option value="4">全部不显示</option>
</select>
<div id="toggleSelectRef_test1">
  # 下拉菜单联动控制局部box显示隐藏, class="toggleSelectRef" [data-ref-box]
  [data-ref-val] [data-ctr-show] 可选，默认控制隐藏，为true时控制显示
</div>
<div id="toggleSelectRef_test2">test2</div>
```

> ## 省市区联动

```html
<div class="form-item">
  <div class="item-content">
    <label>省市区</label>
    <input type="hidden" name="province" />
    <input type="hidden" name="city" />
    <input type="hidden" name="county" />
    <input
      type="text"
      name="destination"
      class="required"
      placeholder="省、市、区"
      data-error="请选择省市区"
      readonly
      onclick="$.dialog.open({
            url: 'tpl/helper/dialogSelectRegion.html?dwz_callback=biz.helper.selectRegionRender',
            data: {
                target:this,
                code: '',
                callback: function(data) {
                    console.log(this, data)
                    var form = this.parentsByTag('form').get(0);
                    form.province.value = data.province;
                    form.city.value = data.city;
                    form.county.value = data.county;
                    form.destination.value = data.names;
                    $.dialog.close();
                }
            },
            pop: 'actionSheet'
        })"
    />
    <i class="dwz-icon-arrow-right"></i>
  </div>
</div>
```

> ## 多选

```html
<div class="form-item">
  <div class="item-content">
    <label>兴趣爱好</label>
    <input type="hidden" name="interest_id" />
    <input
      type="text"
      name="interest_id_txt"
      placeholder="请选择兴趣爱好"
      class="required"
      data-error="请选择兴趣爱好"
      readonly
      onclick="$.alert.prompt('tpl/helper/multipleSelect.html?dwz_callback=biz.helper.multipleSelectRender', {
            target: this,
            page_title: '选择兴趣爱好',
            list: InterestStore.data,
            callback: function(data) {
                console.log(this, data)
                var form = this.parentsByTag('form').get(0);

                form.interest_id.value = data.map(function(item){
                    return item.value
                }).join(',');

                form.interest_id_txt.value = data.map(function(item){
                    return item.name
                }).join(',')
            }
        })"
    />
    <i class="dwz-icon-arrow-right"></i>
  </div>
</div>
```

> ## 电子签名

```html
<div class="form-item">
  <label>电子签名</label>
  <div class="item-content">
    <input
      type="hidden"
      name="drug_sign_url"
      class="required dwz-sign-input"
      data-error="您还没有完成签字！"
    />
    <div class="dwz-sign-box sign-box pic">
      <a
        class="button sign"
        type="button"
        href="javascript:$.dialog.open({url:'tpl/helper/sign.html?dwz_callback=$.drawingBoardRender'})"
        >点击完成签字</a
      >
    </div>
  </div>
</div>
```

> ## 图片上传

```html
<div class="form-item">
  <label>图片组1</label>
  <div class="item-content">
    <ul id="upload-preview-pic1" class="upload-preview"></ul>
    <div class="upload-wrap" rel="#upload-preview-pic1" data-name="pic1[]">
      <button type="button">Upload</button>
    </div>
  </div>
</div>

<div class="form-item">
  <label>图片组2</label>
  <div class="item-content">
    <ul id="upload-preview-pic2" class="upload-preview"></ul>
    <div class="upload-wrap" rel="#upload-preview-pic2" data-name="pic2[]">
      <button type="button">Upload</button>
    </div>
  </div>
</div>
```

> ## 日期选择 + 计算

```html
<div class="form-item">
  <div class="item-content">
    <label>开始时间</label>
    <input
      type="text"
      name="start_date"
      minDate="%y-{%M-3}-%d"
      maxDate="%y-{%M+1}-%d"
      placeholder="请选择（必填）"
      class="required dwz-calendar"
      data-error="请选择开始时间"
      readonly
    />
  </div>
</div>
<div class="form-item">
  <div class="item-content">
    <label>结束时间</label>
    <input
      type="text"
      name="end_date"
      minDate="%y-%M-%d"
      maxDate="%y-{%M+3}-%d"
      placeholder="请选择（必填）"
      class="required dwz-calendar"
      data-error="请选择结束时间"
      readonly
    />
  </div>
</div>

<div class="form-item">
  <div class="item-content">
    <label>出差时长</label>
    <input
      type="text"
      name="day"
      placeholder="根据开始/结束时间自动计算"
      readonly
    />
  </div>
</div>
```

> ## 关联查询

```html
<div class="form-item">
  <div class="item-content">
    <label>同行人</label>
    <input type="hidden" name="together_id" />
    <input
      type="text"
      name="together_txt"
      value=""
      placeholder="请选择（必填）"
      class="required"
      readonly
      data-error="请选择同行人"
      onclick="$.filterPanel.open({
            url: 'tpl/helper/filterPanelLookup.html?dwz_callback=biz.helper.filterPanelRender',
            data: {
                target: this,
                searchUrl: biz.server.getUrl(biz.server.persionList),
                filterItems: [
                    {
                        label: '部门',
                        name: 'department',
                        options: DepartmentStore.data
                    }
                ],
                callback: function(data) {
                    console.log(this, data)
                    var form = this.parentsByTag('form').get(0);
                    form.together_id.value = data.id;
                    form.together_txt.value = data.name
                }
            }
        })"
    />
    <i class="dwz-icon-arrow-right"></i>
  </div>
</div>
```

> ## 表单验证

- 错误提示：data-error="错误提示信息"
- 必填：input 等表单输入控件上加 class="required"
- 最大长度：max-length
- 最小长度：min-length
- 最大值：max
- 最小傎：min
- 正则表达式验证：data-pattern

```html
<!--中文验证-->
<input data-pattern="[\u4e00-\u9fa5]{1,20}" />
<!--手机号验证-->
<input data-pattern="[0-9]{11,11}" />
```

> ## ajax 表单提交

### validateCallback

- 静止表单默认提交跳转页面，统一使用 ajax 请求提交表单数据，提交前会先进行表单验证
- ajax 表单提交默认使用表单字段方式提交， contentType=application/x-www-form-urlencoded; charset=UTF-8
- 如果要提交 json 结构的数据需要在 form 标签上增加属性 `enctype="application/json"`
- 图片上传和电子签名等图片表单字段默认使用 base64 方式，和表单其它字段统一一次性提交
- form 标签加上 `onsubmit="return validateCallback(this)`
- validateCallback(form, callback) 方法接收 2 个参数
  - 第 1 个参数是当前表单 form 对象，第 2 个参数是 ajax 请求完成后的回调函数

### 表单提交回调

- 框架提供了几个默认的 form 提交回调，也可以自己写 form 提交回调
- navViewAjaxDone(json)
- navViewAjaxDoneReload(json)
- navViewAjaxDoneClose(json)
- dialogAjaxDone(json)
