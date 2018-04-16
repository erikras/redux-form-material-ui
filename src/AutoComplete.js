import AutoComplete from 'material-ui/AutoComplete'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(AutoComplete, ({
  input: { onChange, value, onUpdateInput },
  onNewRequest,
  dataSourceConfig,
  dataSource,
  ...props
}) => ({
  ...mapError(props),
  dataSourceConfig,
  dataSource,
  searchText: dataSourceConfig && dataSource ? (dataSource.find((item) => item[dataSourceConfig.value] === value) || {})[dataSourceConfig.text] : value,
  onNewRequest: (value, index) => {
    onChange(
      typeof value === 'object' && dataSourceConfig
        ? value[dataSourceConfig.value]
        : value
    )
    if (onNewRequest) {
      onNewRequest(value, index)
    }
  },
  onUpdateInput: value => {
      onUpdateInput(value)
  }
}))
