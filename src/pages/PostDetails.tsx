import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addComment, getPost } from "../api/posts";
import Details from "../components/Details";
import {
  ICommentContext,
  IFormTypes,
  IPostDetails,
} from "../components/Details/Types";
import Navbar from "../components/Navbar";

// Use context to pass onSubmit function to the third level child
// without passing the function between all components
export const CommentContext = createContext<ICommentContext>({
  onSubmit: () => new Promise(() => {}),
  register: undefined,
  errors: {},
  isSuccess: false,
});

const PostDetails: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPostDetails>();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormTypes>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 1000);
    }
  }, [isSuccess]);

  const onSubmitHandler = async (data: IFormTypes) => {
    try {
      await addComment(+(id || 0), data);
      setIsSuccess(true);
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getPostDetailsHandler = async () => {
      const data = await getPost(+(id || 0));

      setPost(data);
    };

    getPostDetailsHandler();
  }, []);

  return (
    <CommentContext.Provider
      value={{
        onSubmit: handleSubmit(onSubmitHandler),
        register,
        errors,
        isSuccess,
      }}
    >
      <Navbar />
      {post ? <Details {...post} /> : <p>Loading...</p>}
    </CommentContext.Provider>
  );
};

export default PostDetails;
