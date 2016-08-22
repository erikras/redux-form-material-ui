import TimePicker from 'material-ui/TimePicker'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  TimePicker,
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
