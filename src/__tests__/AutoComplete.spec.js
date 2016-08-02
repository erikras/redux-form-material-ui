import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect, { createSpy } from 'expect'
import expectJsx from 'expect-jsx'
import AutoComplete from 'material-ui/AutoComplete'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import noop from 'lodash.noop'
import ReduxFormMaterialUIAutoComplete from '../AutoComplete'

expect.extend(expectJsx)

describe('AutoComplete', () => {

  const dataSource = [
    'One',
    'Two',
    'Three'
  ]

  it('has a display name', () => {
    expect(ReduxFormMaterialUIAutoComplete.displayName)
      .toBe('ReduxFormMaterialUIAutoComplete')
  })

  it('renders an AutoComplete', () => {
    expect(new ReduxFormMaterialUIAutoComplete({
      dataSource,
      input: {
        name: 'myAutoComplete',
        value: 'Foo'
      }
    }).render())
      .toEqualJSX(<AutoComplete dataSource={dataSource} name="myAutoComplete" searchText="Foo"
        onNewRequest={noop} ref="component"/>)
  })

  it('renders an AutoComplete with no error when not touched', () => {
    expect(new ReduxFormMaterialUIAutoComplete({
      dataSource,
      input: {
        name: 'myAutoComplete',
        value: 'Foo'
      },
      meta: {
        error: 'FooError'
      }
    }).render())
      .toEqualJSX(<AutoComplete dataSource={dataSource} name="myAutoComplete" searchText="Foo"
        onNewRequest={noop} ref="component"/>)
  })

  it('renders an AutoComplete with an error', () => {
    expect(new ReduxFormMaterialUIAutoComplete({
      dataSource,
      input: {
        name: 'myAutoComplete',
        value: 'Foo'
      },
      meta: {
        error: 'FooError',
        touched: true
      }
    }).render())
      .toEqualJSX(<AutoComplete dataSource={dataSource} name="myAutoComplete" searchText="Foo"
        errorText="FooError" onNewRequest={noop} ref="component"/>)
  })

  it('maps onNewRequest properly', () => {
    const onChange = createSpy()

    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUIAutoComplete dataSource={dataSource} name="myAutoComplete"
          input={{ onChange, value: 'Foo' }}/>
      </MuiThemeProvider>
    )

    const autocomplete = TestUtils.findRenderedComponentWithType(dom, AutoComplete)
    expect(onChange).toNotHaveBeenCalled()
    autocomplete.props.onNewRequest('TheValue')
    expect(onChange)
      .toHaveBeenCalled()
      .toHaveBeenCalledWith('TheValue')
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUIAutoComplete dataSource={dataSource}
          input={{ name: 'myAutoComplete' }}/>
      </MuiThemeProvider>
    )

    const element =
      TestUtils.findRenderedComponentWithType(dom, ReduxFormMaterialUIAutoComplete)
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })
})

