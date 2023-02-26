import React from "react";
/*import "./ImageContainer.css";*/

function ImageContainer(props) {
    const { url, imageFile } = props;

    return (
      <div className="imgComp">
        <a className="imgcontrols" href={url}>
            <div>
                <img src={imageFile} alt="preview" />
            </div>
        </a>
      </div>
    );
  }

export default ImageContainer;