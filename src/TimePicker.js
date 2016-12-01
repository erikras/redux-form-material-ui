import TimePicker from 'material-ui/TimePicker'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  TimePicker,
  ({
    input: {
      onBlur, // eslint-disable-line no-unused-vars
      ...inputProps
    },
    onChange: onChangeFunc,
    ...props
  }) => ({
    ...inputProps,
    ...mapError(props),
    onChange: (event, value) => {
      inputProps.onChange(value)
      if(onChangeFunc && typeof onChangeFunc === 'function') {
        onChangeFunc(value)
      }
    }
  })
)
