import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJsx from 'expect-jsx'
import TextField from 'material-ui/TextField'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReduxFormMaterialUITextField from '../TextField'

expect.extend(expectJsx)

describe('TextField', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUITextField.displayName)
      .toBe('ReduxFormMaterialUITextField')
  })

  it('renders a TextField', () => {
    expect(new ReduxFormMaterialUITextField({
      input: {
        name: 'myText',
        value: 'Foo'
      }
    }).render())
      .toEqualJSX(<TextField name="myText" value="Foo" ref="component"/>)
  })

  it('renders a TextField with no error when not touched', () => {
    expect(new ReduxFormMaterialUITextField({
      input: {
        name: 'myText',
        value: 'Foo'
      },
      meta: {
        error: 'FooError'
      }
    }).render())
      .toEqualJSX(<TextField name="myText" value="Foo" ref="component"/>)
  })

  it('renders a TextField with an error', () => {
    expect(new ReduxFormMaterialUITextField({
      input: {
        name: 'myText',
        value: 'Foo'
      },
      meta: {
        error: 'FooError',
        touched: true
      }
    }).render())
      .toEqualJSX(<TextField name="myText" value="Foo" errorText="FooError" ref="component"/>)
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUITextField name="myText"/>
      </MuiThemeProvider>
    )

    const element =
      TestUtils.findRenderedComponentWithType(dom, ReduxFormMaterialUITextField)
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })

  it('focuses when field gets active prop', () => {

  })
})
