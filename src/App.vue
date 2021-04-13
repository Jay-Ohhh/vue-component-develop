<template>
  <div id="app">
    <!-- 按钮组件测试 -->
    <div class="btn-wrap">
      <div class="row">
        <hm-button icon="el-icon-check">按钮</hm-button>
        <hm-button icon="el-icon-check" type="primary">按钮</hm-button>
        <hm-button icon="el-icon-check" type="success">按钮</hm-button>
        <hm-button icon="el-icon-check" type="info">按钮</hm-button>
        <hm-button icon="el-icon-check" type="warning">按钮</hm-button>
        <hm-button icon="el-icon-check" type="danger">按钮</hm-button>
      </div>
      <div class="row">
        <hm-button plain>按钮</hm-button>
        <hm-button plain type="primary">按钮</hm-button>
        <hm-button plain type="success">按钮</hm-button>
        <hm-button plain type="info">按钮</hm-button>
        <hm-button plain type="warning">按钮</hm-button>
        <hm-button plain type="danger">按钮</hm-button>
      </div>
      <div class="row">
        <hm-button round>按钮</hm-button>
        <hm-button round type="primary">按钮</hm-button>
        <hm-button round type="success">按钮</hm-button>
        <hm-button round type="info">按钮</hm-button>
        <hm-button round type="warning">按钮</hm-button>
        <hm-button round type="danger">按钮</hm-button>
      </div>
      <div class="row">
        <hm-button circle>P</hm-button>
        <hm-button circle type="primary">P</hm-button>
        <hm-button circle type="success">P</hm-button>
        <hm-button circle type="info">P</hm-button>
        <hm-button circle type="warning">P</hm-button>
        <hm-button circle type="danger">P</hm-button>
      </div>
      <div class="row">
        <hm-button icon="el-icon-ice-cream-round" circle></hm-button>
        <hm-button icon="el-icon-ice-cream-round" circle type="primary">
        </hm-button>
        <hm-button icon="el-icon-ice-cream-round" circle type="success">
        </hm-button>
        <hm-button icon="el-icon-ice-cream-round" circle type="info">
        </hm-button>
        <hm-button icon="el-icon-ice-cream-round" circle type="warning">
        </hm-button>
        <hm-button icon="el-icon-ice-cream-round" circle type="danger">
        </hm-button>
      </div>
      <div class="row">
        <hm-button disabled type="primary">按钮</hm-button>
      </div>
    </div>

    <!-- 对话框组件测试 -->
    <div class="dialog-wrap">
      <!-- :visible.sync="visible" 1、向子组件传递参数 2、可以让点击遮罩层和右上角x 也能关闭对话框 -->
      <hm-button type="primary" @click="visible=true">测试dialog点击（对话框）
      </hm-button>
      <hm-dialog title="哈哈" width="50%" top="200px" :visible.sync="visible"
        :close-on-click-modal=false>
        <template v-slot:footer>
          <hm-button @click="visible = false" style="marginRight:20px">取消
          </hm-button>
          <hm-button type="primary" @click="visible = false">确定</hm-button>
        </template>
      </hm-dialog>
    </div>

    <!-- 输入框input组件测试 -->
    <div class="input-wrap">
      <hm-input placeholder='请输入内容'></hm-input>
      <hm-input placeholder='请输入内容' disabled></hm-input>
      <hm-input placeholder='请输入内容' v-model="username"></hm-input>

      <hm-input v-model="username"></hm-input>
      <hm-input v-model="username" clearable></hm-input>
      <hm-input v-model="password" show-password type="password"></hm-input>
      <hm-input v-model="username" clearable show-password></hm-input>
      <!-- <input v-model="username"> -->
      <!-- v-model本质是上语法糖  等价于 -->
      <!-- <input :value="username" @input="username = $event.target.value"> -->
      <!-- 如果input事件是子组件$emit过来的，则@input="username = $emit过来的参数" -->
    </div>

    <!-- Switch组件测试 -->
    <div class="swtich-wrap">
      <hm-switch v-model="active1" inactive-color="#1a6aaa"></hm-switch>
      &ensp;
      <hm-switch v-model="active2" name="username" active-color="pink"
        inactive-color="skyblue">
      </hm-switch>
    </div>
    <br />
    <!-- radio组件测试 -->
    <div class="radio-wrap">
      <hm-radio-group v-model="gender">
        <hm-radio label="1">男</hm-radio>
        <hm-radio label="0">女</hm-radio>
      </hm-radio-group><br />
      <!-- <hm-radio label="1" v-model="gender">男</hm-radio> -->
      <!-- <hm-radio label="0" v-model="gender">女</hm-radio> -->
    </div>

    <!-- checkbox组件测试 -->
    <div class="checkbox-wrap">
      <hm-checkbox-group v-model="hobby">
        <hm-checkbox label="篮球"></hm-checkbox>
        <hm-checkbox label="画画"></hm-checkbox>
        <hm-checkbox label="跳舞"></hm-checkbox>
      </hm-checkbox-group>

      <hm-checkbox label="篮球" v-model="active3"></hm-checkbox>
      <hm-checkbox label="画画" v-model="active3"></hm-checkbox>
      <hm-checkbox label="跳舞" v-model="active3"></hm-checkbox>
    </div>
    <br />

    <!-- form、form-item组件测试 -->
    <div style="color:#aaa;">form、form-item组件测试：</div>
    <br />
    <hm-form :model="model" label-width="60px">
      <hm-form-item label="用户名">
        <hm-input placeholder="请输入用户名" v-model="model.username"></hm-input>
      </hm-form-item>
      <hm-form-item label="选择">
        <hm-switch v-model="model.active"></hm-switch>
      </hm-form-item>
    </hm-form>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      visible: false,
      username: 'Jay',
      password: '',
      active1: false,
      active2: false,
      gender: '1',
      active3: false,
      hobby: ['篮球', '画画', '跳舞'],
      model: {
        username: 'Jay',
        active: false,
      },
    }
  },
  methods: {
    fn(e) {
      console.log(typeof e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
#app {
  height: 2000px;
}
.row {
  margin-bottom: 20px;
  .hm-button {
    margin-right: 20px;
  }
}
.input-wrap {
  margin: 20px 0;
  .hm-input {
    margin-bottom: 15px;
  }
}
.radio-wrap {
  margin: 20px 0;
}
</style>
