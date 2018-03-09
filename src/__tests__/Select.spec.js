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
    ).toEqualJSX(
      <Select
        name="myText"
        value="Foo"
        ref={() => {}}
        onChange={() => {}}
        onBlur={() => {}}
      />
    )
  })
  it('renders a Select with multiple', () => {
    expect(
      new ReduxFormMaterialUISelect({
        multiple: true,
        input: {
          name: 'myText',
          value: ['Foo', 'Bar']
        }
      }).render()
    ).toEqualJSX(
      <Select
        multiple
        name="myText"
        value={['Foo', 'Bar']}
        ref={() => {}}
        onChange={() => {}}
        onBlur={() => {}}
      />
    )
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
    ).toEqualJSX(
      <Select
        name="myText"
        value="Foo"
        ref={() => {}}
        onChange={() => {}}
        onBlur={() => {}}
      />
    )
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
        onChange={() => {}}
        onBlur={() => {}}
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
    ).toEqualJSX(
      <Select
        name="myText"
        value="Foo"
        ref={() => {}}
        onChange={() => {}}
        onBlur={() => {}}
      />
    )
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
        onChange={() => {}}
        onBlur={() => {}}
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
        onChange={() => {}}
        onBlur={() => {}}
      />
    )
  })
})
