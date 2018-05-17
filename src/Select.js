import Select from '@material-ui/core/Select';
import createComponent from './createComponent';
import mapError from './mapError';

export default createComponent(
  Select,
  ({
    input: { onChange, value, onBlur, ...inputProps },
    onChange: onChangeFromField,
    defaultValue,
    ...props
  }) => ({
    ...mapError({ ...props, hasHelperText: false }),
    ...inputProps,
    value: value,
    onChange: event => {
      onChange(event.target.value);
      if (onChangeFromField) {
        onChangeFromField(event.target.value);
      }
    },
    onBlur: () => onBlur(value)
  })
);
