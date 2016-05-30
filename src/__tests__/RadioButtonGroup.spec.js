import React from 'react'
import expect from 'expect'
import expectJsx from 'expect-jsx'
import { RadioButtonGroup } from 'material-ui/RadioButton'
import renderRadioButtonGroup from '../RadioButtonGroup'

expect.extend(expectJsx)

describe('RadioButtonGroup', () => {
  it('is a function', () => {
    expect(renderRadioButtonGroup).toBeA('function')
  })

  it('renders a RadioButtonGroup', () => {
    expect(renderRadioButtonGroup({
      name: 'myRadio',
      value: 'Foo'
    }))
      .toEqualJSX(<RadioButtonGroup name="myRadio" value="Foo"/>)
  })

  it('renders a RadioButtonGroup with no error when not touched', () => {
    expect(renderRadioButtonGroup({
      name: 'myRadio',
      value: 'Foo',
      error: 'FooError'
    }))
      .toEqualJSX(<RadioButtonGroup name="myRadio" value="Foo"/>)
  })

  it('renders a RadioButtonGroup with an error', () => {
    expect(renderRadioButtonGroup({
      name: 'myRadio',
      value: 'Foo',
      touched: true,
      error: 'FooError'
    }))
      .toEqualJSX(<RadioButtonGroup name="myRadio" value="Foo" errorText="FooError"/>)
  })
})
