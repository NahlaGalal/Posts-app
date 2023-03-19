import React from "react";
import { FiSearch } from "react-icons/fi";

const PostsHeader: React.FC = () => {
  return (
    <header className="custom-container bg-lightViolet py-24">
      <p
        data-cy="blog-tag"
        className="[ text-sm font-medium] 
        [ py-1 px-3 ] 
        [ text-mainColor bg-lightViolet mix-blend-multiply ] 
        rounded-2xl w-max mx-auto"
      >
        Our blog
      </p>

      {/* Heading of posts page */}
      <h1
        data-cy="main-header"
        className="[ text-5xl font-semibold leading-[60px] tracking-[-2%] text-darkVoilet text-center ]
        [ mt-4 mb-6 ]"
      >
        Resources and Insights
      </h1>
      <h2 data-cy="sub-header" className="text-xl text-mainColor text-center">
        The latest industry news, interviews, technologies, and resources.
      </h2>

      {/* Search input */}
      <div className="relative w-max [ mx-auto mt-10 ]">
        <input
          type="search"
          placeholder="search"
          name="search"
          data-cy="search-input"
          className="[ max-w-xs ]
          [ pr-4 pl-11 py-3 ]
          [ text-greyColor rounded-lg ]"
        />
        <span className="absolute top-3 left-4">
          <FiSearch className="text-greyColor w-5 h-5" />
        </span>
      </div>
    </header>
  );
};

export default PostsHeader;
