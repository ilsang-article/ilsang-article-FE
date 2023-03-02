import styled from "styled-components";

const PostCard = () => {
  return (
    <Container>
      <Img />
      <Content>
        <Title>IT업계 취업 불황, 언제까지 이어지나?</Title>
        <Info>
          <Date>2023.03.02</Date>
          <Writer>김휘린</Writer>
        </Info>
        <Text>
          서로를 향한 마음이 우주의 작은 뭉쳐짐이라면 이 아름다운 기억이
          흩어져도 사라지진 않을 거야 잠들지 못한 바람은 고요히 빛나는 너의
          바다로 그 안에 잠겨 죽어도 좋으니 나 네 품에 안겨 너의 이름이 긴 밤을
          지나 찰나가 영원이 될 때 얼마나 내가 널 좋아하면 달에 네 목소리가 보여
          오색 빛 하늘 별 숲 사이로 너라는 꽃이 피어나 그 세상의 반을 가진다
          해도 그저 네 앞에선 꽃에 머물고픈 한 남자일 뿐 오롯이 나를 비춰요
          어둠이 드리워도 눈이 부시게 눈물조차 반짝이는 밤의 기적을 노래하네
          너의 이름이 긴 밤을 지나 찰나가 영원이 될 때 얼마나 내가 널 좋아하면
          달에 네 목소리가 보여 오색 빛 하늘 별 숲 사이로 너라는 꽃이 피어나 그
          세상의 반을 가진다 해도 그저 네 앞에선 꽃에 머물고픈 남자일 뿐 밤하늘
          수 놓인 모든 것들이 운명 위로 내리는 걸 내 꿈에 안긴 널 한 번 더
          가득히 안아 시간을 넘어 빛이 닿는 세계의 바깥까지 함께 너의 깊은
          미소의 황홀 속 일렁임은 영원과 이어질 거야 얼마나 내가 널 원하는지
          눈을 감아도 너와 마주쳐 쏟아지는 달빛의 선율을 따라 자유의 날개로
          향하는 봄날엔 너의 유일한 숨결이 분다
        </Text>
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
