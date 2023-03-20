import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/posts";
import Details from "../components/Details";
import { IPostDetails } from "../components/Details/Types";
import Navbar from "../components/Navbar";

const PostDetails: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPostDetails>();

  useEffect(() => {
    const getPostDetailsHandler = async () => {
      const data = await getPost(+(id || 0));

      setPost(data);
    };

    getPostDetailsHandler();
  }, []);

  return (
    <>
      <Navbar />
      {post ? <Details {...post} /> : <p>Loading...</p>}
    </>
  );
};

export default PostDetails;
