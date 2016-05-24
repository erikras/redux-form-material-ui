# redux-form-material-ui
---
[![NPM Version](https://img.shields.io/npm/v/redux-form-material-ui.svg?style=flat-square)](https://www.npmjs.com/package/redux-form-material-ui) 
[![NPM Downloads](https://img.shields.io/npm/dm/redux-form-material-ui.svg?style=flat-square)](https://www.npmjs.com/package/redux-form-material-ui)
[![Build Status](https://img.shields.io/travis/erikras/redux-form-material-ui/master.svg?style=flat-square)](https://travis-ci.org/erikras/redux-form-material-ui)
[![codecov.io](https://codecov.io/github/erikras/redux-form-material-ui/coverage.svg?branch=master)](https://codecov.io/github/erikras/redux-form-material-ui?branch=master)

[`redux-form-material-ui`](https://github.com/erikras/redux-form-material-ui) is an adapter
between [`redux-form`](https://github.com/erikras/redux-form) and
[`material-ui`](https://github.com/callemall/material-ui) components.

---

## Installation

Using [npm](https://www.npmjs.org/):

```bash
  $ npm install --save redux-form-material-ui
```

## Available Components

* [Checkbox](http://www.material-ui.com/#/components/checkbox)
* [RadioButtonGroup](http://www.material-ui.com/#/components/radio-button)
* [SelectField](http://www.material-ui.com/#/components/select-field)
* [Slider](http://www.material-ui.com/#/components/slider)
* [TextField](http://www.material-ui.com/#/components/text-field)
* [Toggle](http://www.material-ui.com/#/components/toggle)

## Usage

Pass this library as the `adapter` config property to `redux-form`, and then refer to the 
Material UI widgets as strings to the `component` property of `redux-form`'s `Field` component.

```js
import { reduxForm, Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { RadioButton } from 'material-ui/RadioButton'
import adapter from 'redux-form-material-ui'

class MyForm extends Component {
  render() {
    return (
      <form>
        <Field name="username" component="TextField" hintText="Street"/>
        
        <Field name="plan" component="SelectField" hintText="Select a plan">
          <MenuItem value="monthly" primaryText="Monthly"/>
          <MenuItem value="yearly" primaryText="Yearly"/>
          <MenuItem value="lifetime" primaryText="Lifetime"/>
        </Field>
        
        <Field name="agreeToTerms" component="Checkbox" label="Agree to terms?"/>
        
        <Field name="receiveEmails" component="Toggle" label="Please spam me!"/>
        
        <Field name="bestFramework" component="RadioButtonGroup">
          <RadioButton value="react" label="React"/>
          <RadioButton value="angular" label="Angular"/>
          <RadioButton value="ember" label="Ember"/>
        </Field>
      </form>
    )
  }
}

// Decorate with redux-form
MyForm = reduxForm({
  form: 'myForm',
  adapter
})

export default MyForm
```
