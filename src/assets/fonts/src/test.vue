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