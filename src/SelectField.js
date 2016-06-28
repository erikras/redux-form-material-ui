import SelectField from 'material-ui/SelectField'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  SelectField,
  ({ onChange, ...props }) => ({
    ...mapError(props),
    onChange: (event, index, value) => onChange(value)
  }))
