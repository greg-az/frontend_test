import Home from '../home'
import React from 'react'
import './App.css'

const App = () => (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">
          Welcome to the Vet Radar front end test
        </h1>
      </header>
    <main>
      <div className ="container">
        <div className = "row">
        <Home></Home>
        </div>
      </div>
    </main>
  </div>
)

export default App