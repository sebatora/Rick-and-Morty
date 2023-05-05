let myFavorites = [];

const postFav = (req, res) => {
  try {
    const character = req.body;
    const characterFound = myFavorites.find((fav) => fav.id === character.id);

    if (characterFound) throw Error("Este personaje ya es un favorito");

    myFavorites.push(character);
    return res.status(200).json(myFavorites);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((fav) => fav.id !== id); // si no lo pisamos, el array orig siempre tiene todos los PJ

  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
