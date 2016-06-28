import Toggle from 'material-ui/Toggle'
import createComponent from './createComponent'

export default createComponent(
  Toggle,
  ({ onChange, value, ...props }) => ({
    ...props,
    toggled: value ? true : false,
    onToggle: onChange
  })
)
