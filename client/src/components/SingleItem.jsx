import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const SingleItem = ({ id, name, image, artist, idPath }) => {
  return (
    <Link className="single-item" to={`${idPath}/${id}`}>
      <div className="single-item__image-div-button">
        <div className="single-item__image-div">
          <img
            className="single-item__image"
            src={image}
            alt={`Imagem do ${name}`}
          />
        </div>
        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>
      <div className="single-item__text">
        <div className="single-item__2line_text">
          <p className="single-item__text-title">{name}</p>
        </div>
        <p className="single-item_type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
};
