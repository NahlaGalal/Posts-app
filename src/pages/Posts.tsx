import React, { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import Loading from "../components/Loading";
import { IPostCard } from "../components/PostCard/Types";
import CardsContainer from "../components/Posts/CardsContainer";
import PostsHeader from "../components/Posts/Header";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPostCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getPostsHandler = async () => {
      setLoading(true);
      const postsRes = await getPosts();

      setLoading(false);
      setPosts(postsRes);
    };

    getPostsHandler();
  }, []);

  return (
    <>
      <PostsHeader />
      {loading ? <Loading /> : <CardsContainer cards={posts} />}
    </>
  );
};

export default Posts;
