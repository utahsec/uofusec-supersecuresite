import React, { useState } from "react";
import { Image, Stack, Form, Button } from "react-bootstrap";

//AXIOS
import axios from "axios";

//CSS
import "./admin.css";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [feedback, setFeedBack] = useState("");

  const login = async () => {
    try {
      const body = {
        password: password,
      };

      const response = await axios.post("", body);

      if (response.status == 200) {
      }
    } catch (ex) {}
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
        <div className="admin-stack">
          <Form.Label htmlFor="inputPassword5" className="password-label">
            Password
          </Form.Label>
          <Stack direction="horizontal" gap={4} className="root-stack">
            <Stack direction="vertical" gap={2}>
              <Form.Control
                className="password-text-box"
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                value={password}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Stack>
            <Button variant="primary" onClick={login}>
              Primary
            </Button>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}
