import { createElement } from 'react'
import { RadioButtonGroup } from 'material-ui/RadioButton'
import mapError from './mapError'

export default props => createElement(RadioButtonGroup, mapError(props))
