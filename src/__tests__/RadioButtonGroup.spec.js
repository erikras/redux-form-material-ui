import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJsx from 'expect-jsx'
import { RadioButtonGroup } from 'material-ui/RadioButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReduxFormMaterialUIRadioButtonGroup from '../RadioButtonGroup'

expect.extend(expectJsx)

describe('RadioButtonGroup', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUIRadioButtonGroup.displayName)
      .toBe('ReduxFormMaterialUIRadioButtonGroup')
  })

  it('renders a RadioButtonGroup', () => {
    expect(new ReduxFormMaterialUIRadioButtonGroup({
      input: {
        name: 'myRadio',
        value: 'Foo'
      }
    }).render())
      .toEqualJSX(<RadioButtonGroup name="myRadio" value="Foo" ref="component"/>)
  })

  it('renders a RadioButtonGroup with no error when not touched', () => {
    expect(new ReduxFormMaterialUIRadioButtonGroup({
      input: {
        name: 'myRadio',
        value: 'Foo'
      },
      meta: {
        error: 'FooError'
      }
    }).render())
      .toEqualJSX(<RadioButtonGroup name="myRadio" value="Foo" ref="component"/>)
  })

  it('renders a RadioButtonGroup with an error', () => {
    expect(new ReduxFormMaterialUIRadioButtonGroup({
      input: {
        name: 'myRadio',
        value: 'Foo'
      },
      meta: {
        error: 'FooError',
        touched: true
      }
    }).render())
      .toEqualJSX(<RadioButtonGroup name="myRadio" value="Foo" errorText="FooError"
        ref="component"/>)
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUIRadioButtonGroup name="myRadio"/>
      </MuiThemeProvider>
    )

    const element =
      TestUtils.findRenderedComponentWithType(dom, ReduxFormMaterialUIRadioButtonGroup)
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })
})
