const { newConnection } = require("../db/db")

const connection = newConnection()


const mostrarUsuarios = async (req, res) => {
  const connection = await newConnection()
  const result = await connection.query("SELECT * FROM usuarios")

  res.json(result[0])
  connection.end()
}

const crearUsuario = async (req, res) =>{

  const { usuario, mail, contraseña } = req.body
  const connection = await newConnection()

  const result = await connection.query("INSERT INTO usuarios (usuario, mail, constraseña) VALUES (?, ?, ?)", [usuario, mail, contraseña])


  res.json(result[0])
  connection.end()
}



module.exports = {
  crearUsuario,
  mostrarUsuarios
}