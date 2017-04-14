const mapError = (
  {
    meta: { touched, error, warning } = {},
    input: { ...inputProps },
    ...props
  },
  errorProp = 'errorText'
) =>
  (touched && (error || warning)
    ? {
        ...props,
        ...inputProps,
        [errorProp]: error || warning
      }
    : { ...inputProps, ...props })

export default mapError
