import React from 'react';
import { RadioButton,AppBar,Toolbar,Typography,Button,TextField,Card } from 'material-ui';
import Controller from '../controller/userController';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:4000');
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUsers: [],
      message: [],
      email: '',
      msg: '',
      Sender: '',
      Receiver: '',
      msgDisplay: ''
    }
  }
  componentDidMount() {
    Controller.getAllUseres()
      .then((result) => {
        this.setState({
          loginUsers: result
        })
        console.log("result:", result);
      }).catch((err) => {
        console.log("error:", err);
      })
    Controller.getUserMsg()
      .then((results) => {
        this.setState({
          message: results
        })
        console.log("all messages", results);
      }).catch((err) => {
        console.log("error", err);
      })
    socket.on('Message', (result) => {
      const message = this.state.message;
      message.push(result);
      this.setState({ message: message });
    })
  }
  handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSend(e);
    }
  }
  handleMsg = (e) => {
    var msg = e.target.value;
    console.log("msg-----------", msg);
    this.setState({
      msg: msg
    })
  }
  handleLogout = () => {
    this.props.history.push('/login');
  }
  handleMenuClick = (e) => {
    var newColor = this.state.color ==='' ? 'burlywood' : '';
    this.setState({ color : newColor})
    var Receiver = e.target.textContent;
    console.log("receiver", Receiver);
    this.setState({
      Receiver: Receiver
    })
  }
  handleSend = () => {
    var Sender = localStorage.getItem('Sender');
    this.setState({
      Sender: Sender
    })
    var data = {
      sender: Sender,
      receiver: this.state.Receiver,
      message: this.state.msg
    }
    console.log(data)
    socket.emit('NewMessage', data);
    this.setState({
      msg: '',
      anchorEl: null
    })
  }
  render() {
      let onlineUsers = this.state.loginUsers.map((key) => {
      if (key.email !== localStorage.getItem('Sender')) {
        return (
          <div>
            <RadioButton style={{background:this.state.color}} onClick={this.handleMenuClick}>{key.firstName}</RadioButton> 
          </div>
        )
      }
      else {
        return true;
      }
    })
    var msgDisplay = this.state.message.map((key) => {
      const s = localStorage.getItem('Sender');
      return (
            <div>
          {
            key.sender === s ?
              (<div className="ReceiverSide">
                <div>{key.message}</div>
              </div>)
              : <div className='SenderSide'>
                <div> {key.message}</div>
              </div>
          }
        </div>
      )
    })
    return (
      <Card>
        <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <h4><strong>WELCOME TO CHAT APP</strong></h4>
            </Typography>
            <Button style={{ marginLeft: '900px' }} className="logout" color="inherit" onClick={this.handleLogout}>Logout</Button>
          </Toolbar>
        </AppBar>
        <div>
          <Card className="dcard">
            {onlineUsers}
          </Card>
        </div>
        <div>
          <Card className="mcard">
            {localStorage.getItem('Sender')}
            {/* <div>{msgArray}</div> */}
            <div>{msgDisplay}</div>
          </Card>
        </div>
        <div className="messege">
          <TextField
            id="outlined-multiline-flexible"
            label="messege"
            multiline
            fullWidth
            rowsMax="15"
            margin="normal"
            value={this.state.msg}
            helperText="messege"
            variant="outlined"
            onChange={this.handleMsg}
            onKeyPress={this.handleEnter}
          />
          <Button onClick={this.handleSend} variant="contained" color="primary">
            send
            </Button>
        </div>
      </Card>
    )
  }
}