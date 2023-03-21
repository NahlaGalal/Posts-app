import React from "react";
import AddCommentUI from "./AddCommentUI";
import Comment from "./Comment";
import { ICommentsProps } from "./Types";

const Comments: React.FC<ICommentsProps> = ({ comments }) => {
  return (
    <section className="pt-6 mt-10 border-t border-t-greyColor border-opacity-20">
      <h2
        className="text-2xl font-semibold text-blackColor"
        data-cy="comments-header"
      >
        Top Comments ({comments.length})
      </h2>

      {/* Add comment */}
      <AddCommentUI />

      {/* List all comments */}
      <div className="flex flex-col gap-6">
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </section>
  );
};

export default Comments;
