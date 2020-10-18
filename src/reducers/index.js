import { combineReducers } from "redux";

const songReducer = () => {

    return [
        {title : "Afreen Afreen", duration: "4.00"},
        {title : "Tajdar E haram", duration: "4.37"},
        {title : "Jazba", duration: "5.00"},
        {title : "Dil Dil Pakistan", duration: "5.13"}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
        if(action.type === "SONG_SELECTED"){
            return action.payload;
        }
          return selectedSong;
};

 export default combineReducers({
      song: songReducer,
      selectedSong: selectedSongReducer
  });