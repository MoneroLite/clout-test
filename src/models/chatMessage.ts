export interface User {
  id: string;
  name: string;
  surname: string;
  avatar: string;
  you: boolean;
}

export interface IMessages {
  id: string;
  created_at: number;
  user: User;
  message: string;
  is_new: boolean;
}

export interface IGetMessages {
  response: IMessages[];
}
