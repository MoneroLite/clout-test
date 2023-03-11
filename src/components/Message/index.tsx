import React from "react";
import { timeConverter } from "../../utils/timeConverter";
import { Avatar } from "../Avatar";
import { IMessage } from "./interface";
import "./message.scss";
import see from "../../assets/icons/see.svg";

export const Message = (props: IMessage) => {
  return (
    <div className="message__wrap">
      <div
        className={
          props.user.you ? "message__you message" : "message__member message"
        }
      >
        <div className="message__avatar">
          {props.user.you ? (
            <></>
          ) : (
            <Avatar src={props.user.avatar} size="sm" />
          )}
        </div>
        <div className="message__content">
          {props.user.you ? (
            <></>
          ) : (
            <p className="message__content-name">
              {props.user.name} {props.user.surname}
            </p>
          )}
          <div className="message__content-message">
            {props.message}
            <div className="message__content-date">
              <p className="">{timeConverter(props.created_at)}</p>
              {props.user.you && !props.is_new && <img alt="#" src={see} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
