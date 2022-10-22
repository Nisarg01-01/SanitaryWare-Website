import React from "react";
// import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Link } from "@material-ui/core";
import "./CSS/Login.css";

const Login = () => {
  const navigate = useNavigate();
  // create props for the input fields
  const [Email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // change function for the input fields
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  // function to login the user
  const login = async () => {
    // using fetch to post the data to the backend
    await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: Email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/Home");
        }
      });
  }

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
              <h2>Login</h2>
            </div>

            <div>
              <TextField
                id="standard-basic"
                type="text"
                autoComplete="off"
                name="Email"
                value={Email}
                onChange={changeEmail}
                placeholder="Email Address"
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
                <Button
                  className="button_style"
                  variant="contained"
                  color="primary"
                  size="small"
                  disabled={Email.length === 0 || password.length === 0}
                  onClick={login}
                >
                  Login
                </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="/Registration">Register</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Login;