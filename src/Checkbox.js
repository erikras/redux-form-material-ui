import Checkbox from 'material-ui/Checkbox'
import createComponent from './createComponent'

export default createComponent(Checkbox, ({
  input: { onChange, value, ...inputProps },
  meta,
  onChange: ignoredOnChange,
  defaultChecked,
  ...props
}) => ({
  ...inputProps,
  ...props,
  checked: value ? true : false,
  onChange: (event, isInputChecked) => {
    onChange(isInputChecked)
  }
}))
