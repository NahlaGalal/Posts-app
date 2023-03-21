import { IUser } from "../UserPosts/Types";

export interface IPostCard {
  id: number;
  userId: number;
  title: string;
  body: string;
  user: IUser;
}