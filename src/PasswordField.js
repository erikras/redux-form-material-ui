import Password from 'material-ui-password-field';
import createComponent from './createComponent';
import mapError from './mapError';

export default createComponent(Password, ({
	defaultValue,
	...props
})) => ({
	...mapError(props)
})