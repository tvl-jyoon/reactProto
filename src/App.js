import React, { Component } from 'react';
import Header from './components/Header'
import SnsPage from './components/SnsPage';
import BottomNav from './components/BottomNav'
import TravelSearch from './components/TravelSearch'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {amber500, grey100, grey500, grey400, grey300} from 'material-ui/styles/colors';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    // primary1Color: amber500,
    // primary2Color: grey400,
    // accent1Color: grey100,
    // accent2Color: grey500,
    // textColor: '#000000',
    // borderColor: grey300,
    // textColor: yellow700
  },
});

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.state = {open: false};
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <div>
          <Header/>
          {this.state.selectedIndex == 2 ? <TravelSearch/> : null}


          <BottomNav/>

        </div>
      </MuiThemeProvider>
    );
  }
}
