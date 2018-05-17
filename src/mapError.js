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

  if (touched && hasHelperText && (error || warning)) {
    errorProps.helperText = error || warning
  }

  return errorProps
}

export default mapError
