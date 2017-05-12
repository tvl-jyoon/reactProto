import React, {Component} from 'react';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Map from 'material-ui/svg-icons/maps/map';
import Work from 'material-ui/svg-icons/action/work';
import Sns from 'material-ui/svg-icons/social/mood';
import Magnifier from 'material-ui/svg-icons/action/search';

const nearbyIcon = <IconLocationOn />;
const map = <Map/>
const work = <Work/>
const sns = <Sns/>
const magnifier = <Magnifier/>

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
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
              onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem

              icon={magnifier}
              onTouchTap={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Plan a trip"
              icon={map}
              onTouchTap={() => this.select(2)}
            />
            <BottomNavigationItem
              label="My Portfolio"
              icon={work}
              onTouchTap={() => this.select(3)}
            />
            <BottomNavigationItem
              label="Events"
              icon={nearbyIcon}
              onTouchTap={() => this.select(4)}
            />
          </BottomNavigation>

      </div>
    );
  }
}
