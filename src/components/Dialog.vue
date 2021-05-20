<template>
  <!-- vue动画 -->
  <transition name="dialog-fade">
    <!-- 遮罩层mask -->
    <div class="Jay-dialog__wrapper" v-show="visible"
      @click.self="handleCloseByMask">
      <div class="Jay-dialog" :style="{width:width,marginTop:top}">
        <div class="Jay-dialog__header">
          <!-- 可以改变标题结构 -->
          <slot name="title">
            <span class="Jay-dialog__title">{{title}}</span>
          </slot>
          <button class="Jay-dialog__headerbtn" @click="handleCloseByX">
            <i class="el-icon-close"></i>
          </button>
        </div>
        <div class="Jay-dialog__body">
          <!-- 直接可以在Dialog标签里改内容 -->
          <slot>
            <span>这是一段信息</span>
          </slot>
        </div>
        <!-- 如果父组件v-slot:footer有内容,就会显示该盒子，
      并替换掉该插槽，如果没有v-slot:footer或其没有内容不会显示该盒子 -->
        <div class="Jay-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  // vue规定名字不能是dialog，会冲突
  name: 'JayDialog',
  props: {
    title: {
      type: String,
      default: '提示',
    },
    width: {
      type: String,
      default: '50%',
    },
    top: {
      type: String,
      default: '200px',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    // 是否可以通过点击遮罩层关闭对话框
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    // 点击 右上角X 关闭对话框
    handleCloseByX() {
      // 派发close事件
      this.$emit('update:visible', false)
    },
    // 点击遮罩层，关闭对话框
    handleCloseByMask() {
      if (this.closeOnClickModal) this.$emit('update:visible', false)
    },
  },
}
</script>

<style lang="scss" >
.Jay-dialog__wrapper {
  // 遮罩层，使占满全屏，点击不了其他东西
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .Jay-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .Jay-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .Jay-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .Jay-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>