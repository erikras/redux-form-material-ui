import AutoComplete from 'material-ui/AutoComplete'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  AutoComplete,
  ({ input: { value, ...inputProps }, onNewRequest: onNewRequestFunc, dataSourceConfig, ...props }) => ({
    ...mapError(props),
    ...inputProps,
    searchText: dataSourceConfig ? value[dataSourceConfig.text] : value,
    onNewRequest: value => {
      inputProps.onChange(
        typeof value === 'object' ? value[props.dataSourceConfig.value] : value
      )
      if(onNewRequestFunc && typeof onNewRequestFunc === 'function') {
        onNewRequestFunc(value)
      }
    },
    onUpdateInput: value => {
      inputProps.onChange(value)
    },
    onBlur: () => {}
  }))
