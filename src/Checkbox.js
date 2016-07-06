import Checkbox from 'material-ui/Checkbox'
import createComponent from './createComponent'

export default createComponent(
  Checkbox,
  ({ input: { onChange, value, ...inputProps } }) => ({
    ...inputProps,
    checked: value ? true : false,
    onCheck: onChange
  })
)
