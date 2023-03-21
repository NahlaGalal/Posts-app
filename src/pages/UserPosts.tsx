import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserData } from "../api/users";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { IPostCard } from "../components/PostCard/Types";
import CardsContainer from "../components/Posts/CardsContainer";
import { IUserPosts } from "../components/UserPosts/Types";
import User from "../components/UserPosts/User";

const UserPosts: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<IUserPosts>();

  useEffect(() => {
    const getUserHandler = async () => {
      try {
        const res = await getUserData(id || "");
        setData(res);
      } catch(err) {
        navigate("/404")
      }
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
        <Loading />
      )}
    </>
  );
};

export default UserPosts;
