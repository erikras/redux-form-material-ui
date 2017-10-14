// Type definitions for redux-form-material-ui v4.3.0
// Project: https://github.com/erikras/redux-form-material-ui
// Definitions by: Andrew Olson <https://github.com/arolson101>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types='material-ui'/>
/// <reference types='react'/>

declare module 'redux-form-material-ui' {
  export class AutoComplete extends React.Component<__MaterialUI.AutoCompleteProps, any> {}
  export class Checkbox extends React.Component<__MaterialUI.Switches.CheckboxProps, any> {}
  export class TimePicker extends React.Component<__MaterialUI.TimePickerProps, any> {}
  export class DatePicker extends React.Component<__MaterialUI.DatePicker.DatePickerProps, any> {}
  export class RadioButtonGroup extends React.Component<__MaterialUI.Switches.RadioButtonGroupProps, any> {}
  export class SelectField extends React.Component<__MaterialUI.SelectFieldProps, any> {}
  export class Slider extends React.Component<__MaterialUI.SliderProps, any> {}
  export class TextField extends React.Component<__MaterialUI.TextFieldProps, any> {}
  export class Toggle extends React.Component<__MaterialUI.Switches.ToggleProps, any> {}
}
