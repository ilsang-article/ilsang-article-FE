import { useMutation } from "@tanstack/react-query";
import styled from "styled-components";
import { postLikePost, postRecentRead } from "../../api/mainpageAPI";

const PostCard = ({ post }) => {
  const recentRead = useMutation(({ postId }) => postRecentRead({ postId }));

  const likePost = useMutation(({ postId }) => postLikePost({ postId }));

  const recentReadOnlyMembers = () => {
    recentRead.mutate({ postId: post.id });
  };

  const likePostOnlyMembers = () => {
    likePost.mutate({ postId: post.id });
  };

  return (
    <Container>
      <Img onClick={recentReadOnlyMembers} />
      <Like onClick={likePostOnlyMembers} />
      <Content onClick={recentReadOnlyMembers}>
        <Title>{post.title}</Title>

        <Info>
          <Date>{post.writeDate}</Date>
          <Writer>{post.writer}</Writer>
        </Info>
        <Text>{post.contents}</Text>
      </Content>
    </Container>
  );
};

export default PostCard;

const Container = styled.div`
  width: 100%;
  height: 120px;
  margin: 5px 0;
  font-size: 1rem;
  padding: 5px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 12px;
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.p`
  font-size: 1.3em;
`;
const Date = styled.span`
  font-size: 0.9em;
`;

const Img = styled.div`
  width: 130px;
  height: 100px;
  background-color: skyblue;
  border-radius: 10px;
  flex-shrink: 0;
`;

const Writer = styled.span`
  font-size: 0.9em;
`;
const Text = styled.div`
  padding: 5px 0;
  width: 100%;
  font-size: 1em;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1.1em;
  height: 2.4em;
`;

const Like = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 99;
  background-color: red;
`;
