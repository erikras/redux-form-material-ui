import AutoComplete from 'material-ui/AutoComplete'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  AutoComplete,
  ({ input: { onChange, ...inputProps }, ...props }) => ({
    ...mapError(props),
    ...inputProps,
    onBlur: () => {},
    onNewRequest: value => onChange(
      typeof value === 'object' ? value[props.dataSourceConfig.value] : value
    )
  }))
