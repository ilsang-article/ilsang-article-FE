import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import { getLikePosts } from "../../api/likePageAPI";
import PostCard from "../postCard/PostCard";
import classes from "./LikePosts.module.css";
const LikePosts = () => {
  const {
    data,
    error,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["likePosts"],
    ({ pageParam = 0 }) => getLikePosts({ pageParam }),
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

  console.log(data);
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

export default LikePosts;
