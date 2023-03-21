import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserData } from "../api/users";
import Navbar from "../components/Navbar";
import { IPostCard } from "../components/PostCard/Types";
import CardsContainer from "../components/Posts/CardsContainer";
import { IUserPosts } from "../components/UserPosts/Types";
import User from "../components/UserPosts/User";

const UserPosts: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<IUserPosts>();

  useEffect(() => {
    const getUserHandler = async () => {
      const res = await getUserData(id || "");

      setData(res);
    };

    getUserHandler();
  }, []);

  const getCards = (): IPostCard[] => {
    if (data) {
      return data.posts.map((post) => ({ ...post, user: data }));
    } else return [];
  };

  return (
    <>
      <Navbar />

      {data ? (
        <main className="my-24">
          <User {...data} />
          <CardsContainer cards={getCards()} />
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default UserPosts;
