import "./App.css";
import data from "./babyNamesData.json";
import React, { useState, useEffect } from "react";
import Search from "./Search";
import Favourites from "./Favourites";
import BabyName from "./BabyName";

function App(props) {
  let [babyNames, setBabyNames] = useState(data);
  let [favNames, setFavNames] = useState("");
  let [favNamesList, setFavNamesList] = useState("");
  console.log(favNamesList);

  babyNames.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  function removeName(index) {
    let currentNames = [...babyNames];
    currentNames.splice(index, 1);
    setBabyNames(currentNames);
  }

  function addFavouritesToList(fav) {
    let currentFav = [fav, ...favNamesList];
    setFavNamesList(currentFav);
  }

  function getFavourites(index) {
    // change to get favourites
    let currentNames = [...babyNames];
    let fav = currentNames.splice(index, 1);
    setFavNames(fav);
  }

  function addBabyName(name) {
    const newBabyName = [name, ...babyNames];
    setBabyNames(newBabyName);
  }

  function createBabyItem() {
    return babyNames.map(function (el, i) {
      return (
        <BabyName
          name={el.name}
          sex={el.sex}
          id={el.name}
          getFavourites={getFavourites}
          addFavouritesToList={addFavouritesToList}
          removeName={removeName}
          index={i}
        />
      );
    });
  }

  function createFavouriteItem() {
    return favNamesList.map(function (el, i) {
      return <Favourites name={el.name} sex={el.sex} id={el.name} index={i} />;
    });
  }

  return (
    <div className="app-container">
      <div className="favourites-container">
        {favNamesList ? createFavouriteItem() : null}
      </div>
      <div className="search-bar-container">
        <Search addName={addBabyName} />
      </div>
      <div className="baby-name">{createBabyItem()}</div>
    </div>
  );
}

export default App;
