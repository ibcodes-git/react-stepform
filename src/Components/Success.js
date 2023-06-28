import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep(); //Process form
    }
   render() {
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title = "Success" />
                <h1>Thank you for your submission</h1>
                <p style={{color:'blue', fontSize:'20px'}}>You will get an email with further updates.</p>
            </React.Fragment>
        </MuiThemeProvider>
      
    )
  }
}

export default Success