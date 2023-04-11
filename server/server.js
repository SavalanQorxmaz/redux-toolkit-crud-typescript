const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
// const { url } = require("inspector");
// const { urlencoded } = require("express");
const port = 4000


app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))

const data = []

fetch(`https://fakestoreapi.com/products`)
  .then(response => response.json())
  // .then(res=>res.data)
  .then(res=>{
    data.push(...res)
    return res
  })
  .then(json => console.log(json));

app.get("/", (req, res) => {

  res.send(data)
    // console.log(req)
  
})







app.listen(port)