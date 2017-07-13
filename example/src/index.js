import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Code, Markdown, Values } from 'redux-form-website-template'
injectTapEventPlugin()
const dest = document.getElementById('content')
const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

let render = () => {
  const Form = require('./Form').default
  const readme = require('./Example.md')
  const raw = require('!!raw-loader!./Form')
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider>
        <div>
          <Markdown content={readme} />

          <h2>Form</h2>

          <Form onSubmit={showResults} />

          <Values form="example" />

          <h2>Code</h2>

          <h4>Form.js</h4>

          <Code source={raw} />
        </div>
      </MuiThemeProvider>
    </Provider>,
    dest
  )
}

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render
  const renderError = error => {
    console.error('ERROR:', error) // eslint-disable-line no-console
    const RedBox = require('redbox-react')
    ReactDOM.render(<RedBox error={error} className="redbox" />, dest)
  }
  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }
  const rerender = () => {
    setTimeout(render)
  }
  module.hot.accept('./Form', rerender)
  module.hot.accept('./Example.md', rerender)
  module.hot.accept('!!raw-loader!./Form', rerender)
}

render()
