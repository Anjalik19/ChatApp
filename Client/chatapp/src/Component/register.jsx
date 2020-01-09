import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, TextField, Link } from '@material-ui/core'

class register extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            mobileNo: '',
            confirmPassword: '',
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMobileNo = this.handleChangeMobileNo.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName = event => {
        this.setState({ name: event.target.value });
    };


    handleChangeLastName = event => {
        this.setState({ lastname: event.target.value });
    };


    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    };


    handleChangeMobileNo = event => {
        this.setState({ mobileNo: event.target.value });
    };


    handleChangePassword = event => {
        this.setState({
            password: event.target.value,
        });
    };

    handleChangeConfirmPassword = event => {
        this.setState({ confirmPassword: event.target.value });
    };


    validate = () => {
        let nameError = "";
        let lastNameError = "";
        let emailError = "";
        let mobileNoError = "";
        let passwordError = "";
        let confirmPasswordError = "";


        if (!this.state.name) {
            nameError = "* name cannot be empty";
        }

        if (!this.state.lastNameError) {
            lastNameError = "* Last name cannot be empty";
        }

        if (!this.state.email.includes('@')) {
            emailError = '* inavlid email';
            
        }


        if (!this.state.mobileNo) {
            mobileNoError = "* Mobile Number cannot be empty";
            
        }

        if (!this.state.password.length<6) {
            passwordError = "* password length should be greater than 6";
        }
        if (emailError || nameError || passwordError || mobileNoError || lastNameError || confirmPasswordError) {
            this.setState({ emailError, nameError, passwordError, mobileNoError, lastNameError, confirmPasswordError });
            return false;
        }
        return true;
    }

    handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
        }
    };


    handleRegister = () => {
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
                                    type="mobileNo"
                                    placeholder="Mobile Number"
                                    value={this.state.mobileNo}
                                    onChange={this.handleChangeMobileNo}
                                />
                                <div style={{ fontSize: 12, color: 'red' }}>
                                    {this.state.mobileNoError}
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

                                <button type="submit" >
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
export default withRouter(register);




