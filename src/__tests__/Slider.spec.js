import React from 'react'
import expect, { createSpy } from 'expect'
import expectJsx from 'expect-jsx'
import Slider from 'material-ui/Slider'
import noop from 'lodash.noop'
import renderSlider from '../Slider'

expect.extend(expectJsx)

describe('Slider', () => {
  it('is a function', () => {
    expect(renderSlider).toBeA('function')
  })

  it('renders a Slider', () => {
    expect(renderSlider({
      name: 'mySlider',
      value: 0.5
    }))
      .toEqualJSX(<Slider name="mySlider" value={0.5} onChange={noop}/>)
  })

  it('renders a Slider with no error when not touched', () => {
    expect(renderSlider({
      name: 'mySlider',
      value: 0.5,
      error: 'FooError'
    }))
      .toEqualJSX(<Slider name="mySlider" value={0.5} onChange={noop}/>)
  })

  it('renders a Slider with an error', () => {
    expect(renderSlider({
      name: 'mySlider',
      value: 0.5,
      touched: true,
      error: 'FooError'
    }))
      .toEqualJSX(<Slider name="mySlider" value={0.5} error="FooError" onChange={noop}/>)
  })

  it('maps onChange properly for Slider', () => {
    const onChange = createSpy()
    const slider = renderSlider({
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
})
