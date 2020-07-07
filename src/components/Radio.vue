<template>
  <!-- 单选按钮 将label的值传进input的value -->
  <!-- 为了不用让每个 radio 都绑定 v-model 可以用 radio-group 包裹 radio 用 radio-group 绑定 v-model -->
  <label class="hm-radio" :class="{'is-checked':label===model}">
    <span class="hm-radio__input">
      <span class="hm-radio__inner"></span>
      <!-- 在vue中对于radio单选框来说 每个单选框的value是不一样的 v-model绑定同一个变量实现单选 -->
      <!-- 单选框的选中的值始终是v-model绑定的值 且值会绑定到value -->
      <!-- value这一项必须写 因为v-model初始化时内部需要先保存value的初始值 -->
      <!-- v-model实际上做了三件事 初始化时内部先记录了每个单选框的value初始值 :value="model" @change="model=选中的单选框的value初始值" -->
      <input type="radio" class="hm-radio__original" :value="label" :name="name"
        v-model="model">
    </span>
    <span class="hm-radio__label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'hmRadio',
  inject: {
    radioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null, // 此value是父组件传来的value
    name: {
      type: String,
      default: ''
    }
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
      }
    }
  }
}
</script>

<style lang="scss">
.hm-radio {
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
  .hm-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hm-radio__inner {
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
    .hm-radio__original {
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
  .hm-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.hm-radio.is-checked {
  .hm-radio__input {
    .hm-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .hm-radio__label {
    color: #409eff;
  }
}
</style>