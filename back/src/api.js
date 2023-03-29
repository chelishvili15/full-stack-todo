const express = require("express");
const serverless = require("serverless-http");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const port = 3000;

let listArr = ['dato'];

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());

router.get("/list", (req, res) => {
  res.json(listArr);
  res.end();
});

router.post("/list/add", (req, res) => {
  listArr.push(req.body);
  res.json(listArr);
});

router.delete("/delete/:id", (req, res) => {
  console.log(req.params.id)
  listArr = listArr.filter(elem => elem.id != req.params.id)
  
  res.json(listArr)
})

app.use('/.netlify/functions/api', router)
// app.listen(port, () => {
//   console.log(port);
// });

module.exports.handler = serverless(app)
