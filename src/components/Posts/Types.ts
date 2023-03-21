import { IPostCard } from "../PostCard/Types";

export interface ICardsContainerProps {
  cards: IPostCard[];
  isLoadMore?: boolean;
  onLoadMoreHandler?: () => void;
}
