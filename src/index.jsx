import React from 'react'
import ReactDOM from 'react-dom'
import indexRoutes from './components/Routes/Routes'

ReactDOM.render(
    <React.StrictMode>{indexRoutes()}</React.StrictMode>,
    document.getElementById('root'),
)
