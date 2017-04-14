import expect from 'expect'
import expectJsx from 'expect-jsx'
import noop from 'lodash.noop'
import Checkbox from 'material-ui/Checkbox'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import ReduxFormMaterialUICheckbox from '../Checkbox'

expect.extend(expectJsx)

describe('Checkbox', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUICheckbox.displayName).toBe(
      'ReduxFormMaterialUICheckbox'
    )
  })

  it('renders an unchecked Checkbox', () => {
    expect(
      new ReduxFormMaterialUICheckbox({
        input: {
          name: 'myCheckbox',
          onChange: noop
        }
      }).render()
    ).toEqualJSX(
      <Checkbox
        name="myCheckbox"
        checked={false}
        onCheck={noop}
        ref="component"
      />
    )
  })

  it('renders a checked Checkbox', () => {
    expect(
      new ReduxFormMaterialUICheckbox({
        input: {
          name: 'myCheckbox',
          onChange: noop,
          value: true
        }
      }).render()
    ).toEqualJSX(
      <Checkbox
        name="myCheckbox"
        checked={true}
        onCheck={noop}
        ref="component"
      />
    )
  })

  it('should ignore defaultChecked', () => {
    expect(
      new ReduxFormMaterialUICheckbox({
        input: {
          name: 'myCheckbox',
          onChange: noop
        },
        defaultChecked: true
      }).render()
    ).toEqualJSX(
      <Checkbox
        name="myCheckbox"
        onCheck={noop}
        ref="component"
      />
    )
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUICheckbox
          input={{ name: 'myCheckbox', onChange: noop }}
        />
      </MuiThemeProvider>
    )

    const element = TestUtils.findRenderedComponentWithType(
      dom,
      ReduxFormMaterialUICheckbox
    )
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })
})
