import expect, { createSpy } from 'expect'
import expectJsx from 'expect-jsx'
import noop from 'lodash.noop'
import DatePicker from 'material-ui/DatePicker'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import ReduxFormMaterialUIDatePicker from '../DatePicker'

expect.extend(expectJsx)

describe('DatePicker', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUIDatePicker.displayName).toBe(
      'ReduxFormMaterialUIDatePicker'
    )
  })

  it('renders a DatePicker with no value', () => {
    expect(
      new ReduxFormMaterialUIDatePicker({
        input: {
          name: 'myDatePicker',
          onChange: noop
        }
      }).render()
    ).toEqualJSX(
      <DatePicker name="myDatePicker" onChange={noop} ref="component" />
    )
  })

  it('renders a DatePicker with a value', () => {
    const value = new Date('2016-01-01')
    expect(
      new ReduxFormMaterialUIDatePicker({
        input: {
          name: 'myDatePicker',
          onChange: noop,
          value
        }
      }).render()
    ).toEqualJSX(
      <DatePicker
        name="myDatePicker"
        onChange={noop}
        value={value}
        ref="component"
      />
    )
  })

  it('renders a DatePicker with an error', () => {
    const value = new Date('2016-01-01')
    expect(
      new ReduxFormMaterialUIDatePicker({
        input: {
          name: 'myDatePicker',
          value
        },
        meta: {
          error: 'FooError',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <DatePicker
        name="myDatePicker"
        value={value}
        errorText="FooError"
        onChange={noop}
        ref="component"
      />
    )
  })

  it('renders a DatePicker with an warning', () => {
    const value = new Date('2016-01-01')
    expect(
      new ReduxFormMaterialUIDatePicker({
        input: {
          name: 'myDatePicker',
          value
        },
        meta: {
          warning: 'FooWarning',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <DatePicker
        name="myDatePicker"
        value={value}
        errorText="FooWarning"
        onChange={noop}
        ref="component"
      />
    )
  })

  it('should ignore defaultDate', () => {
    const defaultDate = new Date('2016-01-01')
    expect(
      new ReduxFormMaterialUIDatePicker({
        input: {
          name: 'myDatePicker'
        },
        meta: {
          warning: 'FooWarning',
          touched: true
        },
        defaultDate
      }).render()
    ).toEqualJSX(
      <DatePicker
        name="myDatePicker"
        errorText="FooWarning"
        onChange={noop}
        ref="component"
      />
    )
  })

  it('maps onChange properly', () => {
    const onChange = createSpy()
    const first = new Date('2016-01-01')
    const second = new Date('2016-02-29')

    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUIDatePicker
          input={{ name: 'myDatePicker', onChange, value: first }}
        />
      </MuiThemeProvider>
    )

    const datePicker = TestUtils.findRenderedComponentWithType(dom, DatePicker)
    expect(onChange).toNotHaveBeenCalled()
    datePicker.props.onChange(undefined, second)
    expect(onChange).toHaveBeenCalled().toHaveBeenCalledWith(second)
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUIDatePicker
          input={{ name: 'myDatePicker', onChange: noop }}
        />
      </MuiThemeProvider>
    )

    const element = TestUtils.findRenderedComponentWithType(
      dom,
      ReduxFormMaterialUIDatePicker
    )
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })
})
