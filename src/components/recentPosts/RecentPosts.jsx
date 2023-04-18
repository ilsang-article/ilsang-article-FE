import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useNavigate } from "react-router-dom";
import { getRecentPosts } from "../../api/RecentPageAPI";
import { useLoginCheck } from "../../context/LoginCheckContext";
import { useRedirectIfNotLoggedIn } from "../../hook/useRedirectIfNotLoggedIn";
import PostCard from "../postCard/PostCard";
import classes from "./RecentPosts.module.css";

const RecentPosts = () => {
  const {
    data,
    error,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["recentPosts"],
    ({ pageParam = 0 }) => getRecentPosts({ pageParam }),
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

  useRedirectIfNotLoggedIn();

  if (isError) {
    return <p>Error! {error.toString()}</p>;
  }
  if (isLoading) {
    return <p>isLoading...</p>;
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
      {isFetching && <p>Loading...!!</p>}
    </div>
  );
};

export default RecentPosts;
