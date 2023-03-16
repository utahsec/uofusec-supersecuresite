const path = require("path");
//Setup Express
const express = require("express");
const port = 3000;
const app = express();
const router = express.Router();

app.use(express.json());

//API

//Admin Login
const adminUser = "admin";
const adminPass = "mysupersecretpasswordnoonewillguess";

//Simple Login
router.post("/login", (req, res) => {
  try {
    const usr = req.body.username;
    const pass = req.body.password;

    if (usr == adminUser && adminPass == pass) {
        const author = Buffer.from("administrator").toString('base64');
        return res.status(200).send({ authenticated: true, authorization: author });
    } else {
      return res.status(403).send({ error: "Invalid Username or password" });
    }
  } catch (ex) {}
  return res.status(400).send({ error: "Invalid Request" });
});

app.use("/api", router);

//ReactUI
app.use(express.static(path.join(__dirname, "ReactUI/build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/ReactUI/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server Started, listening on ${port}`);
});
