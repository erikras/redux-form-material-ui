import expect, { createSpy } from 'expect'
import expectJsx from 'expect-jsx'
import noop from 'lodash.noop'
import AutoComplete from 'material-ui/AutoComplete'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import ReduxFormMaterialUIAutoComplete from '../AutoComplete'

expect.extend(expectJsx)

describe('AutoComplete', () => {
  const dataSource = ['One', 'Two', 'Three']
  const onFocus = () => {}
  const onBlur = () => {}

  it('has a display name', () => {
    expect(ReduxFormMaterialUIAutoComplete.displayName).toBe(
      'ReduxFormMaterialUIAutoComplete'
    )
  })

  it('renders an AutoComplete', () => {
    expect(
      new ReduxFormMaterialUIAutoComplete({
        dataSource,
        input: {
          name: 'myAutoComplete',
          value: 'Foo',
          onFocus: onFocus,
          onBlur: onBlur
        }
      }).render()
    ).toEqualJSX(
      <AutoComplete
        name="myAutoComplete"
        onFocus={onFocus}
        onBlur={onBlur}
        dataSource={dataSource}
        searchText="Foo"
        onNewRequest={noop}
        ref="component"
      />
    )
  })

  it('renders an AutoComplete with no error when not touched', () => {
    expect(
      new ReduxFormMaterialUIAutoComplete({
        dataSource,
        input: {
          name: 'myAutoComplete',
          value: 'Foo',
          onFocus: onFocus,
          onBlur: onBlur
        },
        meta: {
          error: 'FooError'
        }
      }).render()
    ).toEqualJSX(
      <AutoComplete
        name="myAutoComplete"
        onBlur={onBlur}
        onFocus={onFocus}
        dataSource={dataSource}
        searchText="Foo"
        onNewRequest={noop}
        ref="component"
      />
    )
  })

  it('renders an AutoComplete with an error', () => {
    expect(
      new ReduxFormMaterialUIAutoComplete({
        dataSource,
        input: {
          name: 'myAutoComplete',
          value: 'Foo',
          onFocus: onFocus,
          onBlur: onBlur
        },
        meta: {
          error: 'FooError',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <AutoComplete
        name="myAutoComplete"
        onBlur={onBlur}
        onFocus={onFocus}
        dataSource={dataSource}
        searchText="Foo"
        errorText="FooError"
        onNewRequest={noop}
        ref="component"
      />
    )
  })

  it('renders an AutoComplete with no warning when not touched', () => {
    expect(
      new ReduxFormMaterialUIAutoComplete({
        dataSource,
        input: {
          name: 'myAutoComplete',
          value: 'Foo'
        },
        meta: {
          warning: 'FooWarning'
        }
      }).render()
    ).toEqualJSX(
      <AutoComplete
        name="myAutoComplete"
        onBlur={onBlur}
        dataSource={dataSource}
        searchText="Foo"
        onNewRequest={noop}
        ref="component"
      />
    )
  })

  it('renders an AutoComplete with an warning', () => {
    expect(
      new ReduxFormMaterialUIAutoComplete({
        dataSource,
        input: {
          name: 'myAutoComplete',
          value: 'Foo'
        },
        meta: {
          warning: 'FooWarning',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <AutoComplete
        name="myAutoComplete"
        onBlur={onBlur}
        dataSource={dataSource}
        searchText="Foo"
        errorText="FooWarning"
        onNewRequest={noop}
        ref="component"
      />
    )
  })

  it('maps onNewRequest properly', () => {
    const onChange = createSpy()

    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUIAutoComplete
          dataSource={dataSource}
          input={{ onChange, value: 'Foo' }}
        />
      </MuiThemeProvider>
    )

    const autocomplete = TestUtils.findRenderedComponentWithType(
      dom,
      AutoComplete
    )
    expect(onChange).toNotHaveBeenCalled()
    autocomplete.props.onNewRequest('TheValue')
    expect(onChange).toHaveBeenCalled().toHaveBeenCalledWith('TheValue')
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUIAutoComplete
          dataSource={dataSource}
          input={{ name: 'myAutoComplete' }}
        />
      </MuiThemeProvider>
    )

    const element = TestUtils.findRenderedComponentWithType(
      dom,
      ReduxFormMaterialUIAutoComplete
    )
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })

  it('calls onBlur without event', () => {
      const onBlurSpy = createSpy()
      const testEvent = {}

      const dom = TestUtils.renderIntoDocument(
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <ReduxFormMaterialUIAutoComplete
            dataSource={dataSource}
            input={{ onBlur: onBlurSpy, value: 'Foo' }}
          />
        </MuiThemeProvider>
      )

      const autocomplete = TestUtils.findRenderedComponentWithType(
        dom,
        AutoComplete
      )
      expect(onBlurSpy).toNotHaveBeenCalled()
      autocomplete.props.onBlur(testEvent)
      expect(onBlurSpy).toHaveBeenCalled().toHaveBeenCalledWith()
  })
})
