const express = require('express')
const NotFoundError = require('./middleware/404Handling')
const ValidationMiddleware = require('./middleware/ValidationMiddleware')
const ApiError = require('./utils/ApiError')
const app = express()
const port = 3000


// # json parsing
app.use(express.json({}))
app.use("/api/v1",require("./router"))

app.get('/', (req, res) => {
  res.send({msg:'Hello World!'})
})

app.use("",(req,res,next)=>{
    next( new ApiError(404,"Not Found"))
})

app.use(NotFoundError)


module.exports = app
