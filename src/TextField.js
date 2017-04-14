import TextField from 'material-ui/TextField'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(TextField, ({ defaultValue, ...props }) =>
  mapError(props)
)
