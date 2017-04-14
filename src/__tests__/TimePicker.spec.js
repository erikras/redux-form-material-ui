import expect, { createSpy } from 'expect'
import expectJsx from 'expect-jsx'
import noop from 'lodash.noop'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TimePicker from 'material-ui/TimePicker'
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import ReduxFormMaterialUITimePicker from '../TimePicker'

expect.extend(expectJsx)

describe('TimePicker', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUITimePicker.displayName).toBe(
      'ReduxFormMaterialUITimePicker'
    )
  })

  it('renders a TimePicker with no value', () => {
    expect(
      new ReduxFormMaterialUITimePicker({
        input: {
          name: 'myTimePicker',
          onChange: noop
        }
      }).render()
    ).toEqualJSX(
      <TimePicker name="myTimePicker" onChange={noop} ref="component" />
    )
  })

  it('renders a TimePicker with a value', () => {
    const value = new Date('2016-01-01')
    expect(
      new ReduxFormMaterialUITimePicker({
        input: {
          name: 'myTimePicker',
          onChange: noop,
          value
        }
      }).render()
    ).toEqualJSX(
      <TimePicker
        name="myTimePicker"
        onChange={noop}
        value={value}
        ref="component"
      />
    )
  })

  it('renders a TimePicker with an error', () => {
    const value = new Date('2016-01-01')
    expect(
      new ReduxFormMaterialUITimePicker({
        input: {
          name: 'myTimePicker',
          value
        },
        meta: {
          error: 'FooError',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <TimePicker
        name="myTimePicker"
        value={value}
        errorText="FooError"
        onChange={noop}
        ref="component"
      />
    )
  })

  it('renders a TimePicker with an warning', () => {
    const value = new Date('2016-01-01')
    expect(
      new ReduxFormMaterialUITimePicker({
        input: {
          name: 'myTimePicker',
          value
        },
        meta: {
          warning: 'FooWarning',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <TimePicker
        name="myTimePicker"
        value={value}
        errorText="FooWarning"
        onChange={noop}
        ref="component"
      />
    )
  })

  it('should ignore defaultTime', () => {
    const defaultTime = new Date('2016-01-01')
    expect(
      new ReduxFormMaterialUITimePicker({
        input: {
          name: 'myTimePicker'
        },
        meta: {
          warning: 'FooWarning',
          touched: true
        },
        defaultTime
      }).render()
    ).toEqualJSX(
      <TimePicker
        name="myTimePicker"
        errorText="FooWarning"
        onChange={noop}
        ref="component"
      />
    )
  })

  it('maps onChange properly', () => {
    const onChange = createSpy()
    const first = new Date('August 22, 2016 10:15:00')
    const second = new Date('August 22, 2016 11:20:00')

    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUITimePicker
          input={{ name: 'myTimePicker', onChange, value: first }}
        />
      </MuiThemeProvider>
    )

    const timePicker = TestUtils.findRenderedComponentWithType(dom, TimePicker)
    expect(onChange).toNotHaveBeenCalled()
    timePicker.props.onChange(undefined, second)
    expect(onChange).toHaveBeenCalled().toHaveBeenCalledWith(second)
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUITimePicker
          input={{ name: 'myTimePicker', onChange: noop }}
        />
      </MuiThemeProvider>
    )

    const element = TestUtils.findRenderedComponentWithType(
      dom,
      ReduxFormMaterialUITimePicker
    )
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })
})
