import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import { Link } from 'react-router-dom'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Map from 'material-ui/svg-icons/maps/map';
import Work from 'material-ui/svg-icons/action/work';
import Sns from 'material-ui/svg-icons/social/mood';
import Paper from 'material-ui/Paper';

const nearbyIcon = <IconLocationOn />;
const map = <Map/>
const work = <Work/>
const sns = <Sns/>

export default class BottomNav extends Component {
  state = {
    selectedIndex: null,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <div>
      <Paper zDepth={1}>
          <BottomNavigation
            selectedIndex={this.state.selectedIndex}
            style={{ height: 56, position:'fixed', elevation: 8, left: 0, bottom: 0, right: 0 }}

          >
            <BottomNavigationItem
              icon={sns}
              label="SNS Page"
              onTouchTap={() => this.props.onClick("SnsPage")}
            />

            <BottomNavigationItem
              label="Plan a trip"
              icon={map}
              onTouchTap={() => this.props.onClick("TravelSearchPage")}
            />
            <BottomNavigationItem
              label="My Portfolio"
              icon={work}
              onTouchTap={() => this.props.onClick("MyPortfolioPage")}
            />
            <BottomNavigationItem
              label="Events"
              icon={nearbyIcon}
              onTouchTap={() => this.props.onClick("EventPage")}
            />
          </BottomNavigation>
          </Paper>
      </div>
    );
  }
}
