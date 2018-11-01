import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject } from 'mobx-react'

@inject('homeStore')
class Home extends Component {
  render() {
    return (
      <div>
        <p>this is home page</p>
        <Link to="/about">go to About</Link>
      </div>
    )
  }
}

export default Home