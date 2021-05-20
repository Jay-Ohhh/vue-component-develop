<template>
  <!-- 为了不用让每个 radio 都绑定 v-model 可以用 radio-group 包裹 radio 用 radio-group 绑定 v-model -->
  <div class="Jay-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JayRadioGroup',
  props: {
    value: null,
  },
  provide() {
    return {
      radioGroup: this,
    }
  },
}
</script>

<style>
</style>