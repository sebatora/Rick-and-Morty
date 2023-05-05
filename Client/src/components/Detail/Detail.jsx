import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css"

function Detail() {

  // const URL_BASE = "https://be-a-rym.up.railway.app/api/character"; 
  // const API_KEY = "a2cd604378cd.9f533a415713ec23430d";
  const NEW_URL = "http://localhost:3001/rickandmorty/character"

  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
//    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      axios(`${NEW_URL}/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) setCharacter(data);
        else window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  const navigate = useNavigate();

  return (

    <div className={style.detail}>

      <button className="btn"  onClick={() => navigate(-1)}>Volver</button>

      <div className={style.detailContainer}>
        <div className={style.detailSpec}>
          <h2>NAME </h2>
          <h3>{character?.name}</h3>
          <h2>STATUS</h2>
          <h3>{character?.status}</h3>
          <h2>SPECIES</h2>
          <h3>{character?.species}</h3>
          <h2>GENDER</h2>
          <h3>{character?.gender}</h3>
          <h2>ORIGIN</h2>
          <h3>{character?.origin?.name}</h3>
        </div>

        <div className={style.detailImg}>
          <img src={character?.image} alt={character?.name} />
        </div>
      </div>
    </div>
  );
}

export default Detail;