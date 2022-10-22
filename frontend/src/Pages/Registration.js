import React from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Link } from "@material-ui/core";
import "./CSS/Login.css"
const Register = () => {

  let navigate = useNavigate();

  // create props for the input fields
  const [name, setName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCPassword] = React.useState("");
  const [Address, setAddress] = React.useState("");

  // change function for the input fields
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeMobile = (e) => {
    setMobile(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeCPassword = (e) => {
    setCPassword(e.target.value);
  };
  const changeAddress = (e) => {
    setAddress(e.target.value);
  };

  // function to register the user
  const register = async() => {
      // check if the password and confirm password match
      if (password !== cpassword) {
        swal("Password and Confirm Password do not match");
      }
      else if(mobile.length !== 10){
        swal("Mobile number should be of 10 digits");
      }
      else {
        // using axios to post the data to the backend
        await fetch('http://localhost:4000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    mobile: mobile,
                    password: password,
                    Address: Address,
                    Email: Email
                })
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('userInfo', JSON.stringify(data.user));
                    navigate("/");
                })
                .catch(err => {
                    console.log(err);
                });
      }

  };


      return (

      <div
        style={{
          backgroundImage: "url(images/BackgroungIMG.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            paddingTop: "200px",
            paddingBottom: "200px",
          }}
        >
        <div className="box">
          <div>
            <h2>Register</h2>
          </div>

          <div>
            <TextField
              id="standard-basic"
              type="text"
              autoComplete="off"
              name="name"
              value={name}
              onChange={changeName}
              placeholder="Name"
              required
            />
            <br />
            <br />
            <TextField
              id="standard-basic"
              type="tel"
              autoComplete="off"
              name="mobile"
              value={mobile}
              onChange={changeMobile}
              placeholder="Phone Number"
              required
            />
            <br />
            <br />
            <TextField
              id="standard-basic"
              type="email"
              autoComplete="off"
              name="Email"
              value={ Email}
              onChange={  changeEmail}
              placeholder="Email Id"
              required
            />
            <br />
            <br />
            <TextField
              id="standard-basic"
              type="password"
              autoComplete="off"
              name="password"
              value={password}
              onChange={changePassword}
              placeholder="Password"
              required
            />
            <br />
            <br />
            <TextField
              id="standard-basic"
              type="password"
              autoComplete="off"
              name="cpassword"
              value={ cpassword}
              onChange={changeCPassword}
              placeholder="Confirm Password"
              required
            />
            <br />
            <br />
            <TextField
              id="standard-basic"
              type="text"
              autoComplete="off"
              name="Address"
              value={Address}
              onChange={changeAddress}
              placeholder="Address"
              required
            />
            <br />
            <br />
            <Button
              className="button_style"
              variant="contained"
              color="primary"
              size="small"
              disabled={
                name === "" && password === ""
              }
              onClick={register}
            >
              Register
            </Button>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/">Login</Link>
          </div>
        </div>
      </div>
      </div>
    );
  }

export default Register;
