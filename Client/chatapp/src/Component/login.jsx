import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Card, TextField, Button, Checkbox } from '@material-ui/core'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
export class login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }

    }
    handleRegister = () => {
        this.props.history.push('/register')
    }
    render() {
        return (
            <div className="login_container">
                <center>
                    <Card className="loginCard" style={{ justifyContent: 'center', width: '30em', height: '70vh', marginTop: '100px', backgroundColor: 'grey' }}>
                        <div style={{ marginTop: '60px' }}>
                            <h2>Member Login</h2>
                        </div>
                        <TextField
                            id="outlined-basic"
                            label="email"
                            variant="standard"
                            type="email">
                        </TextField>

                        <br />

                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="standard"
                            type="password">
                        </TextField>

                        <br />

                        <div style={{ marginTop: '10px', marginRight: "80px" }}>
                            <Checkbox value="remember" color="primary" />Remember me
                        </div>

                        <div style={{ marginTop: "10px", marginBottom: "20px" }}>
                            <Button className="Btn" onClick={this.handleRegister} variant="contained" color="primary" style={{ width: "16em" }}>
                                login
                            </Button>
                        </div>

                        <Grid style={{ marginTop: "10px", marginBottom: "20px" }}>
                            Don't have an account  <Link href="/register" >Sign Up</Link>
                        </Grid>

                        <Grid>
                            <Link href="" variant="body2">
                                Forgot password?
                                 </Link>
                        </Grid>
                    </Card>
                </center>
            </div>
        )
    }
}
export default withRouter(login)
