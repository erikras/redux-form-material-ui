import expect from 'expect'
import expectJsx from 'expect-jsx'
import TextField from '@material-ui/core/TextField'
import React from 'react'
import ReduxFormMaterialUITextField from '../TextField'

expect.extend(expectJsx)

describe('TextField', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUITextField.displayName).toBe(
      'ReduxFormMaterialUITextField'
    )
  })

  it('renders a TextField', () => {
    expect(
      new ReduxFormMaterialUITextField({
        input: {
          name: 'myText',
          value: 'Foo'
        }
      }).render()
    ).toEqualJSX(<TextField name="myText" value="Foo" />)
  })

  it('renders a TextField with no error when not touched', () => {
    expect(
      new ReduxFormMaterialUITextField({
        input: {
          name: 'myText',
          value: 'Foo'
        },
        meta: {
          error: 'FooError'
        }
      }).render()
    ).toEqualJSX(<TextField name="myText" value="Foo" />)
  })

  it('renders a TextField with an error', () => {
    expect(
      new ReduxFormMaterialUITextField({
        input: {
          name: 'myText',
          value: 'Foo'
        },
        meta: {
          error: 'FooError',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <TextField
        name="myText"
        value="Foo"
        error
        helperText="FooError"
      />
    )
  })

  it('renders a TextField with no warning when not touched', () => {
    expect(
      new ReduxFormMaterialUITextField({
        input: {
          name: 'myText',
          value: 'Foo'
        },
        meta: {
          warning: 'FooWarning'
        }
      }).render()
    ).toEqualJSX(<TextField name="myText" value="Foo" />)
  })

  it('renders a TextField with an warning', () => {
    expect(
      new ReduxFormMaterialUITextField({
        input: {
          name: 'myText',
          value: 'Foo'
        },
        meta: {
          warning: 'FooWarning',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <TextField
        name="myText"
        value="Foo"
        error
        helperText="FooWarning"
      />
    )
  })

  it('should ignore defaultValue', () => {
    expect(
      new ReduxFormMaterialUITextField({
        input: {
          name: 'myText',
          value: ''
        },
        defaultValue: '5',
        meta: {
          warning: 'FooWarning',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <TextField
        name="myText"
        value=""
        error
        helperText="FooWarning"
      />
    )
  })
})
