import React, {Component} from 'react';
import Header from './Header';
import './../stylesheets/body.css';
import SideBar from './SideBar';
import Content from './Content';
import FanArt from './FanArt';
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

  changePage(history, comics, filmography, art) {
    this.setState(
      {
        open: {
          historyState: history,
          comicsState: comics,
          filmographyState: filmography,
          artState: art
        }
      }
    )
  }

  render() {
      const { changePage } = this;
      const { open } = this.state;
      console.log(open);
      return (
        <div className="body">
          <Header />
          <div className="main__content">
            <SideBar onPage={changePage} o={open}/>
            <Content {...data} o={open}/>
            <FanArt {...data} o={open} />
          </div>
        </div>
      )
  }
};

export default App;