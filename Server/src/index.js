const server = require("./app");
const { conn } = require("./DB_connection") // conn normalmente se llama db
require('dotenv').config();
const PORT = process.env.PORT || 3001;

server.listen(PORT, async () => {
  console.log("Server listening on port: " + PORT);
  await conn.sync({force: true})
});