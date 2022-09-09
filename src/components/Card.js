import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

//저장되어 있는 값으로 그리고
//새롭게 되있는 곳으로 무빙을 시킨다.

function Card(props) {
  const [cardElement, setCardElement] = useState(undefined);

  const cardRef = useRef(null);
  // const { idx, cardItem, total, offset } = props;
  const { idx, cardItem, total } = props;

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
  };

  const handleMouseMove = (e) => {
    if (isMouseClicked) {
      // setOffset(); //정확히는 beforex현재 x를 알아야지
      console.log(cardRef.current, e.clientX - startX);
      cardRef.current = e.clientX - startX;

      let x, y;

      x =
        window.innerWidth / 2 -
        100 +
        (window.innerWidth / 2) *
          Math.sin(toRadians((360 / total) * idx) + cardRef.current);

      y =
        window.innerHeight -
        200 +
        (window.innerHeight / 2) *
          Math.cos(toRadians((360 / total) * idx) + cardRef.current);

      cardElement.style.transform = `translate3d(${x}px, ${y}px, 0px)`;

      setStartX(e.clientX);
    }
  };

  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  const rotateCard = () => {
    const beforeOffset = cardRef.current;
    const afterOffset = offset;

    let timeElapsed = beforeOffset;
    const $card = cardRef.current;
    const draw = () => {
      let x, y;
      x =
        window.innerWidth / 2 -
        100 +
        (window.innerWidth / 2) *
          Math.sin(toRadians((360 / total) * idx) + timeElapsed);
      y =
        window.innerHeight -
        200 +
        (window.innerHeight / 2) *
          Math.cos(toRadians((360 / total) * idx) + timeElapsed);
      cardElement.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
      timeElapsed += 0.001;
      let id = requestAnimationFrame(draw);

      if (timeElapsed === afterOffset) cancelAnimationFrame(id);
    };
    draw();
  };

  const draw = () => {
    const $card = cardRef.current;

    let x, y;

    x =
      window.innerWidth / 2 -
      100 +
      (window.innerWidth / 2) * Math.sin(toRadians((360 / total) * idx));

    y =
      window.innerHeight -
      200 +
      (window.innerHeight / 2) * Math.cos(toRadians((360 / total) * idx));

    $card.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  };

  // useEffect(() => {
  //   if (offset === undefined) {
  //     draw();
  //     setCardElement(cardRef.current);
  //   } else {
  //     const beforeOffset = cardRef.current;
  //     const afterOffset = offset;

  //     // if (typeof beforeOffset === "number") {
  //     //   console.log(beforeOffset, afterOffset);
  //     // }

  //     // cardElement.style.transform = `translate3d(${
  //     //   cardElement.getBoundingClientRect().x
  //     // }px, ${cardElement.getBoundingClientRect().y}px, 0px)`;

  //     // //////

  //     // let x, y;

  //     // x =
  //     //   window.innerWidth / 2 -
  //     //   100 +
  //     //   (window.innerWidth / 2) * Math.sin(toRadians((360 / total) * idx));

  //     // y =
  //     //   window.innerHeight -
  //     //   200 +
  //     //   (window.innerHeight / 2) * Math.cos(toRadians((360 / total) * idx));

  //     // cardElement.style.transform = `translate3d(${x}px, ${y}px, 0px)`;

  //     // console.log(
  //     //   cardElement.getBoundingClientRect().x,
  //     //   cardElement.getBoundingClientRect().y
  //     // );

  //     rotateCard();

  //     cardRef.current = offset;
  //   }
  // }, [offset]);

  useEffect(() => {
    if (offset === undefined) {
      draw();
      setCardElement(cardRef.current);
    } else {
      const beforeOffset = cardRef.current;
      const afterOffset = offset;

      console.log(beforeOffset, afterOffset);

      // if (typeof beforeOffset === "number") {
      //   console.log(beforeOffset, afterOffset);
      // }

      // cardElement.style.transform = `translate3d(${
      //   cardElement.getBoundingClientRect().x
      // }px, ${cardElement.getBoundingClientRect().y}px, 0px)`;

      // //////

      // let x, y;

      // x =
      //   window.innerWidth / 2 -
      //   100 +
      //   (window.innerWidth / 2) * Math.sin(toRadians((360 / total) * idx));

      // y =
      //   window.innerHeight -
      //   200 +
      //   (window.innerHeight / 2) * Math.cos(toRadians((360 / total) * idx));

      // cardElement.style.transform = `translate3d(${x}px, ${y}px, 0px)`;

      // console.log(
      //   cardElement.getBoundingClientRect().x,
      //   cardElement.getBoundingClientRect().y
      // );

      cardRef.current = offset;
    }
  }, [offset]);

  useEffect(() => {
    window.addEventListener("mousedown", (el) => {
      handleMouseDown(el);
    });
    window.addEventListener("mouseup", (el) => {
      handleMouseUp(el);
    });
    window.addEventListener("mousemove", (el) => {
      handleMouseMove(el);
    });
  });

  return (
    <CardWrapper ref={cardRef}>
      <CardCreatedAt>{cardItem.created_at}</CardCreatedAt>
      <CardPoster backgroundColor={cardItem.color}>
        <Title>{cardItem.title}</Title>
        <Numbering>{idx}</Numbering>
      </CardPoster>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  transition: all ease-in-out;
  position: absolute;
`;

const CardCreatedAt = styled.div`
  color: red;
  width: 100px;
  height: 100px;
`;

const CardPoster = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 220px;
  height: 310px;
`;

const Title = styled.div``;

const Numbering = styled.div``;

export default Card;
