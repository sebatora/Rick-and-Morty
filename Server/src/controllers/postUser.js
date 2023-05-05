const { User } = require("../DB_connection")

const postUser = async(req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) throw Error("Faltan datos")
    
  }
  catch (error) {
    return res.status(400).send(error.message)
  }
}

module.exports = {
  postUser
}