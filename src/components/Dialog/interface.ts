export interface IDialog {
  response?: IDialogMessages[] | undefined;
}

export interface IDialogMessages {
  id: string;
  created_at: number;
  user: any;
  message: string;
  is_new: boolean;
}
