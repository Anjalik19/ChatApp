import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Card, TextField, Button } from '@material-ui/core'
export class login extends Component {
    constructor(){
        super();
        this.state={
        email:'',
        password:''
        }

       }
       handleRegister=()=>{
        this.props.history.push('/register')
    }
    render() {
        return (
            <div className="login_container">
                <center>
             <Card className="loginCard"  style={{justifyContent:'center' , width: '30em',height: '60vh'}}>  
              <center>
               <div>
                   <h2>Member Login</h2>
               </div>
               
                 <TextField
                     id="outlined-basic"
                     label="email"
                     variant="standard"
                     type="email">
                </TextField>
                 <br/>
                 <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="standard"
                    type="password">
                 </TextField>
                 <br/>
                 </center>
                    <div>
                    <center>
                     <Button className="login_Btn" variant="contained" color="primary">
                        login
                    </Button>
                    <Button className="login_Btn" variant="contained" color="primary">
                        Sign Up
                    </Button>
                    <div className="forgot_password" variant="contained" color="primary" placeholder="bottem-left">
                    <h5>Forgot Password</h5>
                 </div>
                    </center>
                    </div>
             </Card>
             </center>
            </div>
        )
    }
}
export default withRouter(login)
