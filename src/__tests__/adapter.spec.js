import React from 'react'
import expect, { createSpy } from 'expect'
import expectJsx from 'expect-jsx'
import TextField from 'material-ui/TextField'
import Slider from 'material-ui/Slider'
import { RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import Toggle from 'material-ui/Toggle'
import SelectField from 'material-ui/SelectField'
import noop from 'lodash.noop'
import adapter from '../adapter'

expect.extend(expectJsx)

describe('adapter', () => {
  it('is a function', () => {
    expect(adapter).toBeA('function')
  })

  it('returns undefined with unknown type', () => {
    expect(adapter()).toBe(undefined)
    expect(adapter('UnknownType')).toBe(undefined)
  })

  it('renders a TextField', () => {
    expect(adapter('TextField', {
      name: 'myText',
      value: 'Foo'
    }))
      .toEqualJSX(<TextField name="myText" value="Foo"/>)
  })

  it('renders a TextField with no error when not touched', () => {
    expect(adapter('TextField', {
      name: 'myText',
      value: 'Foo',
      error: 'FooError'
    }))
      .toEqualJSX(<TextField name="myText" value="Foo"/>)
  })

  it('renders a TextField with an error', () => {
    expect(adapter('TextField', {
      name: 'myText',
      value: 'Foo',
      touched: true,
      error: 'FooError'
    }))
      .toEqualJSX(<TextField name="myText" value="Foo" errorText="FooError"/>)
  })

  it('renders a Slider', () => {
    expect(adapter('Slider', {
      name: 'mySlider',
      value: 0.5
    }))
      .toEqualJSX(<Slider name="mySlider" value={0.5} onChange={noop}/>)
  })

  it('renders a Slider with no error when not touched', () => {
    expect(adapter('Slider', {
      name: 'mySlider',
      value: 0.5,
      error: 'FooError'
    }))
      .toEqualJSX(<Slider name="mySlider" value={0.5} onChange={noop}/>)
  })

  it('renders a Slider with an error', () => {
    expect(adapter('Slider', {
      name: 'mySlider',
      value: 0.5,
      touched: true,
      error: 'FooError'
    }))
      .toEqualJSX(<Slider name="mySlider" value={0.5} error="FooError" onChange={noop}/>)
  })

  it('maps onChange properly for Slider', () => {
    const onChange = createSpy()
    const slider = adapter('Slider', {
      name: 'mySlider',
      value: 0.5,
      onChange: onChange
    })
    expect(onChange).toNotHaveBeenCalled()
    slider.props.onChange(undefined, 0.9)
    expect(onChange)
      .toHaveBeenCalled()
      .toHaveBeenCalledWith(0.9)
  })

  it('renders a RadioButtonGroup', () => {
    expect(adapter('RadioButtonGroup', {
      name: 'myRadio',
      value: 'Foo'
    }))
      .toEqualJSX(<RadioButtonGroup name="myRadio" value="Foo"/>)
  })

  it('renders a RadioButtonGroup with no error when not touched', () => {
    expect(adapter('RadioButtonGroup', {
      name: 'myRadio',
      value: 'Foo',
      error: 'FooError'
    }))
      .toEqualJSX(<RadioButtonGroup name="myRadio" value="Foo"/>)
  })

  it('renders a RadioButtonGroup with an error', () => {
    expect(adapter('RadioButtonGroup', {
      name: 'myRadio',
      value: 'Foo',
      touched: true,
      error: 'FooError'
    }))
      .toEqualJSX(<RadioButtonGroup name="myRadio" value="Foo" errorText="FooError"/>)
  })

  it('renders an unchecked Checkbox', () => {
    expect(adapter('Checkbox', {
      name: 'myCheckbox',
      onChange: noop
    }))
      .toEqualJSX(<Checkbox name="myCheckbox" checked={false} onCheck={noop}/>)
  })

  it('renders a checked Checkbox', () => {
    expect(adapter('Checkbox', {
      name: 'myCheckbox',
      onChange: noop,
      value: true
    }))
      .toEqualJSX(<Checkbox name="myCheckbox" checked={true} onCheck={noop}/>)
  })

  it('renders an untoggled Toggle', () => {
    expect(adapter('Toggle', {
      name: 'myToggle',
      onChange: noop
    }))
      .toEqualJSX(<Toggle name="myToggle" toggled={false} onToggle={noop}/>)
  })

  it('renders a toggled Toggle', () => {
    expect(adapter('Toggle', {
      name: 'myToggle',
      value: true,
      onChange: noop
    }))
      .toEqualJSX(<Toggle name="myToggle" toggled={true} onToggle={noop}/>)
  })

  it('renders a SelectField', () => {
    expect(adapter('SelectField', {
      name: 'mySelect',
      value: 'Foo',
      onChange: noop
    }))
      .toEqualJSX(<SelectField name="mySelect" value="Foo" onChange={noop}/>)
  })

  it('maps onChange properly for SelectField', () => {
    const onChange = createSpy()
    const select = adapter('SelectField', {
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
    expect(adapter('SelectField', {
      name: 'mySelect',
      value: 'Foo',
      onChange: noop,
      touched: false,
      error: 'FooError'
    }))
      .toEqualJSX(<SelectField name="mySelect" value="Foo" onChange={noop}/>)
  })

  it('renders a SelectField with an error', () => {
    expect(adapter('SelectField', {
      name: 'mySelect',
      value: 'Foo',
      onChange: noop,
      touched: true,
      error: 'FooError'
    }))
      .toEqualJSX(<SelectField name="mySelect" value="Foo" onChange={noop} errorText="FooError"/>)
  })
})
