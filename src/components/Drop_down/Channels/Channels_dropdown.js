import styled from "styled-components";
import Channels_list_1 from "./Channels_list_1";
import Channels_list_2 from "./Channels_list_2";
import Channels_list_3 from "./Channels_list_3";
import Channels_list_4 from "./Channels_list_4";

const Channels_dropdown = () => {
  return (
    <Container>
      <Channels_list_1 />

      <Channels_list_2 />
      <Channels_list_3 />
      <Channels_list_4 />
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
