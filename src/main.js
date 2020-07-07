import Vue from 'vue'
import App from './App.vue'
// 引入字体图标
import './assets/fonts/font.scss'
// 按钮组件
import hmButton from './components/Button.vue'
// 对话框组件
import hmDialog from './components/Dialog.vue'
// input组件
import hmInput from './components/Input.vue'
// switch组件
import hmSwitch from './components/Switch.vue'
// radio组件
import hmRadio from './components/Radio.vue'
// radio-group组件
import hmRadioGroup from './components/RdioGroup.vue'
// checkbox组件
import hmCheckbox from './components/Checkbox.vue'
// checkbox-group组件
import hmCheckboxGroup from './components/CheckboxGroup.vue'
// checkbox-group组件
import hmForm from './components/Form.vue'
// checkbox-group组件
import hmFormItem from './components/FormItem.vue'

// 引入自己制作的组件库
import JayUI from 'jayvictor-ui/dist/jay-ui.umd.min.js'
import 'jayvictor-ui/dist/jay-ui.css'
Vue.use(JayUI)

Vue.component(hmButton.name, hmButton)
Vue.component(hmDialog.name, hmDialog)
Vue.component(hmInput.name, hmInput)
Vue.component(hmSwitch.name, hmSwitch)
Vue.component(hmRadio.name, hmRadio)
Vue.component(hmRadioGroup.name, hmRadioGroup)
Vue.component(hmCheckbox.name, hmCheckbox)
Vue.component(hmCheckboxGroup.name, hmCheckboxGroup)
Vue.component(hmForm.name, hmForm)
Vue.component(hmFormItem.name, hmFormItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
