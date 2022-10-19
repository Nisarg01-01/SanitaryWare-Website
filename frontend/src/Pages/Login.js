import React, { Component } from 'react';
// import image from "/image1.jpeg";
import swal from 'sweetalert';
import { Button, TextField, Link } from '@material-ui/core';
import './CSS/Login.css'
const axios = require('axios');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {

    const pwd = bcrypt.hashSync(this.state.password, salt);

    axios.post('http://localhost:2000/login', {
      username: this.state.username,
      password: pwd,
    }).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);
      this.props.history.push('/dashboard');
    }).catch((err) => {
      if (err.response && err.response.data && err.response.data.errorMessage) {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
          type: "error"
        });
      }
    });
  }

  render() {
  //   const myStyle={
  //     backgroundImage: "./Images/image1.jpeg",
  // };
    return (
      <div style= {{backgroundImage:"url(images/image1.jpeg)", backgroundRepeat:"no-repeat",backgroundSize: "cover",
      height: "100vh"}}>
      <div style={{marginTop: '200px' , marginBottom: '200px'}}>
        <div>
          <h2>Login</h2>
        </div>

        <div>
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="User Name"
            required
          />
          <br /><br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required
          />
          <br /><br />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username == '' && this.state.password == ''}
            onClick={this.login}
          >
            Login
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/Registration">
            Register
          </Link>
        </div>
      </div>
      </div>
    );
  }
}