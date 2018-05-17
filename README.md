---
# redux-form-material-ui
---
[![NPM Version](https://img.shields.io/npm/v/redux-form-material-ui.svg?style=flat-square)](https://www.npmjs.com/package/redux-form-material-ui)
[![NPM Downloads](https://img.shields.io/npm/dm/redux-form-material-ui.svg?style=flat-square)](https://www.npmjs.com/package/redux-form-material-ui)
[![Build Status](https://img.shields.io/travis/erikras/redux-form-material-ui/master.svg?style=flat-square)](https://travis-ci.org/erikras/redux-form-material-ui)
[![codecov.io](https://codecov.io/github/erikras/redux-form-material-ui/coverage.svg?branch=master)](https://codecov.io/github/erikras/redux-form-material-ui?branch=master)
[![CDNJS version](https://img.shields.io/cdnjs/v/redux-form-material-ui.svg)](https://cdnjs.com/libraries/redux-form-material-ui)

[`redux-form-material-ui`](https://github.com/erikras/redux-form-material-ui) is a set of
wrappers to facilitate the use of
[`material-uibeta`](https://github.com/callemall/material-ui) components with
[`redux-form`](https://github.com/erikras/redux-form).

Latest version is supported by only for material-ui beta.

---

## [Live Demo](http://erikras.github.io/redux-form-material-ui/) :eyes:

## Installation

Using [npm](https://www.npmjs.org/):

```bash
  $ npm install --save redux-form-material-ui@next
```

Using [npm](https://yarnpkg.com):

```bash
  $ yarn add redux-form-material-ui@next
```

## Available Components

* [AutoComplete](http://www.material-ui.com/#/components/auto-complete)
* [Checkbox](http://www.material-ui.com/#/components/checkbox)
* ~[TimePicker](http://www.material-ui.com/#/components/time-picker)~ [Material-4787](https://github.com/callemall/material-ui/issues/4787)
* ~[DatePicker](http://www.material-ui.com/#/components/date-picker)~ [Material-4787](https://github.com/callemall/material-ui/issues/4787)
* [RadioButtonGroup](http://www.material-ui.com/#/components/radio-button)
* [Select](http://www.material-ui.com/#/components/Select)
* ~[Slider](http://www.material-ui.com/#/components/slider)~ [Material-4793](https://github.com/callemall/material-ui/issues/4793)
* [TextField](http://www.material-ui.com/#/components/text-field)
* [Switch](https://material.io/guidelines/components/lists-controls.html#lists-controls-types-of-list-controls)

## Usage

Rather than import your component class from `material-ui`, import it from `redux-form-material-ui`
and then pass the component class directly to the `component` prop of `Field`.

```js
import { reduxForm, Field } from 'redux-form'
import MenuItem from '@material-ui/core/MenuItem'
import Radio from '@material-ui/core/RadioButton'
import {
  Checkbox,
  RadioGroup,
  Select,
  TextField,
  Switch,
  FormControlLabel,
} from 'redux-form-material-ui'

class MyForm extends Component {
  render() {
    return (
      <form>
        <Field name="username" component={TextField} placeholder="Street"/>

        <Field name="plan" component={Select} placeholder="Select a plan">
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="yearly">Yearly</MenuItem>
          <MenuItem value="lifetime">Lifetime</MenuItem>
        </Field>

        <FormControlLabel control={<Field name="agreeToTerms" component={Checkbox} /> } label="Agree to terms?" />

      <FormControlLabel control={<Field name="receiveEmails" component={Switch} /> } label="Please spam me!" />

        <Field name="bestFramework" component={RadioGroup}>
          <Radio value="react" label="React"/>
          <Radio value="angular" label="Angular"/>
          <Radio value="ember" label="Ember"/>
        </Field>
      </form>
    )
  }
}

// Decorate with redux-form
MyForm = reduxForm({
  form: 'myForm'
})(MyForm)

export default MyForm
```

## No Default Values

Because of the strict "controlled component" nature of `redux-form`,
some of the Material UI functionality related to defaulting of values has been disabled
e.g. `defaultValue`, `defaultDate`, `defaultTime`, `defaultToggled`, `defaultChecked`, etc.
If you need a field to be initialized to a certain state, you should use the `initialValues`
API of `redux-form`.

## Instance API

#### `getRenderedComponent()`

Returns a reference to the Material UI component that has been rendered. This is useful for
calling instance methods on the Material UI components. For example, if you wanted to focus on
the `username` element when your form mounts, you could do:

```js
componentWillMount() {
  this.refs.firstField      // the Field
    .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
    .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
    .focus()                // on TextField
}
```

as long as you specified a `ref` and `withRef` on your `Field` component.

```js
render() {
  return (
    <form>
      ...
      <Field name="username" component={TextField} withRef ref="firstField"/>
      ...
    </form>
  )
}
```
