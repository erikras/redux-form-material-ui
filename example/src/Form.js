import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle
} from 'redux-form-material-ui'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'name', 'email', 'driver', 'when' ]
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

class Form extends Component {
  componentDidMount() {
    this.refs.name            // the Field
      .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
      .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
      .focus()                // on TextField
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="name" component={TextField} hintText="Name" floatingLabelText="Name"
            ref="name" withRef/>
        </div>
        <div>
          <Field name="email" component={TextField} hintText="Email" floatingLabelText="Email"/>
        </div>
        <div>
          <Field name="delivery" component={RadioButtonGroup}>
            <RadioButton value="pickup" label="Pickup"/>
            <RadioButton value="delivery" label="Delivery"/>
          </Field>
        </div>
        <div>
          <Field
            name="pizzas"
            component={Slider}
            description="How many pizzas do you want?"
            defaultValue={0}
            min={0}
            max={20}
            step={1}/>
        </div>
        <div>
          <Field
            name="driver"
            component={SelectField}
            hintText="Driver"
            floatingLabelText="Driver">
            <MenuItem value="alice@redux-pizza.com" primaryText="Alice"/>
            <MenuItem value="bob@redux-pizza.com" primaryText="Bob"/>
            <MenuItem value="carl@redux-pizza.com" primaryText="Carl"/>
          </Field>
        </div>
        <div>
          <Field name="thinCrust" component={Toggle} label="Thin Crust" labelPosition="right"/>
        </div>
        <div>
          <Field name="pepperoni" component={Checkbox}
            onCheck={value => {
              console.log('onCheck ', value )
            }}
            label="Pepperoni"/>
        </div>
        <div>
          <Field name="mushrooms" component={Checkbox} label="Mushrooms"/>
        </div>
        <div>
          <Field name="peppers" component={Checkbox} label="Peppers"/>
        </div>
        <div>
          <Field name="when"
            component={DatePicker}
            defaultValue={null} // DatePicker requires an object,
                                // and redux-form defaults to ''
            onChange={(value) => {
              console.log('date changed ', value)
            }}
            hintText="Day of delivery?"/>
        </div>
        <div>
          <Field name="at"
            component={TimePicker}
            defaultValue={null} // TimePicker requires an object,
                                // and redux-form defaults to ''
            onChange={(value) => {
              console.log('time changed ', value)
            }}
            hintText="At what time?"/>
        </div>
        <div>
          <Field
            name="notes"
            component={TextField}
            hintText="Notes"
            floatingLabelText="Notes"
            multiLine={true}
            rows={2}/>
        </div>
        <div>
          <Field
            name="cheese"
            component={AutoComplete}
            floatingLabelText="Cheese"
            openOnFocus={true}
            filter={MUIAutoComplete.fuzzyFilter}
            onNewRequest={value => {
              console.log('AutoComplete ', value)
            }}
            dataSource={[ 'Cheddar', 'Mozzarella', 'Parmesan', 'Provolone' ]}
            />
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'example',
  initialValues: {
    delivery: 'delivery',
    name: 'Jane Doe',
    at: new Date(),
    cheese: 'Cheddar'
  },
  validate
})(Form)
