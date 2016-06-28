import Checkbox from 'material-ui/Checkbox'
import createComponent from './createComponent'

export default createComponent(
  Checkbox,
  ({ onChange, value, ...props }) => ({
    ...props,
    checked: value ? true : false,
    onCheck: onChange
  })
)
