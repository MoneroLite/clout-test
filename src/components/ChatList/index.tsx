import React from "react";
import "./chatList.scss";
import { ChatItemList } from "../ChatItemList";
import { useGetChatListQuery } from "../../store/cloutTest/cloutTest.api";

export const ChatList = () => {
  const { isLoading, isError, data } = useGetChatListQuery({
    refetchOnFocus: true, // если вернулись на эту страницу с другой, то обновляет данные
  });

  return (
    <div className="chatList__wrap">
      <p className="chatList__header">All chats</p>
      <div className="chatList__items">
        {data?.response.map((item) => (
          <ChatItemList key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
