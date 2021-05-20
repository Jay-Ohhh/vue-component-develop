import Vue from 'vue'
import App from './App.vue'
// 引入字体图标
import './assets/fonts/font.scss'
// 按钮组件
import jayButton from './components/Button.vue'
// 对话框组件
import jayDialog from './components/Dialog.vue'
// input组件
import jayInput from './components/Input.vue'
// switch组件
import jaySwitch from './components/Switch.vue'
// radio组件
import jayRadio from './components/Radio.vue'
// radio-group组件
import jayRadioGroup from './components/RdioGroup.vue'
// checkbox组件
import jayCheckbox from './components/Checkbox.vue'
// checkbox-group组件
import jayCheckboxGroup from './components/CheckboxGroup.vue'
// checkbox-group组件
import jayForm from './components/Form.vue'
// checkbox-group组件
import jayFormItem from './components/FormItem.vue'

// 引入自己制作的组件库
import JayUI from 'jayvictor-ui/dist/jay-ui.umd.min.js'
import 'jayvictor-ui/dist/jay-ui.css'
Vue.use(JayUI)

Vue.component(jayButton.name, jayButton)
Vue.component(jayDialog.name, jayDialog)
Vue.component(jayInput.name, jayInput)
Vue.component(jaySwitch.name, jaySwitch)
Vue.component(jayRadio.name, jayRadio)
Vue.component(jayRadioGroup.name, jayRadioGroup)
Vue.component(jayCheckbox.name, jayCheckbox)
Vue.component(jayCheckboxGroup.name, jayCheckboxGroup)
Vue.component(jayForm.name, jayForm)
Vue.component(jayFormItem.name, jayFormItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
