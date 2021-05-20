<template>
  <div id="app">
    <!-- 按钮组件测试 -->
    <div class="btn-wrap">
      <div class="row">
        <jay-button icon="el-icon-check">按钮</jay-button>
        <jay-button icon="el-icon-check" type="primary">按钮</jay-button>
        <jay-button icon="el-icon-check" type="success">按钮</jay-button>
        <jay-button icon="el-icon-check" type="info">按钮</jay-button>
        <jay-button icon="el-icon-check" type="warning">按钮</jay-button>
        <jay-button icon="el-icon-check" type="danger">按钮</jay-button>
      </div>
      <div class="row">
        <jay-button plain>按钮</jay-button>
        <jay-button plain type="primary">按钮</jay-button>
        <jay-button plain type="success">按钮</jay-button>
        <jay-button plain type="info">按钮</jay-button>
        <jay-button plain type="warning">按钮</jay-button>
        <jay-button plain type="danger">按钮</jay-button>
      </div>
      <div class="row">
        <jay-button round>按钮</jay-button>
        <jay-button round type="primary">按钮</jay-button>
        <jay-button round type="success">按钮</jay-button>
        <jay-button round type="info">按钮</jay-button>
        <jay-button round type="warning">按钮</jay-button>
        <jay-button round type="danger">按钮</jay-button>
      </div>
      <div class="row">
        <jay-button circle>P</jay-button>
        <jay-button circle type="primary">P</jay-button>
        <jay-button circle type="success">P</jay-button>
        <jay-button circle type="info">P</jay-button>
        <jay-button circle type="warning">P</jay-button>
        <jay-button circle type="danger">P</jay-button>
      </div>
      <div class="row">
        <jay-button icon="el-icon-ice-cream-round" circle></jay-button>
        <jay-button icon="el-icon-ice-cream-round" circle type="primary">
        </jay-button>
        <jay-button icon="el-icon-ice-cream-round" circle type="success">
        </jay-button>
        <jay-button icon="el-icon-ice-cream-round" circle type="info">
        </jay-button>
        <jay-button icon="el-icon-ice-cream-round" circle type="warning">
        </jay-button>
        <jay-button icon="el-icon-ice-cream-round" circle type="danger">
        </jay-button>
      </div>
      <div class="row">
        <jay-button disabled type="primary">按钮</jay-button>
      </div>
    </div>

    <!-- 对话框组件测试 -->
    <div class="dialog-wrap">
      <!-- :visible.sync="visible" 1、向子组件传递参数 2、可以让点击遮罩层和右上角x 也能关闭对话框 -->
      <jay-button type="primary" @click="visible=true">测试dialog点击（对话框）
      </jay-button>
      <jay-dialog title="哈哈" width="50%" top="200px" :visible.sync="visible"
        :close-on-click-modal=false>
        <template v-slot:footer>
          <jay-button @click="visible = false" style="marginRight:20px">取消
          </jay-button>
          <jay-button type="primary" @click="visible = false">确定</jay-button>
        </template>
      </jay-dialog>
    </div>

    <!-- 输入框input组件测试 -->
    <div class="input-wrap">
      <jay-input placeholder='请输入内容'></jay-input>
      <jay-input placeholder='请输入内容' disabled></jay-input>
      <jay-input placeholder='请输入内容' v-model="username"></jay-input>

      <jay-input v-model="username"></jay-input>
      <jay-input v-model="username" clearable></jay-input>
      <jay-input v-model="password" show-password type="password"></jay-input>
      <jay-input v-model="username" clearable show-password></jay-input>
      <!-- <input v-model="username"> -->
      <!-- v-model本质是上语法糖  等价于 -->
      <!-- <input :value="username" @input="username = $event.target.value"> -->
      <!-- 如果input事件是子组件$emit过来的，则@input="username = $emit过来的参数" -->
    </div>

    <!-- Switch组件测试 -->
    <div class="swtich-wrap">
      <jay-switch v-model="active1" inactive-color="#1a6aaa"></jay-switch>
      &ensp;
      <jay-switch v-model="active2" name="username" active-color="pink"
        inactive-color="skyblue">
      </jay-switch>
    </div>
    <br />
    <!-- radio组件测试 -->
    <div class="radio-wrap">
      <jay-radio-group v-model="gender">
        <jay-radio label="1">男</jay-radio>
        <jay-radio label="0">女</jay-radio>
      </jay-radio-group><br />
      <!-- <jay-radio label="1" v-model="gender">男</jay-radio> -->
      <!-- <jay-radio label="0" v-model="gender">女</jay-radio> -->
    </div>

    <!-- checkbox组件测试 -->
    <div class="checkbox-wrap">
      <jay-checkbox-group v-model="hobby">
        <jay-checkbox label="篮球"></jay-checkbox>
        <jay-checkbox label="画画"></jay-checkbox>
        <jay-checkbox label="跳舞"></jay-checkbox>
      </jay-checkbox-group>

      <jay-checkbox label="篮球" v-model="active3"></jay-checkbox>
      <jay-checkbox label="画画" v-model="active3"></jay-checkbox>
      <jay-checkbox label="跳舞" v-model="active3"></jay-checkbox>
    </div>
    <br />

    <!-- form、form-item组件测试 -->
    <div style="color:#aaa;">form、form-item组件测试：</div>
    <br />
    <jay-form :model="model" label-width="60px">
      <jay-form-item label="用户名">
        <jay-input placeholder="请输入用户名" v-model="model.username"></jay-input>
      </jay-form-item>
      <jay-form-item label="选择">
        <jay-switch v-model="model.active"></jay-switch>
      </jay-form-item>
    </jay-form>

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
  .Jay-button {
    margin-right: 20px;
  }
}
.input-wrap {
  margin: 20px 0;
  .Jay-input {
    margin-bottom: 15px;
  }
}
.radio-wrap {
  margin: 20px 0;
}
</style>
