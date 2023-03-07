import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import { getAllPosts } from "../../api/mainpageAPI";
import PostCard from "../postCard/PostCard";

const Main = () => {
  const {
    data,
    error,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isLoading,
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
  if (isFetching) {
    return <p>is Fetching</p>;
  }
  if (isError) {
    return <p>Error! {error.toString()}</p>;
  }

  return (
    <Container>
      <Serch placeholder="검색" />
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((page) => {
          return page.content.map((post) => {
            return <PostCard post={post} />;
          });
        })}
      </InfiniteScroll>
      {isLoading && <p>Loading</p>}
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Serch = styled.input`
  width: 98%;
  height: 30px;
  margin-top: 10px;
  font-size: 1.3rem;
  border: none;
  background-color: #dcd8d8;
`;
