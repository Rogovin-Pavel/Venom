import React, {Component} from 'react';
import Header from './Header';
import './../stylesheets/body.css';
import SideBar from './SideBar';
import Content from './Content';
import data from './../data/data';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        open: {
          historyState: false,
          comicsState: false,
          filmographyState: false,
          albumState: false
        }
      }
      this.changePage = this.changePage.bind(this);
  }

  changePage(history, comics, filmography, album) {
    this.setState(
      {
        open: {
          historyState: history,
          comicsState: comics,
          filmographyState: filmography,
          albumState: album
        }
      }
    )
  }

  render() {
      const { changePage } = this;
      const { open } = this.state;
      return (
        <div className="body">
          <Header />
          <div className="main__content">
            <SideBar onPage={changePage} o={open}/>
            <Content {...data} o={open}/>
          </div>
        </div>
      )
  }
};

export default App;