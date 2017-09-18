import Select from 'material-ui/Select'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(Select, ({ defaultValue, ...props }) =>
  mapError(props)
)
