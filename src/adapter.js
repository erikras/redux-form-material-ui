import React from 'react'
import { RadioButtonGroup } from 'material-ui/RadioButton'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import Slider from 'material-ui/Slider'
import Toggle from 'material-ui/Toggle'
import SelectField from 'material-ui/SelectField'

const mapError = ({ touched, error, ...props }, errorProp = 'errorText') =>
  touched && error ? { ...props, [errorProp]: error } : props

const components = {

  TextField: props => React.createElement(TextField, mapError(props)),

  RadioButtonGroup: props => React.createElement(RadioButtonGroup, mapError(props)),

  Checkbox: ({ onChange, value, ...props }) => React.createElement(Checkbox, {
    ...props,
    checked: value ? true : false,
    onCheck: onChange
  }),

  Slider: ({ onDragStart, ...props }) => React.createElement(Slider, {  // eslint-disable-line no-unused-vars
    ...mapError(props, 'error'),
    onChange: (event, value) => props.onChange(value)
  }),

  Toggle: ({ onChange, value, ...props }) => React.createElement(Toggle, {
    ...props,
    toggled: value ? true : false,
    onToggle: onChange
  }),

  SelectField: props => React.createElement(SelectField, {
    ...mapError(props),
    onChange: (event, index, value) => props.onChange(value)
  })

}

const adapter = (key, props) => {
  const component = components[ key ]
  if (component) {
    return component(props)
  }
}

export default adapter
