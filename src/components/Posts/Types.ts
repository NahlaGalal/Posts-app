import { IPostCard } from "../PostCard/Types";

export interface ICardsContainerProps {
  cards: IPostCard[];
  isLoadMore?: boolean;
  onLoadMoreHandler?: () => void;
}

export interface IPostsHeaderProps {
  onSearchHandler: (val: string) => void;
}
