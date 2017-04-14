import Toggle from 'material-ui/Toggle'
import createComponent from './createComponent'

export default createComponent(
  Toggle,
  ({
    input: {
      onChange,
      ...inputProps
    },
    meta, // eslint-disable-line no-unused-vars
    ...props
  }) => ({
    ...inputProps,
    ...props,
    onToggle: onChange
  })
)
