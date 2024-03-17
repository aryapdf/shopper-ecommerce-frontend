import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          nihil excepturi, velit laudantium eum deleniti temporibus magni atque
          pariatur sequi, amet architecto, dolores autem dolorem.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          tempora quis omnis nobis soluta nisi.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
