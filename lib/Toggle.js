'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _createComponent = require('./createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _createComponent2.default)(_Toggle2.default, function (_ref) {
  var _ref$input = _ref.input,
      onChange = _ref$input.onChange,
      value = _ref$input.value,
      inputProps = _objectWithoutProperties(_ref$input, ['onChange', 'value']),
      meta = _ref.meta,
      props = _objectWithoutProperties(_ref, ['input', 'meta']);

  return _extends({}, inputProps, props, {
    toggled: value ? true : false,
    onToggle: onChange
  });
});