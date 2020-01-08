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
    render() {
        return (

            <div className="container" style={{ marginTop: '50px', width: '500px' ,height: '700px'}}>
                <center>
                    <Card>
                        
                        <h2 style={{ marginBottom: '40px' }}>Registration</h2>
                            <div className="form-group">
                            <TextField id="standard-basic" 
                            type="text"
                            placeholder="Name"
                            name="name"
                            />
                            </div>
                            <div className="form-group">
                            <TextField id="standard-basic" 
                                    type="email"
                                    placeholder="Email"
                                   />
                            </div>

                            <div className="form-group">
                            <TextField id="standard-basic" 
                                    type="password"
                                    placeholder="Password"
                                    />
                            </div>
                            <div className="form-group">
                            <TextField id="standard-basic" 
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="form-control"
                                 
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" >
                                    Register User
                    </button>
                    <button type="submit" >
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