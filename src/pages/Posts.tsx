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
  const [searchQuery, setSearchQuery] = useState<string>("")

  const getPostsHandler = async (val?: string) => {
    const currentPage = val === undefined ? page : 0;
    const currentVal = val === undefined ? searchQuery : val;

    setLoading(true);
    const postsRes: IPostCard[] = await getPosts(currentPage + 1, currentVal);

    setLoading(false);
    setPage(currentPage + 1);
    setIsLoadMore(postsRes.length === 20);

    // In case of search replace cards with the response
    // In other cases append cards
    setPosts(val !== undefined ? postsRes : [...posts, ...postsRes]);
  };

  useEffect(() => {
    getPostsHandler();
  }, []);

  const onLoadMoreHandler = () => {
    getPostsHandler();
  };

  const onSearchHandler = (val: string) => {
    getPostsHandler(val);
    setSearchQuery(val)
  };

  const debounce = (func: (_: string) => void) => {
    // Use debounce to exectue the query every 300ms of not typing
    let timer: NodeJS.Timeout;

    return (val: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, [val]);
      }, 300);
    };
  };

  return (
    <div className="mb-28">
      <PostsHeader
        onSearchHandler={debounce((val: string) => onSearchHandler(val))}
      />
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
