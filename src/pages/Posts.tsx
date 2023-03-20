import React, { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import { getUsersData } from "../api/users";
import { IPostCard, IUser } from "../components/PostCard/Types";
import CardsContainer from "../components/Posts/CardsContainer";
import PostsHeader from "../components/Posts/Header";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPostCard[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const getPostsHandler = async () => {
      const postsRes = await getPosts();

      // This request to get authors name
      // There is not the best solution
      // It will be better if this operation held in the Backend and returns the post with the author name
      const usersRes = await getUsersData();

      setPosts(postsRes);
      setUsers(usersRes);
    };

    getPostsHandler();
  }, []);

  return (
    <>
      <PostsHeader />
      <CardsContainer cards={posts} users={users} />
    </>
  );
};

export default Posts;
