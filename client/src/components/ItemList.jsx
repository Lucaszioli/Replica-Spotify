import React from "react";
import { SingleItem } from "./SingleItem";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const pathLocation = useLocation().pathname;
  const isHome = pathLocation === "/";
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        {isHome ? (
          <Link className="item-list__link" to={path}>
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="item-list__container">
        {console.log(itemsArray)}
        {itemsArray
          .filter((currentValue, index) => (isHome ? index < items : true))
          .map((currentValue, index) => (
            <SingleItem
              {...currentValue}
              idPath={idPath}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};
