# Redux Form Material UI Wrappers

This is a simple demonstration of how to connect all the standard (MUI V1.0)
[`material-ui`](https://github.com/mui-org/material-ui) form elements to
[`redux-form`](https://github.com/erikras/redux-form) using the
[`redux-form-material-ui`](https://github.com/erikras/redux-form-material-ui) wrapper library.

You simply provide the string name of the Material UI component you want to render to the
`component` prop of `Field`, and then pass any additional configuration as props to `Field`.

Available components:

* [Checkbox](https://material-ui-next.com/api/checkbox)
* [RadioGroup](https://material-ui-next.com/api/radio-group)
* [Select](https://material-ui-next.com/api/select)
* [TextField](https://material-ui-next.com/api/text-field)
* [Switch](https://material-ui-next.com/api/switch)

The code for this example is
[available here](https://github.com/erikras/redux-form-material-ui/tree/master/example).
