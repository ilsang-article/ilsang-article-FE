import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import { getAllPosts } from "../../api/mainpageAPI";
import Loading from "../loading/Loading";
import PostCard from "../postCard/PostCard";
import classes from "./Main.module.css";
const Main = ({ search, setSearch, onSearchChange }) => {
  const {
    data,
    error,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["allposts", search],
    ({ pageParam = 0 }) => getAllPosts({ pageParam, search }),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.content.length === 10) {
          return allPages.length;
        } else if (lastPage.content.length < 10) {
          return undefined;
        }
      },
    }
  );

  if (isError) {
    return (
      <div className={classes.container}>
        <p>Error! {error.toString()}</p>
      </div>
    );
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.container}>
      <InfiniteScroll
        loadMore={fetchNextPage}
        hasMore={hasNextPage}
        style={{ width: "100%" }}
      >
        {data.pages.map((page) => {
          return page.content.map((post) => {
            return <PostCard key={post.id} post={post} />;
          });
        })}
      </InfiniteScroll>
      {isFetching && <p className={classes.loading}>Loading...!!</p>}
    </div>
  );
};

export default Main;
