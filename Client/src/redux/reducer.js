import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-type"

const initialState = {
  myFavorites: [],
  allCharactersFav: [] // ES LA COPIA PARA PODER ORDENAR O FILTRAR
};

const rootReducer = (state = initialState, action) => {

  switch(action.type){

    case ADD_FAV: {
      // return{
      //   ...state,
      //   myFavorites: [...state.allCharactersFav, action.payload], // CUANDO LO AGREGAMOS A FAV SON IGUALES PARA PODER TRBAAJARLO LUEGO LUEGO
      //   allCharactersFav: [...state.allCharactersFav, action.payload]
      // }

      return { ...state, myFavorites: action.payload, allCharactersFav: action.payload };
    };

    case REMOVE_FAV: {
      // return{
      //   ...state,
      //   myFavorites: state.myFavorites.filter(
      //     (character) => character.id !== action.payload)
      // }

      return { ...state, myFavorites: action.payload, allCharactersFav: action.payload };
    }

    case FILTER: {
        if (action.payload === "All") {
          return {
            ...state,
            myFavorites: state.allCharactersFav
          }
        }
        else {
          let allCharactersFavFilter = state.allCharactersFav.filter((character) => character.gender === action.payload)
          return {
            ...state,
            myFavorites: allCharactersFavFilter
          }
        }
    };

    case ORDER: {
      const allCharactersFavCopy = [...state.allCharactersFav]
      return{
        ...state,
        myFavorites: action.payload === "A"
          ? allCharactersFavCopy.sort((a,b) => a.id - b.id)
          : allCharactersFavCopy.sort((a,b) => b.id - a.id)
      }
    };

    default:
      return { ...state }
  }
}

export default rootReducer;