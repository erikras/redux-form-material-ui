import { createElement } from 'react'
import SelectField from 'material-ui/SelectField'
import mapError from './mapError'

export default props => createElement(SelectField, {
  ...mapError(props),
  onChange: (event, index, value) => props.onChange(value)
})
