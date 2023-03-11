import React, { useEffect } from "react";
import { Dialog } from "../Dialog";
import { Header } from "../Header";
import "./workspace.scss";
import { useLocation } from "react-router-dom";
import {
  useLazyGetMessagesQuery,
  useGetChatListQuery,
} from "../../store/cloutTest/cloutTest.api";

export const Workspace = () => {
  const location = useLocation();
  let chatId = location.search.split("?id=")[1];

  const [getMessages, { data: messageData }] = useLazyGetMessagesQuery();
  const { data } = useGetChatListQuery({
    refetchOnFocus: true, // если вернулись на эту страницу с другой, то обновляет данные
  });

  const title = data?.response?.filter((chat) => {
    if (chat.id === chatId) {
      return chat;
    }
  });
  console.log(title);

  useEffect(() => {
    getMessages(chatId);
    console.log(chatId);
  }, [chatId]);

  return (
    <div className="workspace__wrap">
      <Header
        chatTitile={
          title && title?.length !== 0 ? title[0].title : "Выберете чат"
        }
      />
      <Dialog {...messageData} />
    </div>
  );
};
