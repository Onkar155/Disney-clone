import styled from "styled-components";

const Language = (props) => {
  return (
    <>
      <Textcontainer>
        <h2>Language</h2>
      </Textcontainer>
      <Container>
        <Wrap>
          <img src="" alt="Hindi" />
        </Wrap>
        <Wrap>
          <img src="" alt="English" />
        </Wrap>
        <Wrap>
          <img src="" alt="Marathi" />
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3625/753625-v"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5845/995845-h"
            alt=""
          />
        </Wrap>
      </Container>
    </>
  );
};
const Textcontainer = styled.div`
  margin-top: 150px;

  padding: 0 calc(3.5vw + 5px);
  top: 72px;
`;
const Container = styled.div`
  margin-top: 10px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  top: 72px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  padding: 0 calc(3.5vw + 5px);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;

    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    margin-bottom: -150px;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.25);
    border-color: rgba(249, 249, 249, 0.8);
    z-index: 1;
  }
`;
export default Language;
