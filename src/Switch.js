import Switch from '@material-ui/core/Switch'
import createComponent from './createComponent'

export default createComponent(Switch, ({
  input: { onChange, value, ...inputProps },
  checked,
  meta,
  ...props
}) => ({
  ...inputProps,
  ...props,
  onChange,
  checked: !!value
}))
