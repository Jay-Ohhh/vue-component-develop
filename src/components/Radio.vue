<template>
  <!-- 单选按钮 将label的值传进input的value -->
  <!-- 为了不用让每个 radio 都绑定 v-model 可以用 radio-group 包裹 radio 用 radio-group 绑定 v-model -->
  <label class="Jay-radio" :class="{'is-checked':label===model}">
    <span class="Jay-radio__input">
      <span class="Jay-radio__inner"></span>
      <!-- 单选框的value是选项的描述 -->
      <!-- 单选框change时 ，checked 为true时 v-model将value作为自己的值 -->
      <!-- 1、如果没被radio-group组件包裹，即是单个单选框 -->
      <!-- 2、如果被checkbox-group组件包裹，即是多个单选框，则v-model绑定的是从radio-group组件传过来的值，根据该值与 
      多个单选框的value进行匹配，如果匹配，则使该单选框的checked设置为true
      单选框change时 ，checked 为true时 v-model将该单选框的value作为自己的值 -->
      <input type="radio" class="Jay-radio__original" :value="label"
        :name="name" v-model="model">
    </span>
    <span class="Jay-radio__label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'JayRadio',
  inject: {
    radioGroup: {
      default: '',
    },
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: '',
    },
    value: null, // 此value是父组件传来的value
    name: {
      type: String,
      default: '',
    },
  },
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
      },
    },
  },
}
</script>

<style lang="scss">
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
  user-select: none;
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
      background-color: #eaeaea;
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
      }
    }
    .Jay-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
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
.Jay-radio.is-checked {
  .Jay-radio__input {
    .Jay-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .Jay-radio__label {
    color: #409eff;
  }
}
</style>