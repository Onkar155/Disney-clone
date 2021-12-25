import styled from "styled-components";
import Genres1 from "./Genres1";
import Genres2 from "./Genres2";
import Genres3 from "./Genres3";
import Genres4 from "./Genres4";
import Genres5 from "./Genres5";

const Channels_dropdown = () => {
  return (
    <Container>
      <Genres1 />
      <Genres2 />
      <Genres3 />
      <Genres4 />
      <Genres5 />
      <Genres1 />
      <Genres2 />
      <Genres3 />
      <Genres4 />
      <Genres5 />
    </Container>
  );
};
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Channels_dropdown;
