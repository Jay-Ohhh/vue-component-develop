<template>
  <div class="hm-form">
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