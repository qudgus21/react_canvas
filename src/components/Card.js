import { useEffect, useRef } from "react";
import styled from "styled-components";

function Card(props) {
  const cardRef = useRef();
  const { idx, cardItem, total } = props;

  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  useEffect(() => {
    const $card = cardRef.current;

    let x, y;

    x =
      window.innerWidth / 2 -
      100 +
      (window.innerWidth / 2) * Math.sin(toRadians((360 / total) * idx));

    y =
      window.innerWidth / 2 -
      50 +
      (window.innerHeight / 2) * Math.cos(toRadians((360 / total) * idx));

    $card.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }, []);

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
