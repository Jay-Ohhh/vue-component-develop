<template>
  <!-- 复选框 -->
  <label class="hm-checkbox " :class="{'is-checked': isChecked}">
    <span class="hm-checkbox__input">
      <span class="hm-checkbox__inner"></span>
      <!-- checkbox复选框选中的值始终是v-model绑定的值，且值会绑定到value-->
      <!-- checkbox复选框的v-model的绑定分两种情况 -->
      <!-- 1、如果没被checkbox-group组件包裹，则v-model绑定的是布尔值，此时v-model会做
      :value="model" @change="model=该复选框的勾选状态" -->
      <!-- 2、如果被checkbox-group组件包裹，则v-model绑定的是从checkbox-group组件传过来的选项数组 
      v-model内部会根据复选框的checked增删选项数组的元素
      :value="model" @change="model=选中的选项数组" -->
      <input type="checkbox" class="hm-checkbox__original" :name="name"
        :value="label" v-model="model">
    </span>
    <span class="hm-checkbox__label" v-if="!$slots.default">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

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

<style lang="scss" >
.hm-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .hm-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hm-checkbox__inner {
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
    .hm-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .hm-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.hm-checkbox.is-checked {
  .hm-checkbox__input {
    .hm-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .hm-checkbox__label {
    color: #409eff;
  }
}
</style>