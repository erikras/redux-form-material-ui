import AutoComplete from 'material-ui/AutoComplete'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(AutoComplete, ({
  input: { onChange, value },
  onNewRequest,
  dataSourceConfig,
  dataSource,
  ...props
}) => {
  const dataSourceValue = dataSourceConfig && dataSource.find(data => (
    data[dataSourceConfig.value] == value));
  return {
  ...mapError(props),
    dataSourceConfig,
    dataSource,
    searchText: dataSourceValue ? dataSourceValue[dataSourceConfig.text] : value,
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
      onChange(value)
    }
  };
})
