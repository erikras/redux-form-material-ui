import React from 'react'
import expect, { createSpy } from 'expect'
import expectJsx from 'expect-jsx'
import SelectField from 'material-ui/SelectField'
import noop from 'lodash.noop'
import renderSelectField from '../SelectField'

expect.extend(expectJsx)

describe('SelectField', () => {
  it('is a function', () => {
    expect(renderSelectField).toBeA('function')
  })

  it('renders a SelectField', () => {
    expect(renderSelectField({
      name: 'mySelect',
      value: 'Foo',
      onChange: noop
    }))
      .toEqualJSX(<SelectField name="mySelect" value="Foo" onChange={noop}/>)
  })

  it('maps onChange properly for SelectField', () => {
    const onChange = createSpy()
    const select = renderSelectField({
      name: 'mySelect',
      value: 'Foo',
      onChange: onChange
    })
    expect(onChange).toNotHaveBeenCalled()
    select.props.onChange(undefined, 42, 'TheValue')
    expect(onChange)
      .toHaveBeenCalled()
      .toHaveBeenCalledWith('TheValue')
  })

  it('renders a SelectField with no error when not touched', () => {
    expect(renderSelectField({
      name: 'mySelect',
      value: 'Foo',
      onChange: noop,
      touched: false,
      error: 'FooError'
    }))
      .toEqualJSX(<SelectField name="mySelect" value="Foo" onChange={noop}/>)
  })

  it('renders a SelectField with an error', () => {
    expect(renderSelectField({
      name: 'mySelect',
      value: 'Foo',
      onChange: noop,
      touched: true,
      error: 'FooError'
    }))
      .toEqualJSX(<SelectField name="mySelect" value="Foo" onChange={noop} errorText="FooError"/>)
  })
})
