<template>
  <!-- 实际上是单选框 -->
  <div class="Jay-switch" :class="{'is-checked':value}" @click="handleClick">
    <input type="checkbox" class="Jay-switch__input" ref="input">
    <span class="Jay-switch__core" ref="core">
      <span class="Jay-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'JaySwitch',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    activeColor: {
      type: String,
      default: '',
    },
    inactiveColor: {
      type: String,
      default: '',
    },
  },
  methods: {
    async handleClick() {
      // 由于修改数据后，视图不会立刻更新，所以这里可以使用$nextTick或者async await
      await this.$emit('input', !this.value)
      this.$refs.input.checked = this.value
      this.changeActiveColor()
    },
    changeActiveColor() {
      // 修改开关的颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.backgroundColor = color
        this.$refs.core.style.borderColor = color
      }
    },
  },
  mounted() {
    this.changeActiveColor()
    this.$refs.input.checked = this.value
  },
}
</script>

<style lang="scss">
.Jay-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .Jay-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
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
.Jay-switch.is-checked {
  .Jay-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .Jay-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>