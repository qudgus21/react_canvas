import { useEffect } from "react";
import styled from "styled-components";
import { canvasItems } from "../constant/list";
import Card from "../components/Card";

function Main(props) {
  return (
    <MainContainer>
      {canvasItems.length &&
        canvasItems.map((item, index) => (
          <Card
            key={index}
            idx={index}
            cardItem={item}
            total={canvasItems.length}
          />
        ))}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  /* overflow: hidden; */
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

//1. 위치를 잡아야함 (css)
//2. 클릭 훅을 생각해내야함
//3. 변경위치 값만큼 회전시켜주어야함

export default Main;
