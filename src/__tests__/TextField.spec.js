import React from 'react'
import expect from 'expect'
import expectJsx from 'expect-jsx'
import TextField from 'material-ui/TextField'
import renderTextField from '../TextField'

expect.extend(expectJsx)

describe('TextField', () => {
  it('is a function', () => {
    expect(renderTextField).toBeA('function')
  })

  it('renders a TextField', () => {
    expect(renderTextField({
      name: 'myText',
      value: 'Foo'
    }))
      .toEqualJSX(<TextField name="myText" value="Foo"/>)
  })

  it('renders a TextField with no error when not touched', () => {
    expect(renderTextField({
      name: 'myText',
      value: 'Foo',
      error: 'FooError'
    }))
      .toEqualJSX(<TextField name="myText" value="Foo"/>)
  })

  it('renders a TextField with an error', () => {
    expect(renderTextField({
      name: 'myText',
      touched: true,
      value: 'Foo',
      error: 'FooError'
    }))
      .toEqualJSX(<TextField name="myText" value="Foo" errorText="FooError"/>)
  })
})
