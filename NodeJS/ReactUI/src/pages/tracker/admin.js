import React, { useState, useEffect } from "react";
import { Image, Stack, Form, Button, InputGroup } from "react-bootstrap";

//AXIOS
import axios from "axios";

//CSS
import "./admin.css";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [feedback, setFeedBack] = useState("");
  const [supersecret, setSuperSecret] = useState("");
  const [authstate, setAuthState] = useState({
    Authorization: "",
    Authenticated: false,
  });

  //Check if we already have auth?
  useEffect(() => {
    if(localStorage.getItem("Authenticated")) {
      const state = {
        Authenticated: true,
        Authorization: localStorage.getItem("Authorization")
      }
      setAuthState(state)
    }
  }, [])

  // Get flag on auth
  useEffect(() => {
    axios.get("/flag", { headers: { authorization: authstate.Authorization }}).then((secretRes) => {
      console.log(secretRes)
      if(secretRes.status === 200) {
        setSuperSecret(secretRes.data.flag);
      }
    })
  }, [authstate])

  const login = async () => {
    try {
      const body = {
        password: password,
      };

      const response = await axios.post("/login", body);

      if (response.status === 200) {
        console.log("Success!");
        console.log(response.data);
        const state = {
          Authorization: response.data.Authorization,
          Authenticated: response.data.Authenticated
        }
        localStorage.setItem("Authenticated", state.Authenticated);
        localStorage.setItem("Authorization", state.Authorization)
        setAuthState(state);
      } else {
        setFeedBack(response.statusText);
        console.log(response.statusText);
      }
    } catch (ex) {
      console.log(ex);
      setFeedBack(ex.message);
    }
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="page">
      <Stack direction="vertical" gap={4} className="root-stack">
        <h1 className="Text-Header">Admin Page</h1>
        <h3 className="Text-Header">
          Admins Only! I keep my secret pandas here!
        </h3>
        <Image
          style={{ maxWidth: 350 }}
          rounded={true}
          src={require("../../images/Oh-Stop.jpg")}
        />
        {authstate.Authenticated ? (
          <>
            <h3 className="Text-Header">My super super super secret image!</h3>
            <h4 className="Text-Header">
              flag: {supersecret}
            </h4>
            {/* <Image
              style={{ maxWidth: 350 }}
              rounded={true}
              src={{
                uri: `${baseurl}/api/secretimage`,
                method: "GET",
                headers: {
                  Pragma: "no-cache",
                },
              }}
            /> */}
          </>
        ) : (
          <div className="admin-stack">
            <Form.Label htmlFor="inputPassword5" className="password-label">
              Password
            </Form.Label>
            <Stack direction="horizontal" gap={4} className="root-stack">
              <InputGroup hasValidation>
                <Form.Control
                  className="password-text-box"
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  value={password}
                  onChange={handleChange}
                  isInvalid={feedback !== ""}
                />
                <Form.Control.Feedback type="invalid">
                  {feedback}
                </Form.Control.Feedback>
              </InputGroup>
              <Button variant="primary" onClick={login}>
                Primary
              </Button>
            </Stack>
          </div>
        )}
      </Stack>
    </div>
  );
}
