import Slider from 'material-ui/Slider'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  Slider,
  ({ onDragStart, ...props }) =>  // eslint-disable-line no-unused-vars
    ({
      ...mapError(props, 'error'),
      onChange: (event, value) => props.onChange(value)
    })
)
