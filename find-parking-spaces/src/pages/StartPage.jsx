import React, { Component } from 'react'
import { Page, Button } from 'react-onsenui'
import { inject, observer } from 'mobx-react'
import './StartPage.less'
import logo from '../assets/test.png'

@inject('homeStore')
@observer
class StartPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    }
  }

  componentDidMount() {
  }


  render() {
    return (
      <Page>
        <div className="startPageWrap">
          <img className="logoImg" src={logo} alt="" />
          <Button modifier="outline">登录</Button>
          <span className="breackText">or</span>
          <Button modifier="outline">注册</Button>
        </div>
      </Page>
    )
  }
}

export default StartPage