import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigator = useNavigate();

  return (
    <Container>
      <MenuBtn onClick={() => navigator("/")}>로고/홈</MenuBtn>
      <MenuBtn onClick={() => navigator("/likeposts")}>찜한글</MenuBtn>
      <MenuBtn onClick={() => navigator("/recentposts")}>최근읽은글</MenuBtn>
      <MenuBtn>로그인</MenuBtn>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5px;
`;

const MenuBtn = styled.div`
  width: 80px;
  height: 40px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
