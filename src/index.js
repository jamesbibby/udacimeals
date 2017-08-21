import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducers'
import { createStore } from 'redux'

const store = createStore(reducer)
console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
