import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import{List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep(); //Process form
    };
    prev = e => {
        e.preventDefault();
        this.props.prevStep();
    };
   render() {
    const { values:{ firstName, lastName, email, occupation, city, bio}} = this.props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title = "Confirm User Data" />
                <List>
                    <ListItem
                    primaryText = "First Name"
                    secondaryText = {firstName} 
                    />
                    <ListItem
                    primaryText = "Last Name"
                    secondaryText = {lastName} 
                    />
                    <ListItem
                    primaryText = "Email"
                    secondaryText = {email} 
                    />
                    <ListItem
                    primaryText = "Occupatiom"
                    secondaryText = {occupation} 
                    />
                    <ListItem
                    primaryText = "City"
                    secondaryText = {city} 
                    />
                    <ListItem
                    primaryText = "Bio"
                    secondaryText = {bio} 
                    />
                </List>
                 <RaisedButton
                  label = "Confirm & Continue"
                  primary = "true"
                  style={{margin:20}}
                  onClick={this.continue} />
                 <RaisedButton
                  label = "back"
                  secondary = "true"
                  style={{margin:20}}
                  onClick={this.prev} />
            </React.Fragment>
        </MuiThemeProvider>
      
    )
  }
}

export default Confirm