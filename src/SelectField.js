import SelectField from 'material-ui/SelectField'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  SelectField,
  ({ input: { onChange, ...inputProps }, ...props }) => ({
    ...mapError(props),
    ...inputProps,
    onChange: (event, index, value) => onChange(value)
  }))
