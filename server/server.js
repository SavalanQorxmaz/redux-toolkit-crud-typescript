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
app.use(bodyParser.urlencoded({extended: true}))

const db = ['first', 'second', 'third', 'fourth', 'fives']

// fetch(`https://fakestoreapi.com/products`)
//   .then(response => response.json())
//   // .then(res=>res.data)
//   .then(res=>{
//     data.push(...res)
//     return res
//   })
//   .then(json => console.log(json));



app.get("/getArray", (req, res) => {

  res.send(db)
    // console.log(req)
  
})

app.post('/postData', (req, res)=>{
  console.log(req.body.text)
  db.push(req.body.text)
  res.send('elave edildi')
})

app.post('/deleteData', (req, res)=>{
  // console.log(req.body.id)
  db.splice(Number(req.body.id), 1)
  res.send('silindi')
})

app.post('/updateData', (req, res)=>{
  console.log(req.body.data.id)
  db[Number(req.body.data.id)] = req.body.data.text
  res.send('yenilendi')
})







app.listen(port)