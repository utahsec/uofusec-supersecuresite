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
const token = "administrator"
const flag = "UofUSecFlag{a_very_cool_panda}"

//Simple Login
router.post("/login", (req, res) => {
  try {
    const pass = req.body.password;

    if (adminPass == pass) {
        const auth = Buffer.from(token).toString('base64');
        return res.status(200).send({ Authenticated: true, Authorization: auth });
    } else {
      return res.status(403).send({ error: "Invalid Username or password" });
    }
  } catch (ex) {}
  return res.status(400).send({ error: "Invalid Request" });
});

//Super Secret Image
router.get("/secretimage", (req, res) => {
  console.log(req.headers)
  try {
    if(req.headers.authorization == null)
      return res.status(403).send({ error: "Invalid authorization"}) 
    const auth = req.headers.authorization
    const convertedAuth = new Buffer.from(auth, "base64").toString('ascii');
    if(convertedAuth === token) {

      return res.status(200).sendFile(path.join(__dirname, "./images/secret-panda.jpg"),)
    } else {
      return res.status(403).send({ error: "Invalid authorization"})
    }
  } catch (ex) {
    console.log(ex)
    return res.status(500).send({ error: "Internal Error" })
  }
})

//Super Secret Flag
router.get("/flag", (req, res) => {
  //console.log(req.headers)
  try {
    if(req.headers.authorization == null)
      return res.status(403).send({ error: "Invalid authorization"}) 
    const auth = req.headers.authorization
    const convertedAuth = new Buffer.from(auth, "base64").toString('ascii');
    if(convertedAuth === token) {
      return res.status(200).send({ flag: flag })
    } else {
      return res.status(403).send({ error: "Invalid authorization"})
    }
  } catch (ex) {
    console.log(ex)
    return res.status(500).send({ error: "Internal Error" })
  }
})

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
