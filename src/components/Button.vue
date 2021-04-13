<template>
  <button class="hm-button" :class="[`hm-button--${type}`,{
    'is-plain':plain
  },{
    'is-round':round
  },{
    'is-circle':circle
  },{'is-disabled':disabled}]" @click="handleClick" :disabled="disabled">
    <!-- 对于element icon：直接通过设置类名为 el-icon-iconName 来使用即可-->
    <!-- 如果传入了icon -->
    <i v-if="icon" :class="icon"></i>
    <!-- 如果传入了其他内容 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'hmButton',
  // 封装一个通用的组件，会对props做约束(校验)，
  props: {
    // 类型
    type: {
      type: String,
      default: '',
    },
    // 是否朴素(镂空)
    plain: {
      type: Boolean,
      default: false,
    },
    // 是否圆角
    round: {
      type: Boolean,
      default: false,
    },
    // 是否圆
    circle: {
      type: Boolean,
      default: false,
    },
    // 字体图标
    icon: {
      type: String,
      default: '',
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      // 派发click事件，覆盖掉了原生的click事件，传事件对象
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss">
.hm-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }

  &--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
    &.is-plain {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
      &:hover,
      &:focus {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
      }
    }
    // 禁用
    &.is-disabled {
      background: #a0cfff;
      border-color: #a0cfff;
      color: #fff;
      cursor: not-allowed;
      &:hover,
      &:focus {
        background: #a0cfff;
        border-color: #a0cfff;
        color: #fff;
      }
    }
  }
  &--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
    &.is-plain {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;
      &:hover,
      &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
      }
    }
  }
  &--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
    &.is-plain {
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;
      &:hover,
      &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
      }
    }
  }
  &--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
    &.is-plain {
      color: #e6a23c;
      background: #fdf6ec;
      border-color: #f5dab1;
      &:hover,
      &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
      }
    }
  }
  &--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
    &.is-plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;
      &:hover,
      &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
      }
    }
  }
  // 圆角
  &.is-round {
    border-radius: 20px;
  }
  // 圆
  &.is-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 14px;
  }
  [class*='el-icon-'] + span {
    margin-left: 5px;
  }
}
</style>