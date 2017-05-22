import React, { Component } from 'react';
import Header from './components/Header'
import SnsPage from './components/SnsPage';
import BottomNav from './components/BottomNav';
import TravelSearchPage from './components/TravelSearch';
import MyPortfolioPage from './components/MyPortfolio';
import EventPage from './components/Event';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {amber500, grey100, grey500, grey400, grey300} from 'material-ui/styles/colors';
import View from 'react-flexbox'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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
    this.handleBottomNavClick = this.handleBottomNavClick.bind(this);
    this.state = {
      open: false,
      curPage: null,
    };
  }

  handleBottomNavClick(i) {
    this.setState({
      curPage:i
    });
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
          <Router>
            <Route path='/SnsPage' component={SnsPageComponent} />
          </Router>
          <Router>
            <Route path='/TravelSearchPage' component={TravelSearchComponet} />
          </Router>

          {this.state.curPage == "SnsPage" ? <SnsPage/>: null}
          {this.state.curPage == "TravelSearchPage" ? <TravelSearchPage/>: null}
          {this.state.curPage == "MyPortfolioPage" ? <MyPortfolioPage/>: null}
          {this.state.curPage == "EventPage" ? <EventPage/>: null}
            <BottomNav
              onClick={(i) => this.handleBottomNavClick(i)}
              />

        <View column height="56"/>
        </div>
      </MuiThemeProvider>
    );
  }

}
const SnsPageComponent = () => <SnsPage/>
const TravelSearchComponet = () => <TravelSearchPage/>
