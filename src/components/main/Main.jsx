import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import { getAllPosts } from "../../api/mainpageAPI";
import PostCard from "../postCard/PostCard";

const Main = () => {
  const {
    data,
    error,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["allposts"],
    ({ pageParam = 0 }) => getAllPosts({ pageParam }),
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
    <Container>
      <Search placeholder="검색" />
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
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

const Search = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  font-size: 1.3rem;
  border: none;
  background-color: #dcd8d8;
`;
