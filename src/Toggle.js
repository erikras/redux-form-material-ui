import { createElement } from 'react'
import Toggle from 'material-ui/Toggle'

export default ({ onChange, value, ...props }) => createElement(Toggle, {
  ...props,
  toggled: value ? true : false,
  onToggle: onChange
})
