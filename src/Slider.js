import { createElement } from 'react'
import Slider from 'material-ui/Slider'
import mapError from './mapError'

export default ({ onDragStart, ...props }) =>  // eslint-disable-line no-unused-vars
  createElement(Slider, {
    ...mapError(props, 'error'),
    onChange: (event, value) => props.onChange(value)
  })
