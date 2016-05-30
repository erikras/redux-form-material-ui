const mapError = ({ touched, error, ...props }, errorProp = 'errorText') =>
  touched && error ? { ...props, [errorProp]: error } : props

export default mapError
