import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Comments from "./Comments";
import { IPostDetails } from "./Types";

const Details: React.FC<IPostDetails> = ({ body, comments, title, user }) => {
  return (
    <main className="my-24">
      <article className="custom-container">
        {/* Post title */}
        <h1
          data-cy="post-title"
          className="text-3xl sm:text-5xl sm:leading-[60px] font-semibold text-blackColor mb-6"
        >
          {title}
        </h1>

        {/* Post body */}
        <p
          data-cy="post-body"
          className="text-xl text-greyColor sm:w-3/4 mx-auto"
        >
          {body}
        </p>

        {/* Author data */}
        <section
          className="[ flex items-center gap-4 flex-wrap ]
        [ pt-6 border-t border-t-greyColor border-opacity-20 ]
        sm:w-3/4 mx-auto mt-12"
        >
          {/* Author avatar */}
          <span
            className="[ flex justify-center items-center ]
                [ w-14 h-14 ] 
                [ rounded-full bg-redColor text-white ]
                [ font-bold text-xl ]"
            data-cy="user-avatar"
          >
            {user.name[0]}
          </span>

          <div>
            {/* User name */}
            <a
              href={`/user/${user.id}`}
              data-cy="user-name"
              className="text-lg font-semibold text-blackColor"
            >
              {user.name}
            </a>

            {/* User company */}
            <p
              className="text-blackColor flex gap-1 items-center"
              data-cy="user-company"
            >
              <MdLocationOn />
              {user.company.name}
            </p>

            {/* User phone */}
            <p
              data-cy="user-phone"
              className="text-greyColor flex gap-1 items-center"
            >
              <BsFillTelephoneFill />
              {user.phone}
            </p>
          </div>
        </section>

        {/* Comments section */}
        <Comments comments={comments} />
      </article>
    </main>
  );
};

export default Details;
