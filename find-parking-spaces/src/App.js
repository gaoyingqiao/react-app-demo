import React from 'react'
import {
  Page,
  Navigator,
} from 'react-onsenui'
import { inject, observer } from 'mobx-react'
import Tabbar from 'pages/Tabbar.jsx'
import StartPage from 'pages/StartPage.jsx'

// @inject('commonStore')
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderPage = this.renderPage.bind(this);
  }

  componentDidMount() {
  }

  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;
    this.navigator = navigator;
    return React.createElement(route.component, props);
  }

  render() {
    // const { token } = this.props.commonStore;
    // console.log('render token', token);
    return (
      <Page>
        <Navigator
          initialRoute={{
            // component: Tabbar,
            component: StartPage,
            // component: token ? Home : About,
            // props: { key: Tabbar },
            props: { key: StartPage },
          }}
          renderPage={this.renderPage}
        />
      </Page>
    );
  }
}

export default App;
