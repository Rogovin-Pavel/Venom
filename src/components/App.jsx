import React, {Component} from 'react';
import '../stylesheets/body.css';

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
      const {pOpen} = this;
      const {pOpened} = this.state;
      return (
        <div className="body">
          <p className={pOpened ? "body__p" : "body__p hidden"}>EASY PEASY LEMON SQUEEZY!</p>
          <button onClick={pOpen} className="body__button">PRESS THIS BUTTON</button>
        </div>
      )
  }
};

export default App;