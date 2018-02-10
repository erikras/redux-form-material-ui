import ChipInput from 'material-ui-chip-input';
import createComponent from './createComponent';
import mapError from './mapError';

export default createComponent(ChipInput, ({
	defaultValue,
	...props
})) => ({
	...mapError(props)
})