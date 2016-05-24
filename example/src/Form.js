import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton'
import MenuItem from 'material-ui/MenuItem'
import adapter from 'redux-form-material-ui'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'name', 'email', 'driver' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.pizzas > 15) {
    errors.pizzas = 'Are you mad?'
  }
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="name" component="TextField" hintText="Name" floatingLabelText="Name"/>
      </div>
      <div>
        <Field name="email" component="TextField" hintText="Email" floatingLabelText="Email"/>
      </div>
      <div>
        <Field name="delivery" component="RadioButtonGroup">
          <RadioButton value="pickup" label="Pickup"/>
          <RadioButton value="delivery" label="Delivery"/>
        </Field>
      </div>
      <div>
        <Field
          name="pizzas"
          component="Slider"
          description="How many pizzas do you want?"
          defaultValue={0}
          min={0}
          max={20}
          step={1}/>
      </div>
      <div>
        <Field
          name="driver"
          component="SelectField"
          hintText="Driver"
          floatingLabelText="Driver">
          <MenuItem value="alice@redux-pizza.com" primaryText="Alice"/>
          <MenuItem value="bob@redux-pizza.com" primaryText="Bob"/>
          <MenuItem value="carl@redux-pizza.com" primaryText="Carl"/>
        </Field>
      </div>
      <div>
        <Field name="thinCrust" component="Toggle" label="Thin Crust" labelPosition="right"/>
      </div>
      <div>
        <Field name="pepperoni" component="Checkbox" label="Pepperoni"/>
      </div>
      <div>
        <Field name="mushrooms" component="Checkbox" label="Mushrooms"/>
      </div>
      <div>
        <Field name="peppers" component="Checkbox" label="Peppers"/>
      </div>
      <div>
        <Field
          name="notes"
          component="TextField"
          hintText="Notes"
          floatingLabelText="Notes"
          multiLine={true}
          rows={2}/>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'example',
  adapter,  // <----------- give redux-form the adapter here
  validate
})(Form)
