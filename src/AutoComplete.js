import AutoComplete from 'material-ui/AutoComplete';
import createComponent from './createComponent';
import mapError from './mapError';

export default createComponent(AutoComplete, ({
  input: {onChange, value},
  onNewRequest,
  dataSourceConfig,
  ...props
}) => ({
  ...mapError(props),
  dataSourceConfig,
  searchText: dataSourceConfig ? value[dataSourceConfig.text] : value,
  onNewRequest: value => {
    onChange(
      typeof value === 'object' && dataSourceConfig
        ? value[dataSourceConfig.value]
        : value,
    );
    if (onNewRequest) {
      onNewRequest(value);
    }
  },
}));
