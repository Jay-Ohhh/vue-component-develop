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

<script>
export default {
  name: 'JayInput',
  data() {
    return {
      // 不要用type来控制text和password的切换，因为type是父组件传过来的
      // 密码显示与隐藏
      passwordVisible: false,
    }
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword
    },
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
    },
  },
}
</script>

<style lang="scss">
.Jay-input {
  position: relative;
  display: inline-block;
  width: 100%;
  font-size: 14px;
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
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
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
      margin-left: 5px;
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .el-icon-view-active {
      color: #409eff;
    }
  }
}
</style>