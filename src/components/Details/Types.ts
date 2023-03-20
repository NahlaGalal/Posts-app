import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IPostCard } from "../PostCard/Types";

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IPostDetails extends IPostCard {
  comments: IComment[];
}

export interface ICommentsProps {
  comments: IComment[];
}

export interface IFormTypes {
  body: string;
  name: string;
  email: string;
}

export interface ICommentContext {
  onSubmit: (data: any) => Promise<void>;
  register: UseFormRegister<IFormTypes> | undefined;
  errors: FieldErrors<IFormTypes>;
  isSuccess: boolean;
}
