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
          onBlur: noop
        }
      }).render()
    ).toEqualJSX(
      <AutoComplete
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
          onBlur: noop
        },
        meta: {
          error: 'FooError'
        }
      }).render()
    ).toEqualJSX(
      <AutoComplete
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
          onBlur: noop
        },
        meta: {
          error: 'FooError',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <AutoComplete
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
    const onNewRequest = createSpy()

    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUIAutoComplete
          dataSource={dataSource}
          onNewRequest={onNewRequest}
          input={{ onChange, value: 'Foo' }}
        />
      </MuiThemeProvider>
    )

    const autocomplete = TestUtils.findRenderedComponentWithType(
      dom,
      AutoComplete
    )
    expect(onChange).toNotHaveBeenCalled()
    autocomplete.props.onNewRequest('TheValue', -1)
    expect(onNewRequest).toHaveBeenCalled().toHaveBeenCalledWith('TheValue', -1)
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
})
