const mapError = ({
  hasHelperText = true,
  meta: { touched, error, warning } = {},
  input,
  ...props
}) => {
  const errorProps =
    touched && (error || warning)
      ? {
          ...props,
          ...input,
          error: Boolean(error || warning)
        }
      : { ...input, ...props }

  if (hasHelperText) {
    if (touched && (error || warning)) {
      errorProps.helperText = error || warning
    } else {
      errorProps.helperText = ' ' // Reserve vertical space for a future error/warning.
    }
  }

  return errorProps
}

export default mapError
