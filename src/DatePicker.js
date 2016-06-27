import { createElement } from 'react'
import DatePicker from 'material-ui/DatePicker'

export default (props) =>  // eslint-disable-line no-unused-vars
  createElement(DatePicker, {
    ...props,
    onChange: (event, value) => props.onChange(value)
  })
