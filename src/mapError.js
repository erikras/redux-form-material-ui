const mapError = (
  {
    meta: { touched, error, warning } = {},
    input,
    ...props
  }
) =>
  (touched && (error || warning)
    ? {
        ...props,
        ...input,
        error: Boolean(error || warning),
        helperText: error || warning
      }
    : { ...input, ...props })

export default mapError
