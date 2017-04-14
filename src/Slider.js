import Slider from 'material-ui/Slider';
import createComponent from './createComponent';
import mapError from './mapError';

export default createComponent(Slider, ({
  input: {onDragStart, onChange, ...inputProps},
  onChange: onChangeFromField,
  ...props
}) => ({ // eslint-disable-line no-unused-vars
  ...mapError({...props, input: inputProps}, 'error'),
  onChange: (event, value) => {
    onChange(value);
    if (onChangeFromField) {
      onChangeFromField(value);
    }
  },
}));
