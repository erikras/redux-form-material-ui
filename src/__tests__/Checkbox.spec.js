import expect from 'expect'
import expectJsx from 'expect-jsx'
import noop from 'lodash.noop'
import Checkbox from 'material-ui/Checkbox'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import ReduxFormMaterialUICheckbox from '../Checkbox'

expect.extend(expectJsx)

describe('Checkbox', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUICheckbox.displayName).toBe(
      'ReduxFormMaterialUISwitchBase'
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
        onChange={noop}
        ref={() => {}}
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
        onChange={noop}
        ref={() => {}}
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
        onChange={noop}
        ref={() => {}}
      />
    )
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider>
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
