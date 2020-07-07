<template>
  <div class="hm-checkbox-group">
    <slot></slot>
  </div>
</template>

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

<style>
</style>