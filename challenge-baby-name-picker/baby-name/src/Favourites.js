import React, { useState, useEffect } from "react";


function Favourites(props) {

  return (
    <div className="favourites-list">
      <div className="individual-baby-names-container">
        <div id={props.id} className="individual-baby-names">
          <p key={props.id} className={props.sex}>
            {props.name}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Favourites;
