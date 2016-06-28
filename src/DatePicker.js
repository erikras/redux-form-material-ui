import DatePicker from 'material-ui/DatePicker'
import createComponent from './createComponent'

export default createComponent(
  DatePicker,
  ({ onChange, ...props }) => ({
    ...props,
    onChange: (event, value) => onChange(value)
  })
)
