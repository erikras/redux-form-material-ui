import TextField from 'material-ui/TextField'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(TextField, ({
  input: { ...inputProps },
  defaultValue,
  ...props
}) => {
  if (inputProps.value === '') {
    inputProps.value = defaultValue || inputProps.value
  }
  return {
    ...inputProps,
    ...mapError(props)
  }
})
