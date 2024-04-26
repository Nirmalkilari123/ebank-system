const express = require("express");
const cors = require("cors");
const pool = require("./database");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/addlogin", (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

  const selectTblQry = `SELECT email, password FROM accounts WHERE email = $1 AND password =$2 `;
  const values = [email, password];

  pool
    .query(selectTblQry, values)
    .then((response) => {
      console.log("Data Received");
      console.log(response.rows);
      res.json({ message: "Data Received", data: response.rows });
    })
    .catch((err) => {
      console.error("Error:", err);
      res.status(500).json({ error: "An error occurred" });
    });
});

app.post("/addregister", (req, res) => {
  const id = req.body["id"];
  const name = req.body["name"];
  const email = req.body["email"];
  const password = req.body["password"];
  const dateofbirth = req.body["dateofbirth"];
  const dateofjoin = req.body["dateofjoin"];

  const insertSMT = `insert into accounts(id,name,email,password,dateofbirth,dateofjoin)
      values('${id}','${name}','${email}','${password}','${dateofbirth}','${dateofjoin}');`;

  pool
    .query(insertSMT)
    .then((response) => {
      console.log("Data Saved");
      console.log(response);
    })
    .catch((err) => {
      console.log("err");
    });

  console.log(req.body);
  res.send("Response Receieved :" + req.body);
});

app.listen(3000, () => console.log("Server on localhost:3000"));
