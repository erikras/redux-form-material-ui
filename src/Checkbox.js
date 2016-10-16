import Checkbox from 'material-ui/Checkbox'
import createComponent from './createComponent'

export default createComponent(
  Checkbox,
  ({
    input: {
      onChange,
      value,
      ...inputProps
    },
    meta, // eslint-disable-line no-unused-vars
    onCheck,
    ...props
  }) => ({
    ...inputProps,
    ...props,
    checked: value ? true : false,
    onCheck: (event, isInputChecked) => {
      if(onCheck && typeof onCheck === 'function') {
        onCheck(isInputChecked)
      }
      else {
        onChange(isInputChecked)        
      }
    }
  })
)
