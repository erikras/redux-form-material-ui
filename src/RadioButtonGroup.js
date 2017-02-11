import { RadioButtonGroup } from 'material-ui/RadioButton'
import createComponent from './createComponent'
import mapError from './mapError'

const mapValueToValueSelected = ({ input: { ...inputProps }, ...props }, errorProp) => {
  if(inputProps.value == '' && props.defaultSelected != undefined) {
    return mapError({ ...props, input: { ...inputProps, valueSelected: props.defaultSelected } }, errorProp)
  } else {
    return mapError({ ...props, input: { ...inputProps, valueSelected: inputProps.value } }, errorProp)
  }
}

export default createComponent(RadioButtonGroup, mapValueToValueSelected)
