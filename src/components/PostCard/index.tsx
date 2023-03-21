import React from "react";
import { IPostCard } from "./Types";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const PostCard: React.FC<IPostCard> = ({
  body,
  title,
  id,
  userId,
  user: { name },
}) => {
  return (
    <section
      className="[ px-6 pt-6 pb-8 ]
  [ bg-white shadow-cardShadow ]"
      data-cy="post-card"
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
          {name[0]}
        </span>

        {/* User name */}
        <a
          href={`/user/${userId}`}
          className="text-sm text-blackColor font-medium"
          data-cy="user-name"
        >
          {name}
        </a>

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
