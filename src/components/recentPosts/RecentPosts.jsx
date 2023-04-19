import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { getRecentPosts } from "../../api/RecentPageAPI";
import { useRedirectIfNotLoggedIn } from "../../hook/useRedirectIfNotLoggedIn";
import Loading from "../loading/Loading";
import NoResults from "../loading/NoResults";
import PostCard from "../postCard/PostCard";
import classes from "./RecentPosts.module.css";

const RecentPosts = () => {
  const [isNoResults, setIsNoResults] = useState(false);
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
      onSuccess: (res) => {
        if (res.pages[0].content.length === 0) {
          setIsNoResults(true);
        }
      },
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
    return (
      <div className={classes.container}>
        <p>Error! {error.toString()}</p>
      </div>
    );
  }
  if (isLoading) {
    return <Loading />;
  }
  if (isNoResults) {
    return <NoResults>최근 읽은 글이 없습니다.</NoResults>;
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

export default RecentPosts;
