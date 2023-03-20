import React from "react";
import Comments from "./Comments";
import { IPostDetails } from "./Types";

const Details: React.FC<IPostDetails> = ({ body, comments, title, user }) => {
  return (
    <main className="mt-24">
      <article className="custom-container">
        {/* Post title */}
        <h2
          data-cy="post-title"
          className="text-5xl leading-[60px] font-semibold text-blackColor mb-6"
        >
          {title}
        </h2>

        {/* Post body */}
        <p data-cy="post-body" className="text-xl text-greyColor w-3/4 mx-auto">
          {body}
        </p>

        {/* Author data */}
        <section
          className="[ flex items-center gap-4 flex-wrap ]
        [ pt-6 border-t border-t-greyColor border-opacity-20 ]
        w-3/4 mx-auto mt-12"
        >
          {/* Author avatar */}
          <span
            className="[ flex justify-center items-center ]
                [ w-14 h-14 ] 
                [ rounded-full bg-darkVoilet text-white ]
                [ font-bold text-xl ]"
            data-cy="user-avatar"
          >
            {user.name[0]}
          </span>

          <div>
            {/* User name and company */}
            <p
              data-cy="user-name"
              className="text-lg font-semibold text-blackColor"
            >
              {user.name}
                <span className="text-base font-normal mx-1 text-greyColor">
                  from
                </span>
              {user.company.name}
            </p>
            {/* User phone */}
            <p data-cy="user-phone" className="text-greyColor">
              {user.phone}
            </p>
          </div>
        </section>

        {/* Comments section */}
        <Comments />
      </article>
    </main>
  );
};

export default Details;
