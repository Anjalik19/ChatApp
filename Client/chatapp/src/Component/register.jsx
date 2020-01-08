import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, TextField,Link } from '@material-ui/core'

const initialState = {
    name: '',
    email: '',
    password: '',
    password_confirm: '',
    nameError: '',
    emailError: '',
    passwordError: '',
}

class register extends Component {

    state = initialState;


    handleChangeName=event =>
    {
        this.setState({ name: event.target.value });
    };


    handleChangeEmail=event=>
    {
        this.setState({ email: event.target.value });
    };

    handleChangePassword = event => {
        this.setState({password: event.target.value,
        });
    };

    
   /* handleConfirmPassword = event => {
        if (event.handleConfirmPassword !== event.handleChangePassword) {
          console.log('password dosnot match');
        }
      };
*/
    validate = () => 
    {
        let nameError = "";
        let emailError = "";
        let passwordError = "";
        if(!this.state.password)
        {
            passwordError="password cannot be empty";
        }
        if (!this.state.name) {
            nameError = "name cannot be empty";
        }
        if (!this.state.email.includes('@')) {
            emailError = 'inavlid email';
        }
        if (emailError || nameError || passwordError) {
            this.setState({ emailError, nameError,passwordError });
            return false;
        }
        return true;
    }

    
    handleSubmit = event => 
    {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
            this.handleSubmit(initialState);
        }
    };


    handleRegister = () =>
    {
        this.props.history.push('/login')
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="login_container">
                    <center>
                        <Card style={{ justifyContent: 'center', width: '25em', height: '70vh', marginTop: '60px', backgroundColor: '#FFEFD5' }}>

                            <div style={{ marginTop: '50px' }}>
                                <h2>Registration</h2>
                                </div>


                            <div className="form-group" style={{ marginBottom: '10px' }}>
                                <TextField id="standard-basic"
                                    type="text"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={(event) => this.handleChangeName(event)}
                                    name="name"
                                />
                                <div style={{ fontSize: 12, color: 'red' }}>
                                    {this.state.nameError}
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
                                />
                                <div style={{ fontSize: 12, color: 'red' }}>
                                    {this.state.passwordError}
                                </div>
                            </div>


                            <div className="form-group" style={{ marginBottom: '60px' }}>
                                <TextField id="standard-basic"
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="form-control"

                                />
                            </div>


                            <div className="form-group">
                                <button type="submit" style={{ marginRight: '50px' }}>
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




