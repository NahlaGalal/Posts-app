import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserData } from "../api/users";
import Navbar from "../components/Navbar";
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

  return (
    <>
      <Navbar />

      {data ? (
        <main>
          <User {...data} />
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default UserPosts;
