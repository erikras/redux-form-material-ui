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

// validation functions
const required = value => value == null ? 'Required' : undefined
const email = value => value &&
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined
const tooManyPizzas = value => value > 15 ? 'Are you mad?' : undefined

class Form extends Component {

  constructor(props) {
    super(props)
    this.onSlideChange = this.onSlideChange.bind(this)
    this.state = { pizzas: 0 }
  }

  componentDidMount() {
    this.refs.name            // the Field
      .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
      .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
      .focus()                // on TextField
  }

  onSlideChange(value) {
    this.setState({ pizzas: value })
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="name"
            component={TextField}
            hintText="Name"
            floatingLabelText="Name"
            validate={required}
            ref="name" withRef/>
        </div>
        <div>
          <Field name="email"
            component={TextField}
            hintText="Email"
            floatingLabelText="Email"
            validate={[ required, email ]}/>
        </div>
        <div>
          <Field name="delivery" component={RadioButtonGroup}>
            <RadioButton value="pickup" label="Pickup"/>
            <RadioButton value="delivery" label="Delivery"/>
          </Field>
        </div>
        <div>How many pizzas do you want?</div>
        <div>
          <Field
            name="pizzas"
            component={Slider}
            description={'How many pizzas? (' + this.state.pizzas + ' pizzas chosen)'}
            defaultValue={0}
            format={null}
            min={0}
            max={20}
            step={1}
            onChange={this.onSlideChange}/>
            warn={tooManyPizzas}/>
        </div>
        <div>
          <Field
            name="driver"
            component={SelectField}
            hintText="Driver"
            floatingLabelText="Driver"
            validate={required}>
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
              console.log('onCheck ', value ) // eslint-disable-line no-console
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
            format={null}
            onChange={(value) => {
              console.log('date changed ', value) // eslint-disable-line no-console
            }}
            hintText="Day of delivery?"
            validate={required}/>
        </div>
        <div>
          <Field name="at"
            component={TimePicker}
            format={null}
            defaultValue={null} // TimePicker requires an object,
                                // and redux-form defaults to ''
            onChange={(value) => {
              console.log('time changed ', value) // eslint-disable-line no-console
            }}
            hintText="At what time?"
            validate={required}/>
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
              console.log('AutoComplete ', value) // eslint-disable-line no-console
            }}
            dataSource={[ 'Cheddar', 'Mozzarella', 'Parmesan', 'Provolone' ]}
            />
        </div>
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
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
    cheese: 'Cheddar'
  }
})(Form)
