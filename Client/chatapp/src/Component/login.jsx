import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Card, TextField, Button, Checkbox } from '@material-ui/core'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
export class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: ''
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }
   
    handleChangeEmail=event=>
    {
        this.setState({ email: event.target.value });
    };

    validate = () => 
    {
        let emailError = "";
        
        if (!this.state.email) {
            emailError = "* enetr a vaild email";
        }
        if (emailError) {
            this.setState({ emailError});
            return false;
        }
        return true;

    }
    handleSubmit(event)
    {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
        }
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="login_container">
                <center>
                    <Card className="loginCard" style={{ justifyContent: 'center', width: '30em', height: '70vh', marginTop: '100px', backgroundColor: '#FFEFD5' }}>
                        <div style={{ marginTop: '60px' }}>
                            <h2>Member Login</h2>
                        </div>
                        <TextField
                            id="outlined-basic"
                            label="email"
                            variant="standard"
                            type="email"
                                value={this.state.email}
                                    onChange={this.handleChangeEmail}>
                        </TextField>

                        <br />

                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="standard"
                            type="password">
                           
                        </TextField>

                        <br />

                        <div className="check"style={{ marginTop: '10px', marginRight: "80px" }}>
                            <Checkbox value="remember" color="primary" />Remember me
                        </div>

                        <div className="button"style={{ marginTop: "10px", marginBottom: "20px" }}>
                            <Button className="Btn" onClick={this.handleRegister} variant="contained" color="primary" style={{ width: "16em" }}>
                                login
                            </Button>
                        </div>

                        <Grid style={{ marginTop: "10px", marginBottom: "20px" }}>
                            Don't have an account  <Link href="/register" >Sign Up</Link>
                        </Grid>

                        <Grid>
                            <Link href="" variant="body2">
                                Forgot password?<Link href="/forgetPassword"></Link>
                                 </Link>
                        </Grid>
                    </Card>
                </center>
            </div>
            </form>
        )
    }
}
export default withRouter(login)
