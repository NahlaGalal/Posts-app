import React from "react";
import PostCard from "../PostCard";
import { ICardsContainerProps } from "./Types";

const CardsContainer: React.FC<ICardsContainerProps> = ({
  cards,
  isLoadMore = false,
  onLoadMoreHandler,
}) => {
  return (
    <div className="custom-container">
      <main className="z-10 relative sm:px-8">
        {/* First two blogs in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
          {cards.slice(0, 2).map((card) => (
            <PostCard key={card.id} {...card} />
          ))}
        </div>

        {/* Other blogs 3 in a row in large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mt-12">
          {cards.slice(2).map((card) => (
            <PostCard key={card.id} {...card} />
          ))}
        </div>

        {/* Is load more button */}
        {/* Adding a load more button instead of pagination, 
        because I don't know exactly the number of pages */}
        {/* So I use Load more instead of next and prev */}
        {isLoadMore && (
          <button
            className="mt-10 [ py-2.5 px-4 ] 
        [ bg-mainColor text-white text-sm font-semibold ]
        [ border border-mainColor ]
        rounded-lg mx-auto w-max block"
            onClick={onLoadMoreHandler}
          >
            Load more
          </button>
        )}
      </main>
    </div>
  );
};

export default CardsContainer;
