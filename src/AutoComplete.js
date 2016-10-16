import AutoComplete from 'material-ui/AutoComplete'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  AutoComplete,
  ({ input: { onChange, value, ...inputProps }, onNewRequest, ...props }) => ({
    ...mapError(props),
    ...inputProps,
    searchText: value,
    onNewRequest: value => {
      if(onNewRequest && typeof onNewRequest === 'function') {
        onNewRequest(value)
      }
      else {
        onChange(value)
      }
    }
  }))
