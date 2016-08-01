import AutoComplete from 'material-ui/AutoComplete'
import noop from 'lodash.noop'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(
  AutoComplete,
  ({ input: { onChange, value, ...inputProps }, ...props }) => ({
    ...mapError(props),
    ...inputProps,
    searchText: value,
    onChange: noop,
    onNewRequest: value => onChange(value)
  }))
