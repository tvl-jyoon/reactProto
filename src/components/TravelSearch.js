import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';

export default class TravelSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1, fromDate: 1, toDate: 1, destination: 1};
    this.setFromDate = this.setFromDate.bind(this);
    this.setToDate = this.setToDate.bind(this);
    this.setBudget = this.setBudget.bind(this);
    this.setDestination = this.setDestination.bind(this);
    this.clickSearch = this.clickSearch.bind(this);
  }

  clickSearch(_) {
    console.log(this.state.value);
    console.log(this.state.fromDate);
    console.log(this.state.toDate);
    console.log(this.state.destination);
  };

  setDestination(_, d) {
    this.setState({destination: d});
  };

  setBudget = (event, index, value) => this.setState({value});

  setFromDate(_, d) {
    this.setState({fromDate: d});
  };

  setToDate(_, d) {
    this.setState({toDate: d});
  };


  render() {
    return (
      <div>

          From: <DatePicker hintText="출발일자를 선택하세요" onChange={this.setFromDate}/>
          To: <DatePicker hintText="도착일자를 선택하세요" onChange={this.setToDate}/><br/>
          도착지: <br/>
          <TextField hintText="원하시는 도착지를 입력하세요" onChange={this.setDestination}/><br/>
          여행경비:<br/>
          <DropDownMenu value={this.state.value} onChange={this.setBudget}>
          <MenuItem value={1} primaryText="100,000원 미만" />
          <MenuItem value={2} primaryText="100,000원 - 150,000원" />
          <MenuItem value={3} primaryText="150,000원 - 200,000원" />
          <MenuItem value={4} primaryText="200,000원 - 250,000원" />
          <MenuItem value={5} primaryText="250,000원 - 300,000원" />
          </DropDownMenu><br/>
         <FlatButton label="Search" primary={true} onTouchTap={this.clickSearch} />
      </div>
    )
  }
}
