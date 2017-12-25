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
        helpertext: error || warning
      }
    : { ...input, ...props })

export default mapError
