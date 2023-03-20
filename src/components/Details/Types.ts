import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IPostCard } from "../PostCard/Types";

interface IComment {
  postId: 1;
  id: 1;
  name: "id labore ex et quam laborum";
  email: "Eliseo@gardner.biz";
  body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium";
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
