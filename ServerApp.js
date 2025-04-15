console.log("Application is Starting");

const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   req.setEncoding("Hello Steve")
// })


app.get("/", (req, res, next) => {
   console.log("I received a get request on the path // ")
   res.send("<h1>Acknowledged</h1>")
 })
 
app.listen(port, () => {
    console.log('Example app Listening on port ${port}')
})