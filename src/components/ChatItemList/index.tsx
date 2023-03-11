import React from "react";
import "./chatItemList.scss";
import { Avatar } from "../Avatar";
import { IChatItemList } from "./interface";
import { timeConverter } from "../../utils/timeConverter";
import { useNavigate } from "react-router-dom";

export const ChatItemList = (props: IChatItemList) => {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/?id=${id}`);
  };

  return (
    <div onClick={() => handleClick(props.id)} className="chatItem__wrap">
      <Avatar src={props.avatar} size="md" />
      <div className="chatItem__content">
        <div className="chatItem__content-top">
          <p className="chatItem__title">
            {props.title.length > 25
              ? props.title.substring(0, 25) + "..."
              : props.title}
          </p>
          <span>{timeConverter(props.last_message.created_at)}</span>
        </div>
        <p className="chatItem__message">
          {props.last_message.message.length > 32
            ? props.last_message.message.substring(0, 32) + "..."
            : props.last_message.message}
        </p>
      </div>
    </div>
  );
};
