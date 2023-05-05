const router = require("express").Router();
const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});

router.post("/login", login); // es lo mismo que arriba pero directamente le paso la funcion

router.post("/fav", (req, res) => {
  postFav(req, res);
});

router.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
});

module.exports = {
  router,
};
