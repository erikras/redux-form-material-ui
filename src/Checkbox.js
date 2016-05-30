import { createElement } from 'react'
import Checkbox from 'material-ui/Checkbox'

export default ({ onChange, value, ...props }) => createElement(Checkbox, {
  ...props,
  checked: value ? true : false,
  onCheck: onChange
})
