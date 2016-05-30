import { createElement } from 'react'
import TextField from 'material-ui/TextField'
import mapError from './mapError'

export default props => createElement(TextField, mapError(props))
