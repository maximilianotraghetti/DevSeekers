const { crearUsuario, mostrarUsuarios } = require("../controllers/user.controllers")
const userRouter = require("express").Router();

userRouter.get('/usuarios', mostrarUsuarios)

userRouter.post('/usuarios', crearUsuario)

module.exports = {
  userRouter
}