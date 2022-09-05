import { useEffect } from "react";
import styled from "styled-components";

function Card(props) {
  useEffect(() => {});

  return <Button>{props.cardItem.title}</Button>;
}

const Button = styled.button`
  color: red;
  width: 100px;
  height: 100px;
`;

export default Card;
