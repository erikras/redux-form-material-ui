import expect from 'expect'
import expectJsx from 'expect-jsx'
import Select from 'material-ui/Select'
import React from 'react'
import ReduxFormMaterialUISelect from '../Select'

expect.extend(expectJsx)

describe('Select', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUISelect.displayName).toBe(
      'ReduxFormMaterialUIStyle'
    )
  })

  it('renders a Select', () => {
    expect(
      new ReduxFormMaterialUISelect({
        input: {
          name: 'myText',
          value: 'Foo'
        }
      }).render()
    ).toEqualJSX(<Select name="myText" value="Foo" ref={() => {}} />)
  })

  it('renders a Select with no error when not touched', () => {
    expect(
      new ReduxFormMaterialUISelect({
        input: {
          name: 'myText',
          value: 'Foo'
        },
        meta: {
          error: 'FooError'
        }
      }).render()
    ).toEqualJSX(<Select name="myText" value="Foo" ref={() => {}} />)
  })

  it('renders a Select with an error', () => {
    expect(
      new ReduxFormMaterialUISelect({
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
      <Select
        name="myText"
        value="Foo"
        error
        helperText="FooError"
        ref={() => {}}
      />
    )
  })

  it('renders a Select with no warning when not touched', () => {
    expect(
      new ReduxFormMaterialUISelect({
        input: {
          name: 'myText',
          value: 'Foo'
        },
        meta: {
          warning: 'FooWarning'
        }
      }).render()
    ).toEqualJSX(<Select name="myText" value="Foo" ref={() => {}} />)
  })

  it('renders a Select with an warning', () => {
    expect(
      new ReduxFormMaterialUISelect({
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
      <Select
        name="myText"
        value="Foo"
        error
        helperText="FooWarning"
        ref={() => {}}
      />
    )
  })

  it('should ignore defaultValue', () => {
    expect(
      new ReduxFormMaterialUISelect({
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
      <Select
        name="myText"
        value=""
        error
        helperText="FooWarning"
        ref={() => {}}
      />
    )
  })
})
