import styled from "styled-components";
import NewDisney from "../../../NewDisney";
import Originals from "../../../Originals";

const Science = (props) => {
  return (
    <Container>
      <h2>Science Frictions</h2>
      <NewDisney />
      <Originals />
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
export default Science;
