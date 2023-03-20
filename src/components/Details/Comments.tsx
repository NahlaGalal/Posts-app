import React from "react";
import AddCommentUI from "./AddCommentUI";
import { ICommentsProps } from "./Types";

const Comments: React.FC<ICommentsProps> = ({ comments }) => {
  return (
    <section className="pt-6 mt-10 border-t border-t-greyColor border-opacity-20">
      <h2
        className="text-4xl font-semibold text-blackColor"
        data-cy="comments-header"
      >
        Top Comments ({comments.length})
      </h2>

      {/* Add comment */}
      <AddCommentUI />

      {/* List all comments */}
      <div className="flex flex-col gap-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4" data-cy="comment">
            {/* Commenter avatar */}
            <span
              className="[ flex justify-center items-center ]
                [ w-10 h-10 mt-4 ] 
                [ rounded-full bg-darkVoilet text-white ]
                [ font-bold text-xl ]"
              data-cy="commenter-avatar"
            >
              {comment.name[0].toLocaleUpperCase()}
            </span>

            <div
              className="[ border border-greyColor border-opacity-20 rounded ] 
            flex-1 p-4"
            >
              {/* Commenter name */}
              <p className="text-mainColor text-lg" data-cy="commenter-name">
                {comment.name}
              </p>

              {/* Commenter email */}
              <p
                className="text-greyColor text-sm mb-4"
                data-cy="commenter-email"
              >
                {comment.email}
              </p>

              {/* Comment body */}
              <p data-cy="comment-body">{comment.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
