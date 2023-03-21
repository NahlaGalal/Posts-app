import React, { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import Loading from "../components/Loading";
import { IPostCard } from "../components/PostCard/Types";
import CardsContainer from "../components/Posts/CardsContainer";
import PostsHeader from "../components/Posts/Header";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPostCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const getPostsHandler = async () => {
    setLoading(true);
    const postsRes: IPostCard[] = await getPosts(page + 1);

    setLoading(false);
    setPosts([...posts, ...postsRes]);
    setPage(page + 1);
    setIsLoadMore(postsRes.length === 20);
  };

  useEffect(() => {
    getPostsHandler();
  }, []);

  const onLoadMoreHandler = () => {
    getPostsHandler();
  };

  return (
    <div className="mb-28">
      <PostsHeader />
      {loading ? (
        <Loading />
      ) : (
        <CardsContainer
          cards={posts}
          isLoadMore={isLoadMore}
          onLoadMoreHandler={onLoadMoreHandler}
        />
      )}
    </div>
  );
};

export default Posts;
