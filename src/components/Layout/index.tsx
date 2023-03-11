import React from "react";
import { ChatList } from "../ChatList";
import { Workspace } from "../Workspace";
import "./layout.scss";

export const Layout = () => {
  return (
    <div className="layout__wrap">
      <ChatList />
      <Workspace />
    </div>
  );
};
