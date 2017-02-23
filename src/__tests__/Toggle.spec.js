import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJsx from 'expect-jsx'
import Toggle from 'material-ui/Toggle'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import noop from 'lodash.noop'
import ReduxFormMaterialUIToggle from '../Toggle'

expect.extend(expectJsx)

describe('Toggle', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUIToggle.displayName)
      .toBe('ReduxFormMaterialUIToggle')
  })

  it('renders an untoggled Toggle', () => {
    expect(new ReduxFormMaterialUIToggle({
      input: {
        name: 'myToggle',
        onChange: noop
      },
      defaultToggled: false
    }).render())
      .toEqualJSX(<Toggle name="myToggle" onToggle={noop} ref="component"/>)
  })

  it('renders a toggled Toggle', () => {
    expect(new ReduxFormMaterialUIToggle({
      input: {
        name: 'myToggle',
        onChange: noop
      },
      defaultToggled: true
    }).render())
      .toEqualJSX(<Toggle name="myToggle" toggled onToggle={noop} ref="component"/>)
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUIToggle input={{ name: 'myToggle', onChange: noop }}/>
      </MuiThemeProvider>
    )

    const element =
      TestUtils.findRenderedComponentWithType(dom, ReduxFormMaterialUIToggle)
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })
})
