import React from 'react'
import expect from 'expect'
import expectJsx from 'expect-jsx'
import Checkbox from 'material-ui/Checkbox'
import noop from 'lodash.noop'
import renderCheckbox from '../Checkbox'

expect.extend(expectJsx)

describe('Checkbox', () => {
  it('is a function', () => {
    expect(renderCheckbox).toBeA('function')
  })

  it('renders an unchecked Checkbox', () => {
    expect(renderCheckbox({
      name: 'myCheckbox',
      onChange: noop
    }))
      .toEqualJSX(<Checkbox name="myCheckbox" checked={false} onCheck={noop}/>)
  })

  it('renders a checked Checkbox', () => {
    expect(renderCheckbox({
      name: 'myCheckbox',
      onChange: noop,
      value: true
    }))
      .toEqualJSX(<Checkbox name="myCheckbox" checked={true} onCheck={noop}/>)
  })
})
