import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, TextField, Link } from '@material-ui/core'
import controller from '../controller/userController'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        };
    }

    handleChangeName = event => {
        this.setState({ firstname: event.target.value });
    };


    handleChangeLastName = event => {
        this.setState({ lastname: event.target.value });
    };


    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    };

    handleChangePassword = event => {
        this.setState({ password: event.target.value,});
    };

    validate = () => {
        let nameError = "";
        let lastNameError = "";
        let emailError = "";
        let passwordError = "";

        if (!this.state.name) {
            nameError = "* name cannot be empty";
        }

        if (!this.state.lastNameError) {
            lastNameError = "* Last name cannot be empty";
        }

        if (!this.state.email.includes('@')) {
            emailError = '* inavlid email';

        }

        if (!this.state.password.length < 6) {
            passwordError = "* password should be greater tha 6";
        }
        if (emailError || nameError || passwordError || lastNameError ) {
            this.setState({ emailError, nameError, passwordError, lastNameError });
            return false;
        }
        return true;
    }

    handleSubmit(event) {
        event.preventDefault();
        let isValid = this.validate();
        if (isValid) {
            console.log(this.state)
        }
    };

    handleRegister = () => {
            const newUser={
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                password:this.state.password,
            }
            controller.Register(newUser)
               this.props.history.push('/login')
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="login_container">
                    <center>
                        <Card style={{ justifyContent: 'center', width: '25em', height: '75vh', marginTop: '60px', backgroundColor: '#FFEFD5' }}>

                            <div style={{ marginTop: '50px' }}>
                                <h2>Registration</h2>
                            </div>


                            <div className="form-group" style={{ marginBottom: '10px' }}>
                                <TextField id="standard-basic"
                                    type="text"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.handleChangeName}
                                    name="name"
                                />
                                <div style={{ fontSize: 12, color: 'red' }}>
                                    {this.state.nameError}
                                </div>
                            </div>


                            <div className="form-group" style={{ marginBottom: '10px' }}>
                                <TextField id="standard-basic"
                                    type="text"
                                    placeholder="Last Name"
                                    value={this.state.lastname}
                                    onChange={this.handleChangeLastName}
                                />
                                <div style={{ fontSize: 12, color: 'red' }}>
                                    {this.state.lastNameError}
                                </div>


                            </div>


                            <div className="form-group" style={{ marginBottom: '10px' }}>
                                <TextField id="standard-basic"
                                    type="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleChangeEmail}
                                />
                                <div style={{ fontSize: 12, color: 'red' }}>
                                    {this.state.emailError}
                                </div>
                            </div>

                            <div className="form-group" style={{ marginBottom: '10px' }}>
                                <TextField id="standard-basic"
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChangePassword}
                                />
                                <div style={{ fontSize: 12, color: 'red' }}>
                                    {this.state.passwordError}
                                </div>
                            </div>


                            <div className="form-group" style={{ marginBottom: '40px' }}>
                                <TextField id="standard-basic"
                                    type="password"
                                    placeholder="Re-Write Password"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChangeConfirmPassword}

                                />
                                <div style={{ fontSize: 12, color: 'red' }}>
                                    {this.state.confirmPasswordError}
                                </div>
                            </div>

                            <div className="form-group">
                                <button type="submit" onClick={this.handleClick} style={{ marginRight: '50px' }}>
                                    Register User
                                 </button>

                                <button type="submit" onClick={this.handleSubmit}>
                                    Cancel<Link href="/login" ></Link>
                                </button>
                            </div>

                        </Card>
                    </center>
                </div>
            </form>
        )
    }
}

export default withRouter(Register);




