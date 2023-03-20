import React from "react";
import { IPostCard, IUser } from "./Types";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const fakeData: IUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const PostCard: React.FC<IPostCard> = ({ body, title, id }) => {
  return (
    <section
      className="[ px-6 pt-6 pb-8 ]
  [ bg-white shadow-cardShadow ]"
    >
      <div className="flex gap-3 items-center flex-wrap">
        {/* User avatar with the first letter of his name */}
        <span
          className="[ flex justify-center items-center ]
        [ w-10 h-10 ] 
        [ rounded-full bg-darkVoilet text-white ]
        [ font-bold text-xl ]"
          data-cy="user-avatar"
        >
          {fakeData.name[0]}
        </span>

        {/* User name */}
        <p className="text-sm text-blackColor font-medium" data-cy="user-name">
          {fakeData.name}
        </p>

        {/* Link to post */}
        <Link to={`/post/${id}`} className="ml-auto" data-cy="post-link">
          <BsArrowUpRight className="text-blackColor w-4 h-4" />
        </Link>
      </div>

      {/* Blog name */}
      <p
        className="text-2xl font-semibold text-blackColor my-3 strict-lines strict-lines--one"
        data-cy="post-title"
      >
        {title}
      </p>

      {/* Blog small description */}
      <p className="text-greyColor strict-lines" data-cy="post-body">
        {body}
      </p>
    </section>
  );
};

export default PostCard;
