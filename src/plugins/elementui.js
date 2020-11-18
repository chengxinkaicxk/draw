import Vue from 'vue'
import {
  Button,
  Row,
  Col,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Divider, Badge, Radio, Select, Option, DatePicker, Checkbox, Message,
  Form, FormItem, Table, TableColumn, Pagination, ButtonGroup, MessageBox,
  Autocomplete,
  Tabs,
  TabPane,
  Dialog,
  Switch,
  Tooltip,
  RadioGroup,
  Card,
  Popover
} from 'element-ui'

import 'element-ui/lib/theme-chalk/display.css'

Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Divider)
Vue.use(Badge)
Vue.use(Radio)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Checkbox)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Autocomplete)
Vue.use(Dialog)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(RadioGroup)
Vue.use(Card)
Vue.use(Popover)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
