<h3 align="center" style="margin:-20px 0 0;">Jay-UI</h3>
<h4 align="center" style="margin:5px 0 0;">基于Vue2的常用组件库</h4>

### You can use

- [x] Button
- [x] Checkbox
- [x] CheckboxGroup
- [x] Dialog
- [x] Form
- [x] Form.Item
- [x] Input
- [x] Radio
- [x] RadioGroup
- [x] Switch

### Screenshot

![组件截图](http://jay_ohhh.gitee.io/imagehosting/vue-component-develop/component-list.png)

### License

[MIT](https://opensource.org/licenses/MIT)

Copyright © 2020 - present , Jay_Ohhh

---

### 常见组件封装

本组件库用到 **Element-UI 的 icon 图标**，根据选择，也可以使用 **阿里 iconfont** 和 **Font Awesome**

#### button组件

##### 前置知识

    组件通讯
    组件插槽
    props校验

##### 参数支持

| 参数名   |                         描述                          |  类型   | 默认值 |
| -------- | :---------------------------------------------------: | :-----: | :----: |
| type     | 按钮类型(primary / success / warning / danger / info) | string  |   ''   |
| plain    |                是否是朴素按钮（镂空）                 | boolean | false  |
| round    |                    是否是圆角按钮                     | boolean | false  |
| circle   |                    是否是圆形按钮                     | boolean | false  |
| disabled |                     是否禁用按钮                      | boolean | false  |
| icon     |                图标类名（Font Class）                 | string  |   ''   |

##### 事件支持

| 事件名 | 描述     |
| ------ | -------- |
| click  | 点击事件 |

##### 基本结构

```vue
<template>
  <button class="Jay-button" :class="[`Jay-button--${type}`,{
    'is-plain':plain
  },{
    'is-round':round
  },{
    'is-circle':circle
  },{'is-disabled':disabled}]" @click="handleClick" :disabled="disabled">
    <!-- 对于element icon：直接通过设置类名为 el-icon-iconName 来使用即可-->
    <!-- 如果传入了icon -->
    <i v-if="icon" :class="icon"></i>
    <!-- 如果传入了其他内容 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
```

##### JS部分

```vue
<script>
export default {
  name: 'JayButton',
  // 封装一个通用的组件，会对props做约束(校验)，
  props: {
    // 类型
    type: {
      type: String,
      default: '',
    },
    // 是否朴素(镂空)
    plain: {
      type: Boolean,
      default: false,
    },
    // 是否圆角
    round: {
      type: Boolean,
      default: false,
    },
    // 是否圆
    circle: {
      type: Boolean,
      default: false,
    },
    // 字体图标
    icon: {
      type: String,
      default: '',
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      // 派发click事件，覆盖掉了原生的click事件，传事件对象
      this.$emit('click', e)
    },
  },
}
</script>
```

##### 基本样式

```scss
.Jay-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
```

##### type属性

```scss
.Jay-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.Jay-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.Jay-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.Jay-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.Jay-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}
```

##### plain属性

```scss
// 朴素的按钮
.Jay-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.Jay-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.Jay-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.Jay-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.Jay-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.Jay-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
```

##### round属性

```scss
.Jay-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
```

##### circle属性

```scss
// 原形按钮
.Jay-button.is-circle {
   width: 40px;
   height: 40px;
   border-radius: 50%;
   font-size: 14px;
}
```

##### icon的支持

在main.js中引入字体图标文件

```js
import './assets/fonts/font.scss'
```

**样式**

```scss
// 按钮后的文本
.Jay-button [class*=Jay-icon-]+span {
    margin-left: 5px;
}
```

##### 禁用按钮

```scss
// 禁用
.Jay-button.is-disabled,
.Jay-button.is-disabled:focus,
.Jay-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.Jay-button.is-disabled,
.Jay-button.is-disabled:focus,
.Jay-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.Jay-button--primary.is-disabled,
.Jay-button--primary.is-disabled:active,
.Jay-button--primary.is-disabled:focus,
.Jay-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.Jay-button--success.is-disabled,
.Jay-button--success.is-disabled:active,
.Jay-button--success.is-disabled:focus,
.Jay-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.Jay-button--info.is-disabled,
.Jay-button--info.is-disabled:active,
.Jay-button--info.is-disabled:focus,
.Jay-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.Jay-button--warning.is-disabled,
.Jay-button--warning.is-disabled:active,
.Jay-button--warning.is-disabled:focus,
.Jay-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.Jay-button--danger.is-disabled,
.Jay-button--danger.is-disabled:active,
.Jay-button--danger.is-disabled:focus,
.Jay-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

```

**click事件支持**

**结构**

    @click="handleClick"

**js**

```js
methods: {
  handleClick (e) {
    this.$emit('click', e)
  }
}
```

#### dialog组件

##### 前置知识

    vue过渡与动画
    sync修饰符
    具名插槽与v-slot指令

##### 参数支持

| 参数名  |               描述               |  类型   | 默认值 |
| ------- | :------------------------------: | :-----: | :----: |
| title   |            对话框标题            | string  | '提示' |
| width   |            对话框宽度            | string  | '50%'  |
| visible | 是否显示dialog（支持sync修饰符） | boolean | false  |
| top     |           与顶部的距离           | string  | '15vh' |

##### 事件支持

| 事件名 | 描述             |
| ------ | ---------------- |
| opened | 模态框显示的事件 |
| closed | 模态框关闭的事件 |

##### 插槽说明

| 插槽名称 | 描述               |
| -------- | ------------------ |
| default  | dialog的内容       |
| title    | dialog的标题       |
| footer   | dialog的底部操作区 |

##### 基本结构

```vue
<template>
  <div class="Jay-dialog__wrapper">
    <div class="Jay-dialog">
      <div class="Jay-dialog__header">
        <span class="Jay-dialog__title">提示</span>
        <button class="Jay-dialog__headerbtn">
          <i class="Jay-icon-close"></i>
        </button>
      </div>
      <div class="Jay-dialog__body">
        <span>这是一段信息</span>
      </div>
      <div class="Jay-dialog__footer">
        <Jay-button>取消</Jay-button>
        <Jay-button type="primary">确定</Jay-button>
      </div>
    </div>
  </div>
</template>
```

##### JS部分

```vue
<script>
export default {
  // vue规定名字不能是dialog，会冲突
  name: 'JayDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '200px'
    },
    visible: {
      type: Boolean,
      default: false
    },
    // 是否可以通过点击遮罩层关闭对话框
    closeOnClickModal: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 点击 右上角X 关闭对话框
    handleCloseByX() {
      // 派发close事件
      this.$emit('update:visible', false)
    },
    // 点击遮罩层，关闭对话框
    handleCloseByMask() {
      if (this.closeOnClickModal) this.$emit('update:visible', false)
    }
  }
}
</script>
```

##### 基本样式

```scss
.Jay-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .Jay-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .Jay-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .Jay-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .Jay-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

```

##### title属性

title属性既支持传入title属性，也支持传入title插槽

结构

```vue
<slot name="title">
  <span class="Jay-dialog__title">{{title}}</span>
</slot>
```


js

```js
props: {
  title: {
    type: String,
    default: '提示'
  }
}
```

##### width属性与top属性

结构

```vue
<div class="Jay-dialog" :style="style">
```


js

```js
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      tpye: String,
      default: '15vh'
    }
  },
  computed: {
    style () {
      return {
        width: this.width,
        marginTop: this.top
      }
    }
  }
```

##### 内容插槽

```vue
<div class="Jay-dialog__body">
  <!-- 默认插槽 -->
  <slot></slot>
</div>
```

##### 底部插槽

```vue
<div class="Jay-dialog__footer" v-if="$slots.footer">
  <slot name="footer"></slot>
</div>
```

##### 控制显示与隐藏

结构

```vue
<div class="Jay-dialog__wrapper" v-show="visible">
```

##### 点击遮罩层关闭

```vue
<div class="Jay-dialog__wrapper" v-show="visible" @click.self="handleClose">
```

##### 点击关闭按钮关闭

```vue
 <button class="Jay-dialog__headerbtn" @click="handleClose">
```

##### 关闭处理

```js
handleClose () {
	this.$emit('update:visible', false)
}
```

##### 动画处理

结构

```vue
<transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave"></transition>
```


样式

```css
.dialog-fade-enter-active {
  animation: dialog-fade-in .4s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out .4s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
```


js

```js
afterEnter () {
  this.$emit('opened')
},
afterLeave () {
  this.$emit('closed')
}
```

#### input组件

##### 参数支持

| 参数名称      | 描述                      | 类型    | 默认值 |
| ------------- | ------------------------- | ------- | ------ |
| placeholder   | 占位符                    | string  | null   |
| type          | 文本框类型(text/password) | string  | 'text' |
| disabled      | 禁用                      | boolean | false  |
| clearable     | 是否显示清空按钮          | boolean | false  |
| show-password | 是否显示密码切换按钮      | boolean | false  |
| name          | name属性                  | string  | null   |
| v-model       | 双向绑定                  | string  | ''     |

##### 事件支持

| 事件名称 | 描述           |
| -------- | -------------- |
| blur     | 失去焦点事件   |
| change   | 内容改变事件   |
| focus    | 获取的焦点事件 |

##### 基本结构

```vue
<template>
  <div class="Jay-input " :class="{'Jay-input--suffix':showSuffix}">
    <!-- 如果传进来的是密码框则判断 -->
    <input :type="showPassword?(passwordVisible?'text':'password'):type"
      class="Jay-input__inner" :class="{'is-disabled':disabled}"
      :placeholder="placeholder" :name="name" :disabled="disabled"
      :value="value" @input="handleInput">
    <span class="Jay-input__suffix" v-if="showSuffix">
      <!-- clearable为true且输入框要有值才显示 -->
      <i class="Jay-input__icon el-icon-circle-close" v-if="clearable && value"
        @click="clear"></i>
      <!-- passwordVisible为true且输入框要有值才显示 -->
      <i class="Jay-input__icon el-icon-view " :class="{'el-icon-view-active':
        passwordVisible
      }" v-if="showPassword && value" @click="handlePassword"></i>
    </span>
  </div>
</template>
```

##### JS

```vue
<script>
export default {
  name: 'JayInput',
  data() {
    return {
      // 不要用type来控制text和password的切换，因为type是父组件传过来的
      // 密码显示与隐藏
      passwordVisible: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // v-model会用到
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    // 输入事件
    handleInput(e) {
      // 派发自定义input事件（默认传入下面的参数），覆盖了元素的input事件
      this.$emit('input', e.target.value)
    },
    // 清空内容
    clear() {
      this.$emit('input', '')
    },
    // 密码显示与隐藏
    handlePassword() {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>
```



##### 基本样式

```scss
.Jay-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .Jay-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
  }
}
```

##### placeholder

结构

```vue
<input type="text" class="Jay-input__inner" :placeholder="placeholder">
```

JS

```js
props: {
  placeholder: {
    type: String,
      default: ''
  }
}
```

##### type、name

结构

```vue
<input
  class="Jay-input__inner"
  :placeholder="placeholder"
  :type="type"
	:name="name"
  :disabled="disabled"
>
```

JS

```js
type: {
  type: String,
  default: 'text'
},
name: {
  type: String,
  default: null
},
```

##### 禁用按钮-disabled

结构

```vue
<div class="Jay-input">
  <input
    class="Jay-input__inner"
    :class="{'is-disabled': disabled}"
    :placeholder="placeholder"
    :type="type"
    :disabled="disabled"
    >
</div>
```


JS

```js
disabled: {
  type: Boolean,
  default: false
}
```


样式

```scss
&.is-disabled {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
```

##### 注册input事件

html结构

```vue
<div class="Jay-input">
  <input
         class="Jay-input__inner"
         :class="{'is-disabled': disabled}"
         :placeholder="placeholder"
         :type="type"
         :disabled="disabled"
         :value="value"
         @input="handleInput"
         >
</div>
```

js


```js
props: {
  value: [String, Number]
},
methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
```

##### clearable与show-password处理

如果给input组件传入clearable属性，会显示一个清空的按钮，如果传入show-password，则会显示一个用于切换密码显示的处理

基本结构

```vue
<span class="Jay-input__suffix">
  <i class="Jay-input__icon Jay-icon-circle-close"></i>
  <i class="Jay-input__icon Jay-icon-view"></i>
</span>
```

props接收

```js
clearable: {
  type: Boolean,
  default: false
},
showPassword: {
  type: Boolean,
  default: false
}
```

##### 控制按钮显示和隐藏

```vue
<span class="Jay-input__suffix">
  <i class="Jay-input__icon Jay-icon-circle-close" v-if="clearable"></i>
  <i class="Jay-input__icon Jay-icon-view" v-if="showPassword"></i>
</span>
```

样式

```scss
.Jay-input--suffix {
  .Jay-input__inner {
    padding-right: 30px;
  }
  .Jay-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}

```

##### 控制Jay-input--suffix的类名

```vue
<div class="Jay-input " :class="{'Jay-input--suffix':showSuffix}">
    <span class="Jay-input__suffix" v-if="showSuffix">
      <!-- clearable为true且输入框要有值才显示 -->
      <i class="Jay-input__icon el-icon-circle-close" v-if="clearable && value"
        @click="clear"></i>
      <!-- passwordVisible为true且输入框要有值才显示 -->
      <i class="Jay-input__icon el-icon-view " :class="{'el-icon-view-active':
        passwordVisible
      }" v-if="showPassword && value" @click="handlePassword"></i>
    </span>
</div>
```

使用计算属性优化

```js
computed: {
  showSuffix () {
    return this.clearable || this.showPassword
  }
}
```

##### 注册事件-清空内容和切换密码显示

```js
clear () {
  // console.log('123')
  this.$emit('input', '')
}
```
##### 控制密码显示

```js
data () {
  return {
    // 是否显示密码
    passwordVisible: false
  }
},
```

```vue
<input :type="showPassword?(passwordVisible?'text':'password'):type"
      class="Jay-input__inner" :class="{'is-disabled':disabled}"
      :placeholder="placeholder" :name="name" :disabled="disabled"
      :value="value" @input="handleInput" />
```

```js
handlePasswordVisible () {
  // 切换type类型
  this.passwordVisible = !this.passwordVisible
}
```

**其他常见事件的支持**

```js
handleFocus (e) {
	this.$emit('focus', e)
},
handleBlur (e) {
	this.$emit('blur', e)
},
handleChange (e) {
	this.$emit('change', e.target.value)
}
```

#### switch组件

##### 参数支持

| 参数名称      | 描述                 | 类型    | 默认值 |
| ------------- | -------------------- | ------- | ------ |
| v-model       | 双向绑定             | boolean | false  |
| name          | name属性             | string  | ''     |
| activeColor   | 自定义的激活的颜色   | string  | ''     |
| inactiveColor | 自定义的不激活的颜色 | string  | ''     |

##### 事件支持

| 事件名称 | 描述               |
| -------- | ------------------ |
| change   | change时触发的事件 |

##### 基本结构

```vue
<template>
  <!-- 实际上是单选框 -->
  <div class="Jay-switch" :class="{'is-checked':value}" @click="handleClick">
    <input type="checkbox" class="Jay-switch__input" ref="input">
    <span class="Jay-switch__core" ref="core">
      <span class="Jay-switch__button"></span>
    </span>
  </div>
</template>
```

##### JS

```vue
<script>
export default {
  name: 'JaySwitch',
  props: {
    // v-model会用到
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick() {
      // 由于修改数据后，视图不会立刻更新，所以这里可以使用$nextTick或者async await
      await this.$emit('input', !this.value)
      this.$refs.input.checked = this.value
      console.log(this.$refs.input.checked)
      this.changeActiveColor()
    },
    changeActiveColor() {
      // 修改开关的颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.backgroundColor = color
        this.$refs.core.style.borderColor = color
      }
    }
  },
  mounted() {
    this.changeActiveColor()
    this.$refs.input.checked = this.value
  }
}
</script>
```

##### 基本样式

```scss
.Jay-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .Jay-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .Jay-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
```

##### 注册点击事件

```vue
<div class="Jay-switch" @click="handleClick">
```

```js
methods: {
  handleClick () {
    this.$emit('input', !this.value)
  }
}
```

选中样式

```scss
.Jay-switch.is-checked {
  .Jay-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .Jay-switch__button {
      transform: translateX(20px);
    }
  }
}
```

##### name属性支持

用户在使用switch组件的时候，实质上是当成表单元素来使用的。因此可能会用到组件的name属性。因此需要在switch组件中添加一个checkbox，并且当值改变的时候，也需要设置checkbox的value值

结构

```vue
<input
  class="Jay-switch__input"
  type="checkbox"
/>
```

JS

```js
name: {
  type: String,
  default: ''
}
```

样式

```scss
.Jay-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
```

##### 控制checkbox的值与value同步

```js
mounted () {
  this.$refs.input.checked = this.value
},
methods: {
  async handleChange () {
    this.$emit('input', !this.value)
    // 修改checkbox的值
    await this.$nextTick()
    this.$refs.input.checked = this.value
  }
}
```

#### radio组件

##### 前置知识

    radio的基本使用

##### 参数支持

| 参数名称 | 描述            | 类型                     | 默认值 |
| -------- | --------------- | ------------------------ | ------ |
| v-model  | 双向绑定        | boolean                  | false  |
| label    | 单选框的value值 | string，number , boolean | ''     |
| name     | name属性        | string                   | ''     |

##### 基本结构

```vue
<template>
  <!-- 单选按钮 将label的值传进input的value -->
  <!-- 为了不用让每个 radio 都绑定 v-model 可以用 radio-group 包裹 radio 用 radio-group 绑定 v-model -->
  <label class="Jay-radio" :class="{'is-checked':label===model}">
    <span class="Jay-radio__input">
      <span class="Jay-radio__inner"></span>
      <!-- 在vue中对于radio单选框来说 每个单选框的value是不一样的 v-model绑定同一个变量实现单选 -->
      <!-- 单选框的选中的值始终是v-model绑定的值 且值会绑定到value -->
      <!-- value这一项必须写 因为v-model初始化时内部需要先保存value的初始值 -->
      <!-- v-model实际上做了三件事 初始化时内部先记录了每个单选框的value初始值 :value="model" @change="model=选中的单选框的value初始值" -->
      <input type="radio" class="Jay-radio__original" :value="label"
        :name="name" v-model="model">
    </span>
    <span class="Jay-radio__label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>
```

##### JS

```js
<script>
export default {
  name: 'hmSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick() {
      // 由于修改数据后，视图不会立刻更新，所以这里可以使用$nextTick或者async await
      await this.$emit('input', !this.value)
      this.$refs.input.checked = this.value
      console.log(this.$refs.input.checked)
      this.changeActiveColor()
    },
    changeActiveColor() {
      // 修改开关的颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.backgroundColor = color
        this.$refs.core.style.borderColor = color
      }
    }
  },
  mounted() {
    this.changeActiveColor()
    this.$refs.input.checked = this.value
  }
}
</script>
```

##### 基本样式

```scss
.Jay-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .Jay-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .Jay-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .Jay-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .Jay-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
```

选中的样式

```scss
.Jay-radio.is-checked {
  .Jay-radio__input {
    .Jay-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .Jay-radio__label {
    color: #409eff;
  }
}

```

#### radio-group组件

使用radio组件的缺点，需要给每个组件都绑定v-model，因此我们可以使用radio-group进行包裹，只需绑定一次v-model

##### 前置知识

    provide与inject

##### 基本结构

```vue
<template>
  <!-- 为了不用让每个 radio 都绑定 v-model 可以用 radio-group 包裹 radio 用 radio-group 绑定 v-model -->
  <div class="Jay-radio-group">
    <slot></slot>
  </div>
</template>
```

#####  JS

```vue
<script>
export default {
  name: 'JayRadioGroup',
  props: {
    value: null
  },
  provide() {
    return {
      radioGroup: this
    }
  }
}
</script>
```

##### 修改radio组件

接收inject

```js
inject: {
  RadioGroup: {
    default: ''
  }
},
```

计算属性判断是否包裹在group中

```js
computed: {
    model: {
      // this.radioGroup? 是如果被radio-group组件包裹
      get() {
        return this.radioGroup ? this.radioGroup.value : this.value
      },
      set(value) {
        // 触发父组件的input事件
        this.radioGroup
          ? this.radioGroup.$emit('input', value)
          : this.$emit('input', value)
      }
    }
  }
```

#### checkbox组件

##### 基本结构

```vue
<template>
  <!-- 复选框 -->
  <label class="Jay-checkbox " :class="{'is-checked': isChecked}">
    <span class="Jay-checkbox__input">
      <span class="Jay-checkbox__inner"></span>
      <!-- checkbox复选框选中的值始终是v-model绑定的值，且值会绑定到value-->
      <!-- checkbox复选框的v-model的绑定分两种情况 -->
      <!-- 1、如果没被checkbox-group组件包裹，则v-model绑定的是布尔值，此时v-model会做
      :value="model" @change="model=该复选框的勾选状态" -->
      <!-- 2、如果被checkbox-group组件包裹，则v-model绑定的是从checkbox-group组件传过来的选项数组 
      v-model内部会根据复选框的checked增删选项数组的元素
      :value="model" @change="model=选中的选项数组" -->
      <input type="checkbox" class="Jay-checkbox__original" :name="name"
        :value="label" v-model="model">
    </span>
    <span class="Jay-checkbox__label" v-if="!$slots.default">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

```

##### JS

```vue
<script>
export default {
  name: 'hmCheckbox',
  inject: {
    checkboxGroup: {
      default: null
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    // 如果没有被checkbox-group组件包裹，则model是布尔值，控制是否勾选
    // 如果被checkbox-group组件包裹，则model是一个数组
    model: {
      // checkboxGroup ? 是否被checkbox-group组件包裹
      get() {
        return this.checkboxGroup ? this.checkboxGroup.value : this.value
      },
      set(value) {
        this.checkboxGroup
          ? this.checkboxGroup.$emit('input', value)
          : this.$emit('input', value)
      }
    },
    isChecked() {
      return this.checkboxGroup ? this.model.includes(this.label) : this.model
    }
  }
}
</script>
```

##### 基本样式

```scss
.Jay-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .Jay-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .Jay-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: '';
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .Jay-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .Jay-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
```

选中的样式

```scss
.Jay-checkbox.is-checked {
  .Jay-checkbox__input {
    .Jay-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .Jay-checkbox__label {
    color: #409eff;
  }
}
```

#### checkbox-group组件

使用checkbox-group组件包裹checkbox

##### 基本结构

```vue
<template>
  <div class="Jay-checkbox-group">
    <slot></slot>
  </div>
</template>
```

##### JS

```vue
<script>
export default {
  name: 'hmCheckboxGroup',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  provide() {
    return {
      checkboxGroup: this
    }
  }
}
</script>
```

##### 修改checkbox组件

接收inject

```js
inject: {
  CheckboxGroup: {
    default: ''
  }
},
```

计算属性判断是否包裹在group中

```js
computed: {
    // 如果没有被checkbox-group组件包裹，则model是布尔值，控制是否勾选
    // 如果被checkbox-group组件包裹，则model是一个数组
    model: {
      // checkboxGroup ? 是否被checkbox-group组件包裹
      get() {
        return this.checkboxGroup ? this.checkboxGroup.value : this.value
      },
      set(value) {
        this.checkboxGroup
          ? this.checkboxGroup.$emit('input', value)
          : this.$emit('input', value)
      }
    },
    isChecked() {
      return this.checkboxGroup ? this.model.includes(this.label) : this.model
    }
  } 
```
#### form组件

##### 基本Vue结构

```vue
<template>
  <div class="Jay-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hmForm',
  props: {
    model: {
      type: Object,
      required: true,
    },
    labelWidth: {
      type: String,
      default: 'auto',
    },
  },
  provide() {
    return {
      Form: this,
    }
  },
}
</script>

<style>
</style>
```

#### form-item组件

##### 基本Vue结构

```vue
<template>
  <div class="Jay-form-item">
    <label class="Jay-form-item__label"
      :style="{width:this.Form.labelWidth}">{{label}}</label>
    <div class="Jay-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JayFormItem',
  inject: { Form: { default: null } },
  props: {
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.Jay-form-item {
  margin-bottom: 25px;
  .Jay-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .Jay-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
```



#### 封装成UI组件库

##### 目录调整

- 根目录创建两个文件夹packages和examples

    packages: 用于存放所有的组件
    examples: 用于进行测试，把src改成examples
    
- 把components中所有的组件放入到packages中
- 把fonts放到packages中
- 删除原来的src目录

##### vue.config.js配置

```js
const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
```


​    

##### 统一导出packages中所有的组件

**pakeges/index.js**

```js
// 整个包的入口
// 导入组件
import Button from './Button.vue'
import Checkbox from './Checkbox.vue'
import CheckboxGroup from './CheckboxGroup.vue'
import Dialog from './Dialog.vue'
import Form from './Form.vue'
import FormItem from './FormItem.vue'
import Input from './Input.vue'
import Radio from './Radio.vue'
import RdioGroup from './RdioGroup.vue'
import Switch from './Switch.vue'
// 导入字体图标
import './fonts/font.scss'

const components = [
  Button,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Form,
  FormItem,
  Input,
  Radio,
  RdioGroup,
  Switch,
]

// 定义install方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 注册所有的组件
  components.forEach(v => {
    Vue.component(v.name, v)
  })
}

// 判断是否是直接引入CDN文件，当 Vue 是全局变量时，自动 install
// 先运算(typeof window)
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install
```

##### 测试

在**examples/main.js**中进行导入测试

```js
import Vue from 'vue'
import App from './App.vue'

import JayUI from '../packages'

Vue.use(HeimaUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')  
```

##### 发布到npm

 https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93 

- 在package.json的"scripts"中新增一条 打包命令 

    "lib": "vue-cli-service build --target lib packages/index.js"
    
    然后运行 npm run lib

- 发布到npm

修改**package.json**文件

```js
"name": "jay-ui",
"version": "0.1.0",
// 设置为false
"private": false, 
"main": "dist/jay-ui.umd.min.js",
"author": {
  "name": "Jay"
},
```


​    增加 **.npmignore**文件

    # 忽略目录
    examples/
    packages/
    public/
    # 忽略指定文件
    vue.config.js
    babel.config.js
    *.map

##### npm发布

npm -g install nrm ， nrm ls 查看所有源地址 ， nrm use 源地址

npm login
npm publish

每次上传都要修改package.json的version（包的版本）

如果遇到403错误，可能是package.json的name有其他人使用过。
