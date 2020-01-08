import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, TextField } from '@material-ui/core'
class register extends Component {

    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name:'',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        console.log(user);
    }

    render() {
        return (

            <div className="container" style={{ marginTop: '50px', width: '500px' ,height: '700px'}}>
                 <center>
                    <Card>
                        <h2 style={{ marginBottom: '40px' }}>Registration</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                            <TextField id="standard-basic" 
                            type="text"
                            placeholder="First Name"
                            first_name="first_name"
                            onChange={this.handleInputChange}
                            value={this.state.first_name}
                            />
                            </div>

                            <div className="form-group">
                            <TextField id="standard-basic" 
                            type="text"
                            placeholder= "Last Name"
                            last_name="last_name"
                            onChange={this.handleInputChange}
                            value={this.state.last_name}
                            />
                            </div>

                            <div className="form-group">
                            <TextField id="standard-basic" 
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={this.handleInputChange}
                                    value={this.state.email}
                                />
                            </div>

                            <div className="form-group">
                            <TextField id="standard-basic" 
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                    name="password"
                                    onChange={this.handleInputChange}
                                    value={this.state.password}
                                />
                            </div>

                            <div className="form-group">
                            <TextField id="standard-basic" 
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="form-control"
                                    name="password_confirm"
                                    onChange={this.handleInputChange}
                                    value={this.state.password_confirm}
                                />
                            </div>

                            <div className="form-group">
                                <button type="submit" >
                                    Register User
                    </button>
                            </div>
                        </form>
                    </Card>
                    </center>
            </div>
        )
    }
}

export default withRouter(register);