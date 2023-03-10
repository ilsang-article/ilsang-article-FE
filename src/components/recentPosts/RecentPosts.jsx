import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getRecentPosts } from "../../api/RecentPageAPI";
import PostCard from "../postCard/PostCard";

const RecentPosts = () => {
  const { data, isFetching, isLoading } = useQuery(["recentPosts"], () =>
    getRecentPosts()
  );
  console.log(data);
  if (isFetching) {
    return <p>is Fetching</p>;
  }
  if (isLoading) {
    return <p>is Loading</p>;
  }
  return (
    <Container>
      {data.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </Container>
  );
};

export default RecentPosts;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;
