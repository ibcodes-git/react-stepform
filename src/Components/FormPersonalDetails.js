import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    prev = e => {
        e.preventDefault();
        this.props.prevStep();
    };
   render() {
    const { values, handleChange} = this.props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title = "Enter Personal Details" />
                <TextField 
                hintText= "Enter your occupation"
                floatingLabelText = "Occupation"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
                />
                <br/>
                <TextField
                 hintText = "Enter your city"
                floatingLabelText = "City" 
                onChange={handleChange('city')}
                defaultValue={values.city}
                />
                 <br/>
                <TextField
                 hintText = "Enter your bio"
                 floatingLabelText = "Bio" 
                 onChange={handleChange('bio')}
                 defaultValue={values.bio}
                 />
                 <br/>
                 <RaisedButton
                  label = "continue"
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

export default FormPersonalDetails