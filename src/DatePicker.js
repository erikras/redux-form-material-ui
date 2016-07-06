import DatePicker from 'material-ui/DatePicker'
import createComponent from './createComponent'

export default createComponent(
  DatePicker,
  ({ input: { onChange, ...inputProps } }) => ({
    ...inputProps,
    onChange: (event, value) => onChange(value)
  })
)
