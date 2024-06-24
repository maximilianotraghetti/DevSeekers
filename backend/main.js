const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const { userRouter } = require('./src/routes/user.routes')

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.get('/', (req, res) => {
  res.send("anda el server")
})

app.use(userRouter)

app.listen(4000)
console.log("servidor alojado en http://localhost:4000")