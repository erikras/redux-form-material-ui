import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect, { createSpy } from 'expect'
import expectJsx from 'expect-jsx'
import Slider from 'material-ui/Slider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import noop from 'lodash.noop'
import ReduxFormMaterialUISlider from '../Slider'

expect.extend(expectJsx)

describe('Slider', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUISlider.displayName)
      .toBe('ReduxFormMaterialUISlider')
  })

  it('renders a Slider', () => {
    expect(new ReduxFormMaterialUISlider({
      input: {
        name: 'mySlider',
        value: 0.5,
        onDragStart: noop
      }
    }).render())
      .toEqualJSX(<Slider name="mySlider" value={0.5} onChange={noop} ref="component"/>)
  })

  it('renders a Slider with no error when not touched', () => {
    expect(new ReduxFormMaterialUISlider({
      input: {
        name: 'mySlider',
        value: 0.5,
        onDragStart: noop
      },
      error: 'FooError'
    }).render())
      .toEqualJSX(<Slider name="mySlider" value={0.5} onChange={noop} ref="component"/>)
  })

  it('renders a Slider with an error', () => {
    expect(new ReduxFormMaterialUISlider({
      input: {
        name: 'mySlider',
        value: 0.5,
        onDragStart: noop
      },
      error: 'FooError',
      touched: true
    }).render())
      .toEqualJSX(<Slider name="mySlider" value={0.5} error="FooError" onChange={noop}
        ref="component"/>)
  })

  it('maps onChange properly', () => {
    const onChange = createSpy()

    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUISlider name="mySlider" input={{ onChange, value: 0.5 }}/>
      </MuiThemeProvider>
    )

    const slider = TestUtils.findRenderedComponentWithType(dom, Slider)
    expect(onChange).toNotHaveBeenCalled()
    slider.props.onChange(undefined, 0.9)
    expect(onChange)
      .toHaveBeenCalled()
      .toHaveBeenCalledWith(0.9)
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUISlider input={{ name: 'mySlider' }}/>
      </MuiThemeProvider>
    )

    const element =
      TestUtils.findRenderedComponentWithType(dom, ReduxFormMaterialUISlider)
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })
})
