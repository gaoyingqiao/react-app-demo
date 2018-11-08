/* global */
import React, { Component } from 'react'
import { Page, Tab, Tabbar as OTabbar } from 'react-onsenui'
import { inject, observer } from 'mobx-react'
import Home from 'pages/home.jsx'
import styles from './Tabbar.less'

@inject('homeStore')
@observer
class Tabbar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      index: 0,
    }
  }

  componentDidMount() {
  }

  handleChangeTab = (event) => {
    // if (event.index !== this.props.commonStore.tabbarIndex) {
    //   this.props.commonStore.setTabbarIndex(event.index);
    //   if (event.index === 1) this.props.dispatchNoticeStore.setBillNumber();
    // }
  }

  render() {
    return (
      <Page className={styles.tabbar}>
        <OTabbar
          onPreChange={event => this.handleChangeTab(event)}
          position="bottom"
          index={this.state.index}
          renderTabs={(activeIndex, tabbar) => [
            {
              content: <Home key="Home" active={activeIndex === 0} navigator={this.props.navigator} />,
              tab: <Tab key="home" label="首页" icon="ion-shome" />,
            }
          ]}
        />
      </Page>
    )
  }
}

export default Tabbar