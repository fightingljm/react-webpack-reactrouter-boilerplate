import React from 'react';

import Header from './components/Header.js'
import Footer from './components/Footer.js'

class App extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }
  render () {
    return(
      <div>
        <Header />
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default App;
