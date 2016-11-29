'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _expectJsx = require('expect-jsx');

var _expectJsx2 = _interopRequireDefault(_expectJsx);

var _RadioButton = require('material-ui/RadioButton');

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _RadioButtonGroup = require('../RadioButtonGroup');

var _RadioButtonGroup2 = _interopRequireDefault(_RadioButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expect2.default.extend(_expectJsx2.default);

describe('RadioButtonGroup', function () {
  it('has a display name', function () {
    (0, _expect2.default)(_RadioButtonGroup2.default.displayName).toBe('ReduxFormMaterialUIRadioButtonGroup');
  });

  it('renders a RadioButtonGroup', function () {
    (0, _expect2.default)(new _RadioButtonGroup2.default({
      input: {
        name: 'myRadio',
        value: 'Foo'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_RadioButton.RadioButtonGroup, { name: 'myRadio', value: 'Foo', valueSelected: 'Foo', ref: 'component' }));
  });

  it('renders a RadioButtonGroup with no error when not touched', function () {
    (0, _expect2.default)(new _RadioButtonGroup2.default({
      input: {
        name: 'myRadio',
        value: 'Foo'
      },
      meta: {
        error: 'FooError'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_RadioButton.RadioButtonGroup, { name: 'myRadio', value: 'Foo', valueSelected: 'Foo', ref: 'component' }));
  });

  it('renders a RadioButtonGroup with an error', function () {
    (0, _expect2.default)(new _RadioButtonGroup2.default({
      input: {
        name: 'myRadio',
        value: 'Foo'
      },
      meta: {
        error: 'FooError',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_RadioButton.RadioButtonGroup, { name: 'myRadio', value: 'Foo', valueSelected: 'Foo', errorText: 'FooError',
      ref: 'component' }));
  });

  it('provides getRenderedComponent', function () {
    var dom = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(
      _MuiThemeProvider2.default,
      { muiTheme: (0, _getMuiTheme2.default)() },
      _react2.default.createElement(_RadioButtonGroup2.default, { name: 'myRadio' })
    ));

    var element = _reactAddonsTestUtils2.default.findRenderedComponentWithType(dom, _RadioButtonGroup2.default);
    (0, _expect2.default)(element.getRenderedComponent).toBeA('function');
    (0, _expect2.default)(element.getRenderedComponent()).toExist();
  });
});