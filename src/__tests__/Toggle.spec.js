import React from 'react'
import expect from 'expect'
import expectJsx from 'expect-jsx'
import Toggle from 'material-ui/Toggle'
import noop from 'lodash.noop'
import renderToggle from '../Toggle'

expect.extend(expectJsx)

describe('Toggle', () => {
  it('is a function', () => {
    expect(renderToggle).toBeA('function')
  })

  it('renders an untoggled Toggle', () => {
    expect(renderToggle({
      name: 'myToggle',
      onChange: noop
    }))
      .toEqualJSX(<Toggle name="myToggle" toggled={false} onToggle={noop}/>)
  })

  it('renders a toggled Toggle', () => {
    expect(renderToggle({
      name: 'myToggle',
      value: true,
      onChange: noop
    }))
      .toEqualJSX(<Toggle name="myToggle" toggled={true} onToggle={noop}/>)
  })
})
