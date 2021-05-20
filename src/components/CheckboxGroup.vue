<template>
  <div class="Jay-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JayCheckboxGroup',
  props: {
    value: {
      type: Array,
      default() {
        return []
      },
    },
  },
  provide() {
    return {
      checkboxGroup: this,
    }
  },
}
</script>

<style>
</style>