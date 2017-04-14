import expect, { createSpy } from 'expect'
import expectJsx from 'expect-jsx'
import noop from 'lodash.noop'
import Slider from 'material-ui/Slider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import ReduxFormMaterialUISlider from '../Slider'

expect.extend(expectJsx)

describe('Slider', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUISlider.displayName).toBe(
      'ReduxFormMaterialUISlider'
    )
  })

  it('renders a Slider', () => {
    expect(
      new ReduxFormMaterialUISlider({
        input: {
          name: 'mySlider',
          value: 0.5,
          onDragStart: noop
        }
      }).render()
    ).toEqualJSX(
      <Slider name="mySlider" value={0.5} onChange={noop} ref="component" />
    )
  })

  it('should ignore defaultValue', () => {
    expect(
      new ReduxFormMaterialUISlider({
        input: {
          name: 'mySlider',
          value: 0.5,
          onDragStart: noop
        },
        defaultValue: 0.8
      }).render()
    ).toEqualJSX(
      <Slider name="mySlider" value={0.5} onChange={noop} ref="component" />
    )
  })

  it('ignores errors', () => {
    expect(
      new ReduxFormMaterialUISlider({
        input: {
          name: 'mySlider',
          value: 0.5,
          onDragStart: noop
        },
        meta: {
          touched: true,
          error: 'FooError'
        }
      }).render()
    ).toEqualJSX(
      <Slider name="mySlider" value={0.5} onChange={noop} ref="component" />
    )
  })

  it('ignores warnings', () => {
    expect(
      new ReduxFormMaterialUISlider({
        input: {
          name: 'mySlider',
          value: 0.5,
          onDragStart: noop
        },
        meta: {
          touched: true,
          warning: 'FooWarning'
        }
      }).render()
    ).toEqualJSX(
      <Slider name="mySlider" value={0.5} onChange={noop} ref="component" />
    )
  })

  it('maps onChange properly', () => {
    const onChange = createSpy()
    const fieldOnChange = createSpy()

    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUISlider
          name="mySlider"
          input={{ onChange, value: 0.5 }}
          onChange={fieldOnChange}
        />
      </MuiThemeProvider>
    )

    const slider = TestUtils.findRenderedComponentWithType(dom, Slider)

    expect(onChange).toNotHaveBeenCalled()
    expect(fieldOnChange).toNotHaveBeenCalled()

    slider.props.onChange(undefined, 0.9)

    expect(onChange).toHaveBeenCalled().toHaveBeenCalledWith(0.9)

    expect(fieldOnChange).toHaveBeenCalled().toHaveBeenCalledWith(0.9)
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUISlider input={{ name: 'mySlider' }} />
      </MuiThemeProvider>
    )

    const element = TestUtils.findRenderedComponentWithType(
      dom,
      ReduxFormMaterialUISlider
    )
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })
})
