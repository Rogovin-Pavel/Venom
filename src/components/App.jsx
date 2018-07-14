import React, {Component} from 'react';
import Header from './Header';
import './../stylesheets/body.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        pOpened: true
      }
      this.pOpen = this.pOpen.bind(this);
  }

  pOpen(){
    this.setState(
      {
        pOpened: !this.state.pOpened
      }
    )
    console.log(this.state)
  }

  render() {
      //const {pOpen} = this;
      //const {pOpened} = this.state;
      return (
        <div className="body">
          <Header />
        </div>
      )
  }
};

export default App;