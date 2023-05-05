const users = require("../utils/users")

const login = (req, res) => {
  const { username, password } = req.body;

  const userFound = users.find((user) => user.username === username && user.password === password)

  if(userFound) return res.status(200).json({ access: true })
  return res.status(401).json({ access : false })
}

module.exports = {
  login
}