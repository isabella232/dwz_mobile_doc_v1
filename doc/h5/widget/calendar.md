# calendar 日历

- 支持国际化
- 日历样式 calendar.less 支持自定义
- 支持 月日历、周日历、input 日期选择器
- 支持左右滑动切换
- 支持自定义日期范围
- 支持自定义日期格式
- 支持日历事件记录展示

> ## 效果展示

![](../../../_media/h5/widget/calendar/1.jpg?height=360)
![](../../../_media/h5/widget/calendar/2.jpg?height=360)
![](../../../_media/h5/widget/calendar/3.jpg?height=360)

> ## 月日历

```html
<div
  class="dwz-calendar"
  dateFmt="yyyy-MM-dd"
  minDate="{%y-3}-%M-%d"
  maxDate="%y-%M-{%d+3}"
></div>

<script type="text/javascript">
  function helper(tpl, params) {
    this.find(".dwz-calendar").calendar({
      //选择日期点击事件
      changeDayFn: function ($day, value) {
        console.log($day.dataset(), $day.hasClass("dot"), value);
      },

      //刷新日期列表完成事件
      refreshDayFn: ($days, dateWrap) => {
        // 日历下面的小红点（测试数据双数日期加小红点）
        $days.each(function (index) {
          var day = parseInt(this.dataset.day);
          if (day % 2 == 0) {
            $(this).addClass("dot");
          }
        });
      },

      //自定义按钮
      miscBtn: "<button>自定义按钮</button>",

      // 自定义按钮点击事件
      miscBtnFn: function (value) {
        $.alert.toast(value);
      },
    });
  }
</script>
```

> ## 周日历

```html
<div class="dwz-calendar"></div>

<script type="text/javascript">
  function helper(tpl, params) {
    this.find(".dwz-calendar").calendar({
      //选择日期点击事件
      changeDayFn: function ($day, value) {
        console.log($day.dataset(), $day.hasClass("dot"), value);
      },

      //刷新日期列表完成事件
      refreshDayFn: ($days, dateWrap) => {
        console.log($days, dateWrap);
      },
    });
  }
</script>
```

> ## input 日期选择器

```html
<div class="pageFormContent unitBox">
  <div class="form-item">
    <div class="item-content">
      <label>默认格式</label>
      <input
        type="text"
        name="date1"
        value=""
        placeholder="请选择（必填）"
        class="dwz-calendar required"
        readonly
        data-error="请选择日期"
      />
    </div>
  </div>

  <div class="form-item">
    <div class="item-content">
      <label>自定义格式</label>
      <input
        type="text"
        name="date2"
        value=""
        placeholder="yyyy/MM/dd"
        dateFmt="yyyy/MM/dd"
        class="dwz-calendar"
        readonly
      />
    </div>
  </div>

  <div class="form-item">
    <div class="item-content">
      <label>自定义格式</label>
      <input
        type="text"
        name="date3"
        value=""
        placeholder="dd/MM/yyyy"
        dateFmt="dd/MM/yyyy"
        class="dwz-calendar"
        readonly
      />
    </div>
  </div>

  <div class="form-item">
    <div class="item-content">
      <label>自定义格式</label>
      <input
        type="text"
        name="date4"
        value=""
        placeholder="yyyy年MM月dd日"
        dateFmt="yyyy年MM月dd日"
        class="dwz-calendar"
        readonly
      />
    </div>
  </div>

  <div class="form-item">
    <div class="item-content">
      <label>日期范围</label>
      <input
        type="text"
        name="date4"
        value=""
        placeholder="2021-02-01 ~ 2021-03-15"
        minDate="2021-02-01"
        maxDate="2021-03-15"
        class="dwz-calendar"
        readonly
      />
    </div>
  </div>

  <div class="form-item">
    <div class="item-content">
      <label>动态范围</label>
      <input
        type="text"
        name="date5"
        value=""
        placeholder="动态格式%y-%M-%d或%y-%M"
        minDate="{%y-1}-%M-%d"
        maxDate="%y-%M-{%d+1}"
        class="dwz-calendar"
        readonly
      />
    </div>
  </div>

  <div class="form-item">
    <div class="item-content">
      <label>动态范围</label>
      <input
        type="text"
        name="date5"
        value=""
        placeholder="过去3个月"
        minDate="%y-{%M-3}"
        maxDate="%y-{%M+1}-0"
        class="dwz-calendar"
        readonly
      />
    </div>
  </div>
  <div class="form-item">
    <div class="item-content">
      <label>动态范围</label>
      <input
        type="text"
        name="date5"
        value=""
        placeholder="未来半年"
        minDate="%y-%M"
        maxDate="%y-{%M+7}-0"
        class="dwz-calendar"
        readonly
      />
    </div>
  </div>

  <div class="form-item">
    <div class="item-content">
      <label>动态范围</label>
      <input
        type="text"
        name="date5"
        value=""
        placeholder="过去10天"
        minDate="%y-%M-{%d-10}"
        maxDate="%y-%M-%d"
        class="dwz-calendar"
        readonly
      />
    </div>
  </div>

  <div class="form-item">
    <div class="item-content">
      <label>动态范围</label>
      <input
        type="text"
        name="date5"
        value=""
        placeholder="未来10天"
        minDate="%y-%M-%d"
        maxDate="%y-%M-{%d+10}"
        class="dwz-calendar"
        readonly
      />
    </div>
  </div>
</div>
```

> ## 参数说明

月日历、周日历、input 日期选择器 参数基本一致

### 自定义日期格式

- dateFmt="yyyy-MM-dd"
- dateFmt="yyyy/MM/dd"
- dateFmt="MM/dd/yyyy"
- dateFmt="yyyy 年 MM 月 dd 日"

### 自定义日期范围

- 静态格式 y-M-d 或 y-M 或 y

  - minDate="2000-01-15" maxDate="2012-12-15"
  - minDate="2000-01" maxDate="2012-12"
  - minDate="2000" maxDate="2012"

- 动态格式%y-%M-%d 或%y-%M
  - minDate="{%y-10}-%M-%d" maxDate="%y-%M-{%d+1}"
  - minDate="{%y-10}-%M" maxDate="{%y+10}-%M"
  - minDate="{%y-10}" maxDate="{%y+10}"
