import React from "react";
import shape from "../../assets/icons/Shape.svg";
import { IHeader } from "./interface";
import "./header.scss";

export const Header = (params: IHeader) => {
  return (
    <div className="header__wrap">
      <img src={shape} alt="shape" />
      <p>{params.chatTitile}</p>
    </div>
  );
};
