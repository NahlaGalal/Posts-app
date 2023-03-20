import React, { useState } from "react";

const AddCommentUI = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const expandInputHandler = () => setIsExpanded(true);
  const collapseInputHandler = () => setIsExpanded(false);

  return (
    <form className="my-6 pl-14">
      <textarea
        name="comment"
        id="comment"
        placeholder="Write your comment here..."
        className={`[ rounded-lg border border-greyColor border-opacity-30 ] 
      [ px-3.5 py-2.5 ]
      [ w-full ${isExpanded ? "h-32" : "h-16"} ]
      [ text-blackColor ]
      [ transition-all duration-300 ]`}
        onFocus={expandInputHandler}
        data-cy="comment-textarea"
      />

      {isExpanded && (
        <div className="flex gap-2">
          <button
            type="submit"
            className="[ py-2.5 px-4 ] 
        [ bg-mainColor text-white text-sm font-semibold ]
        [ border border-mainColor ]
        rounded-lg"
        data-cy="submit-comment"
          >
            Submit
          </button>
          <button
            type="reset"
            className="[ py-2.5 px-4 ] 
        [ text-blackColor text-sm font-semibold ]
        [ border border-blackColor ]
        rounded-lg"
            onClick={collapseInputHandler}
            data-cy="cancel-comment"
          >
            Cancel
          </button>
        </div>
      )}
    </form>
  );
};

export default AddCommentUI;
