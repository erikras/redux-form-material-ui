import expect from 'expect'
import expectJsx from 'expect-jsx'
import noop from 'lodash.noop'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Switch from 'material-ui/Switch'
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import ReduxFormMaterialUISwitch from '../Switch'

expect.extend(expectJsx)

describe('Switch', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUISwitch.displayName).toBe(
      'ReduxFormMaterialUIStyle'
    )
  })

  it('renders an unchecked Switch', () => {
    expect(
      new ReduxFormMaterialUISwitch({
        input: {
          name: 'mySwitch',
          onChange: noop
        }
      }).render()
    ).toEqualJSX(
      <Switch
        name="mySwitch"
        onChange={noop}
        ref={() => {}}
      />
    )
  })

  it('renders a checked Switch', () => {
    expect(
      new ReduxFormMaterialUISwitch({
        input: {
          name: 'mySwitch',
          onChange: noop,
          value: true
        }
      }).render()
    ).toEqualJSX(
      <Switch
        name="mySwitch"
        onChange={noop}
        ref={() => {}}
        checked
      />
    )
  })

  it('should ignore checked', () => {
    expect(
      new ReduxFormMaterialUISwitch({
        input: {
          name: 'mySwitch',
          onChange: noop
        },
        checked: true
      }).render()
    ).toEqualJSX(
      <Switch
        name="mySwitch"
        onChange={noop}
        ref={() => {}}
      />
    )
  })

  it('renders a controlled Switch', () => {
    expect(
      new ReduxFormMaterialUISwitch({
        input: {
          name: 'mySwitch',
          onChange: noop,
          value: true
        }
      }).render()
    ).toEqualJSX(
      <Switch name="mySwitch" onChange={noop} ref={() => {}} checked={true} />
    )
    expect(
      new ReduxFormMaterialUISwitch({
        input: {
          name: 'mySwitch',
          onChange: noop
        }
      }).render()
    ).toEqualJSX(
      <Switch name="mySwitch" onChange={noop} ref={() => {}} checked={false} />
    )
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider>
        <ReduxFormMaterialUISwitch
          input={{ name: 'mySwitch', onChange: noop }}
        />
      </MuiThemeProvider>
    )

    const element = TestUtils.findRenderedComponentWithType(
      dom,
      ReduxFormMaterialUISwitch
    )
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })
})
