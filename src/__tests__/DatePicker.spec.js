import React from 'react'
import expect, { createSpy } from 'expect'
import expectJsx from 'expect-jsx'
import DatePicker from 'material-ui/DatePicker'
import noop from 'lodash.noop'
import renderDatePicker from '../DatePicker'

expect.extend(expectJsx)

describe('DatePicker', () => {
  it('is a function', () => {
    expect(renderDatePicker).toBeA('function')
  })

  it('renders a DatePicker with no value', () => {
    expect(renderDatePicker({
      name: 'myDatePicker'
    }))
      .toEqualJSX(<DatePicker name="myDatePicker" onChange={noop}/>)
  })

  it('renders a DatePicker with a value', () => {
    const value = new Date('2016-01-01')
    expect(renderDatePicker({
      name: 'myDatePicker',
      value
    }))
      .toEqualJSX(<DatePicker name="myDatePicker" value={value} onChange={noop}/>)
  })

  it('maps onChange properly for DatePicker', () => {
    const onChange = createSpy()
    const first = new Date('2016-01-01')
    const second = new Date('2016-02-29')
    const slider = renderDatePicker({
      name: 'myDatePicker',
      value: first,
      onChange: onChange
    })
    expect(onChange).toNotHaveBeenCalled()
    slider.props.onChange(undefined, second)
    expect(onChange)
      .toHaveBeenCalled()
      .toHaveBeenCalledWith(second)
  })
})
