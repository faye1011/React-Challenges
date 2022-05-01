import "./App.css";
import data from "./babyNamesData.json";
import React, { useState, useEffect } from "react";
import Add from "./Components/Add/Add";
import Favourites from "./Components/Favourites/Favourites";
import BabyName from "./Components/BabyNames/BabyName";
import Filter from "./Components/Filter/Filter";

function App(props) {
  let [babyNames, setBabyNames] = useState(data);
  // let [favNames, setFavNames] = useState("");
  let [favNamesList, setFavNamesList] = useState("");
  let [searchTerm, setSearchTerm] = useState("");

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

  function setFilterTerm(name) {
    setSearchTerm(name);
  }

  // function getFavourites(index) {
  //   // change to get favourites
  //   let currentNames = [...babyNames];
  //   let fav = currentNames.splice(index, 1);
  //   setFavNames(fav);
  // }

  function addBabyName(name) {
    const newBabyName = [name, ...babyNames];
    setBabyNames(newBabyName);
  }

  // function filterItem() {
  //   return babyNames.filter(function (name) {
  //     if (searchTerm === "") {
  //       return name;
  //     } else if (name.name.toLowerCase().includes(searchTerm.toLowerCase())) {
  //       return name;
  //     }
  //   });
  // }

  function createBabyItem() {
    return babyNames
      .filter(function (name) {
        if (searchTerm === "") {
          return name;
        } else if (name.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return name;
        }
      })
      .map(function (el, i) {
        return (
          <BabyName
            name={el.name}
            sex={el.sex}
            id={el.name}
            // getFavourites={getFavourites}
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
      <div className="content-container">
        <div className="search-bar-containers">
          <div className="add-bar-container">
            <Add addName={addBabyName} />
          </div>

          <div className="filter-bar-container">
            <Filter setFilterTerm={setFilterTerm} />
          </div>
        </div>

        <div className="names-container">
          <div className="favourites-container">
            <div className="title">
              <h1> Favourite List </h1>
            </div>
            <div className="names-list">
              {favNamesList ? createFavouriteItem() : null}
            </div>
          </div>
          <div className="baby-name-container">
            <div className="title">
              <h1> Baby Names</h1>
            </div>
            <div className="names-list">{createBabyItem()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
