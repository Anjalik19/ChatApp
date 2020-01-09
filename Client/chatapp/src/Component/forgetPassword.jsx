//import react
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
export class forgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state={
        email:''
    }
  }

  onChangeEmail=(e)=>{
    var  Email=e.target.value;
    this.setState({
        email:Email
    })
}

  render() {
    return (
      <form className="forgotpwd">
        
          <h3 className="forgotpwd">Enter email</h3>         
          <div>
            <TextField
              id="email"
              type="email"
              variant="outlined"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>       
          <div>
            <Button onClick={this.handleClick}  style={{backgroundColor:"#3498DB"}}>
              Submit
            </Button>
          </div>
      
      </form >
    );
  }
}
export default withRouter(forgetPassword);
