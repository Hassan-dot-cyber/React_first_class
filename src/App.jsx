import React from 'react'
import Success from './components/Alert/Success'
import Danger from './components/Alert/Danger'
import Warn from './components/Alert/Warning'
function App() {
  return (
    <div>
      <Success text="Record added successfully"/>
      <Danger text="Record Delete successfully"/>
      <Warn text="Record Delete successfully"/>
    </div>
  )
}

export default App