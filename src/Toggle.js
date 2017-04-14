import Toggle from 'material-ui/Toggle'
import createComponent from './createComponent'

export default createComponent(Toggle, ({
  input: { onChange, value, ...inputProps },
  meta,
  ...props
}) => ({
  ...inputProps,
  ...props,
  onToggle: onChange,
  toggled: !!value
}))
