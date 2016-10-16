import DatePicker from 'material-ui/DatePicker'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  DatePicker,
  ({
    input: {
      onBlur, // eslint-disable-line no-unused-vars
      ...inputProps
    },
    onChange,
    ...props
  }) => ({
    ...inputProps,
    ...mapError(props),
    onChange: (event, value) => {
      if(onChange && typeof onChange === 'function') {
        onChange(value)
      }
      else {
        inputProps.onChange(value)        
      }
    }
  })
)
