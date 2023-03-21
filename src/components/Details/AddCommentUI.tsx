import { useContext, useState } from "react";
import { AiFillWarning, AiFillCheckCircle } from "react-icons/ai";
import { CommentContext } from "../../pages/PostDetails";

const AddCommentUI = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { onSubmit, register, errors, isSuccess } = useContext(CommentContext);

  const expandInputHandler = () => setIsExpanded(true);
  const collapseInputHandler = () => setIsExpanded(false);

  return (
    <form className="my-6 pl-14" onSubmit={onSubmit}>
      {register && (
        <>
          <div className="flex flex-wrap gap-4 mb-4">
            {/* Name input */}
            <div className="flex-1 w-full min-w-[200px]">
              <input
                data-cy="input-name"
                type="text"
                id="name"
                placeholder="Name"
                className="[ rounded-lg border border-greyColor border-opacity-30 ] 
                  [ px-3.5 ] [ w-full h-10 ] [ text-blackColor ]"
                {...register("name", { required: "Name input is required" })}
              />

              {/* Name input error */}
              {errors.name && (
                <p
                  className="text-xs flex gap-1 items-center mt-1 text-redColor"
                  data-cy="name-error"
                >
                  <AiFillWarning />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email input */}
            <div className="flex-1 w-full min-w-[200px]">
              <input
                data-cy="input-email"
                type="email"
                id="email"
                placeholder="Email"
                className="[ rounded-lg border border-greyColor border-opacity-30 ] 
                  [ px-3.5 ] [ w-full h-10 ] [ text-blackColor ]"
                {...register("email", {
                  required: "Email input is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "This email is unvalid",
                  },
                })}
              />

              {/* Email input error */}
              {errors.email && (
                <p
                  className="text-xs flex gap-1 items-center mt-1 text-redColor"
                  data-cy="email-error"
                >
                  <AiFillWarning />
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Comment input */}
          <textarea
            id="comment"
            placeholder="Write your comment here..."
            className={`[ rounded-lg border border-greyColor border-opacity-30 ] 
          [ px-3.5 py-2.5 ]
          [ w-full ${isExpanded ? "h-32" : "h-16"} ]
          [ text-blackColor ]
          [ transition-all duration-300 ]`}
            onFocus={expandInputHandler}
            data-cy="comment-textarea"
            {...register("body", { required: "Message input is required" })}
          />

          {/* Comment input error */}
          {errors.body && (
            <p
              className="text-xs flex gap-1 items-center mt-1 text-redColor"
              data-cy="comment-error"
            >
              <AiFillWarning />
              {errors.body.message}
            </p>
          )}
        </>
      )}

      {isSuccess && (
        <p
          data-cy="comment-success"
          className="text-sm flex items-center gap-1 text-redColor mt-2"
        >
          <AiFillCheckCircle />
          Comment added successfully
        </p>
      )}

      {isExpanded && (
        <div className="flex gap-2 mt-6">
          <button
            type="submit"
            className="[ py-2.5 px-4 ] 
        [ bg-blueColor text-white text-sm font-semibold ]
        [ border border-blueColor ]
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
