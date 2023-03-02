import styled from "styled-components";
import PostCard from "../postCard/PostCard";

const Main = () => {
  return (
    <Container>
      <Serch placeholder="검색" />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
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
