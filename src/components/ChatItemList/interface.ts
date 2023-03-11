export interface ILastMessage {
  created_at: number;
  user_id: string;
  user_name: string;
  user_surname: string;
  you: boolean;
  message: string;
}
export interface IChatItemList {
  id: string;
  avatar: string;
  title: string;
  last_message: ILastMessage;
  count_unread: number;
}
