import React from "react";
import { IComment } from "./Types";

const Comment: React.FC<IComment> = ({ body, email, id, name }) => {
  return (
    <div key={id} className="flex gap-4" data-cy="comment">
      {/* Commenter avatar */}
      <span
        className="[ flex justify-center items-center ]
                [ w-10 h-10 mt-4 ] 
                [ rounded-full bg-redColor text-white ]
                [ font-bold text-xl ]"
        data-cy="commenter-avatar"
      >
        {name[0].toLocaleUpperCase()}
      </span>

      <div
        className="[ border border-greyColor border-opacity-20 rounded ] 
            flex-1 p-4"
      >
        {/* Commenter name */}
        <p className="text-blueColor text-lg" data-cy="commenter-name">
          {name}
        </p>

        {/* Commenter email */}
        <p className="text-greyColor text-sm mb-4" data-cy="commenter-email">
          {email}
        </p>

        {/* Comment body */}
        <p data-cy="comment-body">{body}</p>
      </div>
    </div>
  );
};

export default Comment;
