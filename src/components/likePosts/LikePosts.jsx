import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { getLikePosts } from "../../api/likePageAPI";
import { useRedirectIfNotLoggedIn } from "../../hook/useRedirectIfNotLoggedIn";
import Loading from "../loading/Loading";
import NoResults from "../loading/NoResults";
import PostCard from "../postCard/PostCard";
import classes from "./LikePosts.module.css";
const LikePosts = () => {
  const [isNoResults, setIsNoResults] = useState(false);

  const [filter, setFilter] = useState("");
  const {
    data,
    error,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(["likePosts", filter], () => getLikePosts({ filter }), {
    onSuccess: (res) => {
      if (res.pages[0].content.length === 0) {
        setIsNoResults(true);
      } else {
        setIsNoResults(false);
      }
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.content.length === 10) {
        return allPages.length;
      } else if (lastPage.content.length < 10) {
        return undefined;
      }
    },
  });
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

  return (
    <div className={classes.container}>
      <div className={classes.top_menu}>
        <span className={classes.readCheck}>읽음확인</span>
        <div>
          <span
            className={filter === "" ? classes.filtered : classes.unfiltered}
            onClick={() => setFilter("")}
          >
            전체보기
          </span>
          <span
            className={
              filter === "?read=true" ? classes.filtered : classes.unfiltered
            }
            onClick={() => setFilter("?read=true")}
          >
            읽은글보기
          </span>
          <span
            className={
              filter === "?read=false" ? classes.filtered : classes.unfiltered
            }
            onClick={() => setFilter("?read=false")}
          >
            안읽은글보기
          </span>
        </div>
      </div>
      {isNoResults && <NoResults>찜한글이 없습니다.</NoResults>}
      <InfiniteScroll
        loadMore={fetchNextPage}
        hasMore={hasNextPage}
        style={{ width: "100%" }}
      >
        {data.pages.map((page) => {
          return page.content.map((post) => {
            return <PostCard key={post.id} post={post} isLikePosts={true} />;
          });
        })}
      </InfiniteScroll>
      {isFetching && <p className={classes.loading}>Loading...!!</p>}
    </div>
  );
};

export default LikePosts;
