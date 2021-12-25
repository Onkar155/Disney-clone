import styled from "styled-components";
import Recommends from "../../../Recommends";

const Kid = (props) => {
  return (
    <Container>
      <h2>Kids</h2>
      <Recommends />
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
export default Kid;
