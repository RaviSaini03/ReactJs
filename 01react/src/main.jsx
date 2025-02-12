import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
  return(
    <h1>Ravi Saini</h1>
  )
}

const MyElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)

const SecondElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'reach out google'
)

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <MyApp/>
  </>

  // MyElement

  // SecondElement
)
