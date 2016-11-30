import AutoComplete from 'material-ui/AutoComplete'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  AutoComplete,
  ({ input: { value, ...inputProps }, onNewRequest, dataSourceConfig, ...props }) => ({
    ...mapError(props),
    ...inputProps,
    searchText: dataSourceConfig ? value[dataSourceConfig.text] : value,
    onNewRequest: value => {
      inputProps.onChange(value)
      if(onNewRequest && typeof onNewRequest === 'function') {
        onNewRequest(value)
      }
    }
  }))
