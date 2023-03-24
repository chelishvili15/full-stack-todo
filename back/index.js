const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

let listArr = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/api/list", (req, res) => {
  res.json(listArr);
  res.end();
});

app.post("/api/list/add", (req, res) => {
  listArr.push(req.body);
  res.json(listArr);
});

app.delete("/api/delete/:id", (req, res) => {
  console.log(req.params.id)
  listArr = listArr.filter(elem => elem.id != req.params.id)
  
  res.json(listArr)
})

app.listen(port, () => {
  console.log(port);
});
