import SelectField from 'material-ui/SelectField'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  SelectField,
  ({ input: { ...inputProps }, onChange, ...props }) => ({
    ...mapError(props),
    ...inputProps,
    onChange: (event, index, value) => {
      if(onChange && typeof onChange === 'function') {
        onChange(index, value)
      }
      else {
        inputProps.onChange(value)
      }
    }
  }))
