import { useState } from "react";
import style from "./SearchBar.module.css"

function SearchBar({ onSearch }) {

   let [id, setId] = useState("");

   const handleChange = (event) => {
      let { value } = event.target;
      setId(value);
   }

   const randomId = Math.ceil(Math.random()*826)

   return (
   <div className={style.SearchContainer}>
      <input id={style.searchInput} type="search" onChange={handleChange} value={id} placeholder="Ingrese un ID" />
      <button className="btn" onClick={() => {onSearch(id); setId("")}}>
         Agregar
      </button>
      <button className="btn" onClick={() => {onSearch(randomId); setId("")}}>
         Random
      </button>
   </div>
   );
}

export default SearchBar;