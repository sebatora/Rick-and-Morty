//STYLES
import "./App.css";

//COMPONENTS
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Favorites from "./components/Favorites/Favorites";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

// AXIOS
import axios from "axios";

// HOOKS
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

const App = () => {
  // HOOKS
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // EVENT HANDLERS
  // const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
  // const API_KEY = "a2cd604378cd.9f533a415713ec23430d";
  const NEW_URL = "http://localhost:3001/rickandmorty/character";

  const onSearch = async (id) => {
    //    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
    try {
      const { data } = await axios(`${NEW_URL}/${id}`)
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      };
    }
    catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFiltered);
  };

  const URL_LOGIN = "http://localhost:3001/rickandmorty/login";

  const handleLogin = async (userData) => {
    try {
      const { username, password } = userData;
      const { data } = await axios.post(URL_LOGIN, { username, password })  //destructuring de .then(response => response.data)
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    }  
    catch (error) {
      console.log(error.message)
    }
  };

  // RENDER
  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} />}

      <Routes>
        <Route path="/" element={<Form handleLogin={handleLogin} />} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="*" element={ <h1>404 NOT FOUND</h1> } />
      </Routes>
    </div>
  );
};

export default App;
