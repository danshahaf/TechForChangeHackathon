import React from "react";
/*import "./ImageContainer.css";*/

function ImageContainer(props) {
    const { url, imageFile } = props;

    return (
      <div className="imgComp">
        <a href={url}>
            <img src={imageFile} alt="preview" />
        </a>
      </div>
    );
  }

export default ImageContainer;