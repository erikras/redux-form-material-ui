'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _expectJsx = require('expect-jsx');

var _expectJsx2 = _interopRequireDefault(_expectJsx);

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _lodash = require('lodash.noop');

var _lodash2 = _interopRequireDefault(_lodash);

var _AutoComplete3 = require('../AutoComplete');

var _AutoComplete4 = _interopRequireDefault(_AutoComplete3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expect2.default.extend(_expectJsx2.default);

describe('AutoComplete', function () {

  var dataSource = ['One', 'Two', 'Three'];

  it('has a display name', function () {
    (0, _expect2.default)(_AutoComplete4.default.displayName).toBe('ReduxFormMaterialUIAutoComplete');
  });

  it('renders an AutoComplete', function () {
    (0, _expect2.default)(new _AutoComplete4.default({
      dataSource: dataSource,
      input: {
        name: 'myAutoComplete',
        value: 'Foo'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_AutoComplete2.default, { dataSource: dataSource, name: 'myAutoComplete', searchText: 'Foo',
      onNewRequest: _lodash2.default, ref: 'component' }));
  });

  it('renders an AutoComplete with no error when not touched', function () {
    (0, _expect2.default)(new _AutoComplete4.default({
      dataSource: dataSource,
      input: {
        name: 'myAutoComplete',
        value: 'Foo'
      },
      meta: {
        error: 'FooError'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_AutoComplete2.default, { dataSource: dataSource, name: 'myAutoComplete', searchText: 'Foo',
      onNewRequest: _lodash2.default, ref: 'component' }));
  });

  it('renders an AutoComplete with an error', function () {
    (0, _expect2.default)(new _AutoComplete4.default({
      dataSource: dataSource,
      input: {
        name: 'myAutoComplete',
        value: 'Foo'
      },
      meta: {
        error: 'FooError',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_AutoComplete2.default, { dataSource: dataSource, name: 'myAutoComplete', searchText: 'Foo',
      errorText: 'FooError', onNewRequest: _lodash2.default, ref: 'component' }));
  });

  it('maps onNewRequest properly', function () {
    var onChange = (0, _expect.createSpy)();

    var dom = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(
      _MuiThemeProvider2.default,
      { muiTheme: (0, _getMuiTheme2.default)() },
      _react2.default.createElement(_AutoComplete4.default, { dataSource: dataSource, name: 'myAutoComplete',
        input: { onChange: onChange, value: 'Foo' } })
    ));

    var autocomplete = _reactAddonsTestUtils2.default.findRenderedComponentWithType(dom, _AutoComplete2.default);
    (0, _expect2.default)(onChange).toNotHaveBeenCalled();
    autocomplete.props.onNewRequest('TheValue');
    (0, _expect2.default)(onChange).toHaveBeenCalled().toHaveBeenCalledWith('TheValue');
  });

  it('provides getRenderedComponent', function () {
    var dom = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(
      _MuiThemeProvider2.default,
      { muiTheme: (0, _getMuiTheme2.default)() },
      _react2.default.createElement(_AutoComplete4.default, { dataSource: dataSource,
        input: { name: 'myAutoComplete' } })
    ));

    var element = _reactAddonsTestUtils2.default.findRenderedComponentWithType(dom, _AutoComplete4.default);
    (0, _expect2.default)(element.getRenderedComponent).toBeA('function');
    (0, _expect2.default)(element.getRenderedComponent()).toExist();
  });
});