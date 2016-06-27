# Redux Form Material UI Wrappers

This is a simple demonstration of how to connect all the standard
[`material-ui`](https://github.com/callemall/material-ui) form elements to 
[`redux-form`](https://github.com/erikras/redux-form) using the
[`redux-form-material-ui`](https://github.com/erikras/redux-form-material-ui) wrapper library.

You simply provide the string name of the Material UI component you want to render to the 
`component` prop of `Field`, and then pass any additional configuration as props to `Field`.

Available components:

* [Checkbox](http://www.material-ui.com/#/components/checkbox)
* [DatePicker](http://www.material-ui.com/#/components/date-picker)
* [RadioButtonGroup](http://www.material-ui.com/#/components/radio-button)
* [SelectField](http://www.material-ui.com/#/components/select-field)
* [Slider](http://www.material-ui.com/#/components/slider)
* [TextField](http://www.material-ui.com/#/components/text-field)
* [Toggle](http://www.material-ui.com/#/components/toggle)

The code for this example is
[available here](https://github.com/erikras/redux-form-material-ui/tree/master/example).
