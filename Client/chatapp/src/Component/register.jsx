import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, TextField } from '@material-ui/core'
class register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
        }
    }
    handleRegister = () => {
        this.props.history.push('/login')
    }
    render() {
        return (
            <div className="login_container">
            <center>
            <Card style={{justifyContent: 'center',width: '30em', height:'70vh',marginTop: '60px'}}>
                    
                    <div style={{marginTop: '50px'}}>

                    <h2>Registration</h2>

                    </div>
                        <div className="form-group" style={{marginBottom: '10px'}}>
                        <TextField id="standard-basic" 
                        type="text"
                        placeholder="Name"
                        name="name"
                        />
                        </div>
                        <div className="form-group" style={{marginBottom: '10px'}}>
                        <TextField id="standard-basic" 
                                type="email"
                                placeholder="Email"
                               />
                        </div>

                        <div className="form-group" style={{marginBottom: '10px'}}>
                        <TextField id="standard-basic" 
                                type="password"
                                placeholder="Password"
                                />
                        </div>
                        <div className="form-group" style={{marginBottom: '60px'}}>
                        <TextField id="standard-basic" 
                                type="password"
                                placeholder="Confirm Password"
                                className="form-control"
                             
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" style={{marginRight:'50px'}}>
                                Register User
                </button>
                <button type="submit" onClick={this.handleRegister}>
                                Cancel
                </button>
                        </div>

                </Card>
            </center>
            </div>
        )
    }
}
export default withRouter(register);




