import styled from "styled-components";
import { canvasItems } from "../constant/list";
import Card from "../components/Card";
import { useState, useEffect } from "react";

function Main() {
  const [isMouseClicked, setIsMouseClicked] = useState();
  const [startX, setStartX] = useState();
  const [endX, setEndX] = useState();
  const [offset, setOffset] = useState();

  const handleMouseDown = (e) => {
    setIsMouseClicked(true);
    setStartX(e.clientX);
    setEndX(undefined);
  };

  const handleMouseUp = (e) => {
    setIsMouseClicked(false);
    setEndX(e.clientX);

    console.log("이동거리만큼, 여기서만 start end값을 사용한다");
    //여기서 이동을 시키는게 필요
  };

  const testFunc = () => {};

  const handleMouseMove = (e) => {
    if (isMouseClicked) {
      setOffset(e.clientX - startX); //정확히는 beforex현재 x를 알아야지
      setStartX(e.clientX);
    }
  };

  useEffect(() => {}, []);

  return (
    <MainContainer
    //   onMouseUp={handleMouseUp}
    //   onMouseDown={handleMouseDown}
    //   onMouseMove={handleMouseMove}
    >
      {canvasItems.length &&
        canvasItems.map((item, index) => (
          <Card
            key={index}
            idx={index}
            cardItem={item}
            total={canvasItems.length}
            // offset={offset}
            testFunc={testFunc}
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
  transition: all ease-in-out;
`;

export default Main;
