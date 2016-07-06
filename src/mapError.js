const mapError = ({ touched, error, input: { ...inputProps }, ...props }, errorProp = 'errorText') =>
  touched && error ? { ...props, ...inputProps, [errorProp]: error } : { ...inputProps, ...props }

export default mapError
