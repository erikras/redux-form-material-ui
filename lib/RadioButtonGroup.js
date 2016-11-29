'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _RadioButton = require('material-ui/RadioButton');

var _createComponent = require('./createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _mapError = require('./mapError');

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapValueToValueSelected = function mapValueToValueSelected(_ref, errorProp) {
  var inputProps = _objectWithoutProperties(_ref.input, []),
      props = _objectWithoutProperties(_ref, ['input']);

  return (0, _mapError2.default)(_extends({}, props, { input: _extends({}, inputProps, { valueSelected: inputProps.value }) }), errorProp);
};

exports.default = (0, _createComponent2.default)(_RadioButton.RadioButtonGroup, mapValueToValueSelected);