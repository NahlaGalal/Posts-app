import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addComment, getPost } from "../api/posts";
import Details from "../components/Details";
import {
  IComment,
  ICommentContext,
  IFormTypes,
  IPostDetails,
} from "../components/Details/Types";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 1000);
    }
  }, [isSuccess]);

  const addCommentHandler = (comment: IComment) => {
    if (post) {
      const postCopy = { ...post };
      postCopy.comments = [comment, ...postCopy.comments];
      setPost(postCopy);
    }
  };

  const onSubmitHandler = async (data: IFormTypes) => {
    setLoading(true);
    try {
      const res: IComment = await addComment(+(id || 0), data);
      // Show success message
      setIsSuccess(true);

      // Reset the array
      reset();

      // Push the comment to the comments section
      // It should re-fetch getting post details request
      // But I push the comment manually beacause it is a placeholder api
      addCommentHandler(res);

      // Stop loading
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    const getPostDetailsHandler = async () => {
      setLoading(true);

      const data = await getPost(+(id || 0));

      setPost(data);
      setLoading(false);
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
      {post && !loading ? <Details {...post} /> : <Loading />}
    </CommentContext.Provider>
  );
};

export default PostDetails;
