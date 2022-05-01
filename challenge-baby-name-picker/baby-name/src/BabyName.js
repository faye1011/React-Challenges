import { useState } from "react";

function BabyName(props) {
  function handleAddName(e) {
    e.preventDefault();
    props.removeName(props.index);
    // props.getFavourites(props.index);;
    const newFavName = {
      name: props.id,
      sex: props.sex,
    };

    props.addFavouritesToList(newFavName);
  }

  return (
    <div className="individual-baby-names-container">
      <div id={props.id} className="individual-baby-names">
        <p
          onClick={handleAddName}
          addToFavouritesList={props.addToFavouritesList}
          key={props.id}
          className={props.sex}
        >
          {props.name}
        </p>
      </div>
    </div>
  );
}
export default BabyName;
