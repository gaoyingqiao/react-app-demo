import React, { Component } from 'react'
import Routes from 'routes/index'
import { Provider } from 'mobx-react'
import stores from 'stores/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider {...stores}>
          <Routes />
        </Provider>
      </div>
    )
  }
}

export default App
