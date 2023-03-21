import React from "react";
import { FiSearch } from "react-icons/fi";
import { IPostsHeaderProps } from "./Types";
import bgPattern from "/bg-pattern.svg";

const PostsHeader: React.FC<IPostsHeaderProps> = ({ onSearchHandler }) => {
  return (
    <header className="custom-container bg-lightGrey py-24 relative">
      <p
        data-cy="blog-tag"
        className="[ text-sm font-medium ] 
        [ py-1 px-3 ] 
        [ text-redColor bg-lightGrey mix-blend-multiply ] 
        rounded-2xl w-max mx-auto"
      >
        Our blog
      </p>

      {/* Heading of posts page */}
      <h1
        data-cy="main-header"
        className="[ text-4xl sm:text-5xl font-semibold leading-[60px] text-redColor text-center ]
        [ mt-4 mb-6 ]"
      >
        Resources and Insights
      </h1>
      <h2 data-cy="sub-header" className="text-xl text-blueColor text-center">
        The latest industry news, interviews, technologies, and resources.
      </h2>

      {/* Search input */}
      <div className="relative [ w-max max-w-full ] [ mx-auto mt-10 ]">
        <input
          type="search"
          placeholder="search"
          name="search"
          data-cy="search-input"
          className="[ max-w-full sm:max-w-xs ]
          [ pr-4 pl-11 py-3 ]
          [ text-greyColor rounded-lg ]"
          onChange={(e) => onSearchHandler(e.currentTarget.value)}
        />
        <span className="absolute top-3 left-4">
          <FiSearch className="text-greyColor w-5 h-5" />
        </span>
      </div>

      {/* Span for background only */}
      <span className="absolute left-0 w-full" aria-hidden>
        <img src={bgPattern} alt="background pattern" className="w-full" />
      </span>
    </header>
  );
};

export default PostsHeader;
