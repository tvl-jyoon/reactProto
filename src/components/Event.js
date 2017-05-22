import React, {Component} from 'react';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Map from 'material-ui/svg-icons/maps/map';
import Work from 'material-ui/svg-icons/action/work';
import Sns from 'material-ui/svg-icons/social/mood';

const nearbyIcon = <IconLocationOn />;
const map = <Map/>
const work = <Work/>
const sns = <Sns/>

export default class BottomNav extends Component {
  state = {
    selectedIndex: 2,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <div>

          <BottomNavigation
            selectedIndex={this.state.selectedIndex}
            style={{position: 'fixed', bottom: 0}}
          >
            <BottomNavigationItem
              icon={sns}
              label="SNS Page"
              onTouchTap={() => this.props.onClick("SnSPage")}
            />
            <BottomNavigationItem
              label="Plan a trip"
              icon={map}
                onTouchTap={() => this.props.onClick("TravelSearch")}
            />
            <BottomNavigationItem
              label="My Portfolio"
              icon={work}
                onTouchTap={() => this.props.onClick("MyPortfolio")}
            />
            <BottomNavigationItem
              label="Events"
              icon={nearbyIcon}
                onTouchTap={() => this.props.onClick("Event")}
            />
          </BottomNavigation>

      </div>
    );
  }
}
