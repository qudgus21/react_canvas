import { canvasItems } from "../constant/list";
import styled from "styled-components";
import Card from "../components/Card";

function Main(props) {
  return (
    <div className="main">
      {canvasItems.length &&
        canvasItems.map((item, index) => <Card key={index} cardItem={item} />)}
    </div>
  );
}

export default Main;
