import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { getAllPosts } from "../../api/mainpageAPI";
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
    return <p>Error! {error.toString()}</p>;
  }
  if (isLoading) {
    return <p>isLoading...</p>;
  }

  return (
    <div className={classes.container}>
      {/* <input
        className={classes.search}
        placeholder="검색"
        onChange={onSearchChange}
      /> */}
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

export default Main;
