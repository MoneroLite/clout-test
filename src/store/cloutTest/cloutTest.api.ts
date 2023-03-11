import { IGetChatList } from "../../models/chatList";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGetMessages } from "../../models/chatMessage";

export const cloutTestApi = createApi({
  reducerPath: "cloutTest/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.lenzaos.com/test/",
  }),
  //   refetchOnFocus: true,
  endpoints: (build) => ({
    getChatList: build.query<IGetChatList, any>({
      query: () => ({
        url: "chat.get?offset=0&limit=20",
      }),
    }),
    getMessages: build.query<IGetMessages, any>({
      query: (id: string) => ({
        url: `message.get?chat_id=${id}&offset=0&limit=20`,
      }),
    }),
  }),
});

export const { useGetChatListQuery, useLazyGetMessagesQuery } = cloutTestApi;
