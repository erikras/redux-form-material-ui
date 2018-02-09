import expect from 'expect'
import expectJsx from 'expect-jsx'
import PasswordField from 'material-ui-password-field'
import React from 'react'
import ReduxFormMaterialUIPasswordField from '../PasswordField'

expect.extend(expectJsx)

describe('PasswordField', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUIPasswordField.displayName).toBe(
      'ReduxFormMaterialUIPasswordField'
    )
  })

  it('renders a PasswordField', () => {
    expect(
      new ReduxFormMaterialUIPasswordField({
        input: {
          name: 'myPassword',
          value: 'Foo'
        }
      }).render()
    ).toEqualJSX(<PasswordField name="myText" value="Foo" />)
  })

  it('renders a PasswordField with no error when not touched', () => {
    expect(
      new ReduxFormMaterialUIPasswordField({
        input: {
          name: 'myPassword',
          value: 'Foo'
        },
        meta: {
          error: 'FooError'
        }
      }).render()
    ).toEqualJSX(<PasswordField name="myPassword" value="Foo" />)
  })

  it('renders a PasswordField with an error', () => {
    expect(
      new ReduxFormMaterialUIPasswordField({
        input: {
          name: 'myPassword',
          value: 'Foo'
        },
        meta: {
          error: 'FooError',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <PasswordField
        name="myPassword"
        value="Foo"
        error
        helperText="FooError"
      />
    )
  })

  it('renders a PasswordField with no warning when not touched', () => {
    expect(
      new ReduxFormMaterialUIPasswordField({
        input: {
          name: 'myPassword',
          value: 'Foo'
        },
        meta: {
          warning: 'FooWarning'
        }
      }).render()
    ).toEqualJSX(<PasswordField name="myPassword" value="Foo" />)
  })

  it('renders a PasswordField with an warning', () => {
    expect(
      new ReduxFormMaterialUIPasswordField({
        input: {
          name: 'myPassword',
          value: 'Foo'
        },
        meta: {
          warning: 'FooWarning',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <PasswordField
        name="myText"
        value="Foo"
        error
        helperText="FooWarning"
      />
    )
  })

  it('should ignore defaultValue', () => {
    expect(
      new ReduxFormMaterialUIPasswordField({
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
      <PasswordField
        name="myPassword"
        value=""
        error
        helperText="FooWarning"
      />
    )
  })
})
