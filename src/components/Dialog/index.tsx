import React from "react";

import { IDialog } from "./interface";
import { Message } from "../Message";
import "./dialog.scss";
import { Input } from "../Input";

export const Dialog = (props: IDialog) => {
  console.log(props);

  return (
    <div className="">
      <div className="dialog__wrap">
        {props?.response?.map((item) => (
          <Message key={item.id} {...item} />
        ))}
      </div>
      <Input />
    </div>
  );
};
