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
