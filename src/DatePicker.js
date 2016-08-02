import DatePicker from 'material-ui/DatePicker'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  DatePicker,
  ({
    input: {
      onBlur, // eslint-disable-line no-unused-vars
      onChange,
      ...inputProps
    },
    ...props
  }) => ({
    ...inputProps,
    ...mapError(props),
    onChange: (event, value) => onChange(value)
  })
)
