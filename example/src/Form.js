import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import {
  Checkbox,
  RadioGroup,
  Select,
  TextField,
  Switch
} from 'redux-form-material-ui'

// validation functions
const required = value => (value == null ? 'Required' : undefined)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined

class Form extends Component {
  componentDidMount() {
    // this.ref // the Field
    //   .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
    //   .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
    //   .focus() // on TextField
  }

  saveRef = ref => (this.ref = ref)

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="name"
            component={TextField}
            placeholder="Name"
            label="Name"
            validate={required}
            ref={this.saveRef}
            withRef
          />
        </div>
        <div>
          <Field
            name="email"
            component={TextField}
            placeholder="Email"
            label="Email"
            validate={[required, email]}
          />
        </div>
        <div>
          <Field name="delivery" component={RadioGroup}>
            <FormControlLabel
              value="pickup"
              control={<Radio />}
              label="Pickup"
            />
            <FormControlLabel
              value="delivery"
              control={<Radio />}
              label="Delivery"
            />
          </Field>
        </div>
        <div>
          <FormControl>
            <InputLabel htmlFor="driver">Driver</InputLabel>
            <Field
              name="driver"
              component={Select}
              placeholder="Driver"
              validate={required}
            >
              <MenuItem value="alice@redux-pizza.com">Alice</MenuItem>
              <MenuItem value="bob@redux-pizza.com">Bob</MenuItem>
              <MenuItem value="carl@redux-pizza.com">Carl</MenuItem>
            </Field>
          </FormControl>
        </div>
        <div className="list-margin">
          <FormControlLabel
            control={<Field name="thinCrust" component={Switch} />}
            label="Thin Chrust"
          />
        </div>
        <div className="list-margin">
          <FormControlLabel
            control={<Field name="pepperoni" component={Checkbox} />}
            label="Pepperoni"
          />
        </div>
        <div className="list-margin">
          <FormControlLabel
            control={<Field name="mushrooms" component={Checkbox} />}
            label="Mushrooms"
          />
        </div>
        <div className="list-margin">
          <FormControlLabel
            control={<Field name="peppers" component={Checkbox} />}
            label="Peppers"
          />
        </div>
        <div>
          <Field
            name="notes"
            component={TextField}
            placeholder="Notes"
            label="Notes"
            multiline={true}
            rows={4}
          />
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
        </div>
      </form>
    )
  }
}

const selector = formValueSelector('example')

Form = connect(state => ({
  numPizzas: selector(state, 'pizzas')
}))(Form)

Form = reduxForm({
  form: 'example',
  initialValues: {
    delivery: 'delivery',
    name: 'Jane Doe',
    cheese: 'Cheddar',
    thinCrust: true,
    pizzas: 1
  }
})(Form)

export default Form
