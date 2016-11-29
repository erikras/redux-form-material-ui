'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _expectJsx = require('expect-jsx');

var _expectJsx2 = _interopRequireDefault(_expectJsx);

var _TimePicker = require('material-ui/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _lodash = require('lodash.noop');

var _lodash2 = _interopRequireDefault(_lodash);

var _TimePicker3 = require('../TimePicker');

var _TimePicker4 = _interopRequireDefault(_TimePicker3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expect2.default.extend(_expectJsx2.default);

describe('TimePicker', function () {
  it('has a display name', function () {
    (0, _expect2.default)(_TimePicker4.default.displayName).toBe('ReduxFormMaterialUITimePicker');
  });

  it('renders a TimePicker with no value', function () {
    (0, _expect2.default)(new _TimePicker4.default({
      input: {
        name: 'myTimePicker',
        onChange: _lodash2.default
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TimePicker2.default, { name: 'myTimePicker', onChange: _lodash2.default, ref: 'component' }));
  });

  it('renders a TimePicker with a value', function () {
    var value = new Date('2016-01-01');
    (0, _expect2.default)(new _TimePicker4.default({
      input: {
        name: 'myTimePicker',
        onChange: _lodash2.default,
        value: value
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TimePicker2.default, { name: 'myTimePicker', onChange: _lodash2.default, value: value, ref: 'component' }));
  });

  it('renders a TimePicker with an error', function () {
    var value = new Date('2016-01-01');
    (0, _expect2.default)(new _TimePicker4.default({
      input: {
        name: 'myTimePicker',
        value: value
      },
      meta: {
        error: 'FooError',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_TimePicker2.default, { name: 'myTimePicker', value: value, errorText: 'FooError', onChange: _lodash2.default,
      ref: 'component' }));
  });

  it('maps onChange properly', function () {
    var onChange = (0, _expect.createSpy)();
    var first = new Date('August 22, 2016 10:15:00');
    var second = new Date('August 22, 2016 11:20:00');

    var dom = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(
      _MuiThemeProvider2.default,
      { muiTheme: (0, _getMuiTheme2.default)() },
      _react2.default.createElement(_TimePicker4.default, { input: { name: 'myTimePicker', onChange: onChange, value: first } })
    ));

    var timePicker = _reactAddonsTestUtils2.default.findRenderedComponentWithType(dom, _TimePicker2.default);
    (0, _expect2.default)(onChange).toNotHaveBeenCalled();
    timePicker.props.onChange(undefined, second);
    (0, _expect2.default)(onChange).toHaveBeenCalled().toHaveBeenCalledWith(second);
  });

  it('provides getRenderedComponent', function () {
    var dom = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(
      _MuiThemeProvider2.default,
      { muiTheme: (0, _getMuiTheme2.default)() },
      _react2.default.createElement(_TimePicker4.default, { input: { name: 'myTimePicker', onChange: _lodash2.default } })
    ));

    var element = _reactAddonsTestUtils2.default.findRenderedComponentWithType(dom, _TimePicker4.default);
    (0, _expect2.default)(element.getRenderedComponent).toBeA('function');
    (0, _expect2.default)(element.getRenderedComponent()).toExist();
  });
});