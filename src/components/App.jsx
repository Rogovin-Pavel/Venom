import React, {Component} from 'react';
import Header from './Header';
import './../stylesheets/body.css';
import SideBar from './SideBar';
import Content from './Content';

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
          <div className="main__content">
            <SideBar />
            <Content />
          </div>
        </div>
      )
  }
};

export default App;