const axios = require("axios");

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "a2cd604378cd.9f533a415713ec23430d";

const getCharById = (req, res) => {
  const { id } = req.params;

  axios // el .get es por default, no hace falta ponerlo
    .get(`${URL_BASE}/${id}?key=${API_KEY}`)
    .then((response) => response.data)
    .then(({ name, status, species, image, gender, origin }) => {
      if (name) {
        const character = {
          id,
          name,
          status,
          species,
          image,
          gender,
          origin,
        };
        return res.status(200).json(character);
      }

      return res.status(404).send("Not found");
    })

    .catch((error) => res.status(500).send(error.message));
};

module.exports = {
  getCharById,
};
