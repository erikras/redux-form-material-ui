import AutoComplete from 'material-ui/AutoComplete'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(AutoComplete, ({
  input: { onChange, onBlur, value, ...inputRest },
  onNewRequest,
  dataSourceConfig,
  dataSource,
  ...props
}) => ({
  ...mapError({ ...props, input: { onBlur() {onBlur()}, ...inputRest } }),
  dataSourceConfig,
  dataSource,
  searchText: dataSourceConfig && dataSource ? (dataSource.find((item) => item[dataSourceConfig.value] === value) || {})[dataSourceConfig.text] : value,
  onNewRequest: value => {
    onChange(
      typeof value === 'object' && dataSourceConfig
        ? value[dataSourceConfig.value]
        : value
    )
    if (onNewRequest) {
      onNewRequest(value)
    }
  },
  onUpdateInput: value => {
    if (!dataSourceConfig) {
      onChange(value)
    }
  }
}))
