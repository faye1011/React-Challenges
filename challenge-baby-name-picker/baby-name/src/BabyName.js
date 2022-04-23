import { useState } from "react";

function BabyName(props) {
  let [name, setName] = useState("");

  function handleAddName(e) {
    e.preventDefault();
    props.removeName(props.index);
    // props.getFavourites(props.index);
    setName(props.id);

    console.log(name);
    props.addFavouritesToList(name);
  }
  // function addFavsToAllFavs(){
  //   const newFavName ={
  //     name: props.id,
  //     sex: props.sex
  //   }
  //    setName(props.id);
  //    console.log(name);
  //    props.addFavouritesToList(name);
  // }

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
