import Toggle from 'material-ui/Toggle';
import createComponent from './createComponent';

export default createComponent(Toggle, ({
  input: {onChange, ...inputProps},
  meta,
  ...props
}) => ({
  ...inputProps,
  ...props,
  onToggle: onChange,
}));
