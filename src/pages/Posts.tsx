import React, { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import { IPostCard } from "../components/PostCard/Types";
import CardsContainer from "../components/Posts/CardsContainer";
import PostsHeader from "../components/Posts/Header";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPostCard[]>([]);

  useEffect(() => {
    const getPostsHandler = async () => {
      const postsRes = await getPosts();

      setPosts(postsRes);
    };

    getPostsHandler();
  }, []);

  return (
    <>
      <PostsHeader />
      <CardsContainer cards={posts} />
    </>
  );
};

export default Posts;
