# Redux Form Material UI Wrappers

This is a simple demonstration of how to connect all the standard (MUI V1.0)
[`material-ui`](https://github.com/callemall/material-ui) form elements to
[`redux-form`](https://github.com/erikras/redux-form) using the
[`redux-form-material-ui`](https://github.com/erikras/redux-form-material-ui) wrapper library.

You simply provide the string name of the Material UI component you want to render to the
`component` prop of `Field`, and then pass any additional configuration as props to `Field`.

Available components:

* [AutoComplete](http://www.material-ui.com/#/components/auto-complete)
* [Checkbox](http://www.material-ui.com/#/components/checkbox)
* ~[TimePicker](http://www.material-ui.com/#/components/time-picker)~ [Material-4787](https://github.com/callemall/material-ui/issues/4787)
* ~[DatePicker](http://www.material-ui.com/#/components/date-picker)~ [Material-4787](https://github.com/callemall/material-ui/issues/4787)
* [RadioButtonGroup](http://www.material-ui.com/#/components/radio-button)
* [Select](http://www.material-ui.com/#/components/Select)
* ~[Slider](http://www.material-ui.com/#/components/slider)~ [Material-4793](https://github.com/callemall/material-ui/issues/4793)
* [TextField](http://www.material-ui.com/#/components/text-field)
* [Switch](https://material.io/guidelines/components/lists-controls.html#lists-controls-types-of-list-controls)

The code for this example is
[available here](https://github.com/erikras/redux-form-material-ui/tree/master/example).
