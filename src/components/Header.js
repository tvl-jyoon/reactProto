import React, {Component} from 'react';
import {MenuItem, AppBar, Drawer} from 'material-ui';
import Divider from 'material-ui/Divider';
import {Card,  CardMedia, CardTitle} from 'material-ui/Card';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({
     open: !this.state.open
   });
  }


  render() {
    return (
      <div>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <Card>

          <CardMedia
            overlay={<CardTitle title="TVL'er"
            subtitle="" />}

          >
            <img src="images/profileImage.png"/>
          </CardMedia>
        </Card>

          <MenuItem>About Travelio</MenuItem>
          <MenuItem>Travelio Executives</MenuItem>
          <MenuItem>SNS Page</MenuItem>
          <MenuItem>Sales Deck</MenuItem>
          <Divider />
          <MenuItem>Prototype</MenuItem>
        </Drawer>
        <AppBar title="Travelio"
          style={{top: 0}}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
      </div>
    );
  }
}
