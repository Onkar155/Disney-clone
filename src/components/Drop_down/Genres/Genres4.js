import styled from "styled-components";

const Genres4 = (props) => {
  return (
    <>
      <Container>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7538/617538-h"
            alt="hotstar"
          />
          <h2>Comedy</h2>
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h"
            alt=""
          />
          <h2>Biopic</h2>
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4168/234168-h"
            alt=""
          />
          <h2>Horror</h2>
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/587/860587-h"
            alt=""
          />
          <h2>Mythology</h2>
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6194/986194-h"
            alt=""
          />
          <h2>Crime</h2>
        </Wrap>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 40px;
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
  padding-top: 30%;
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
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    top: 0;
  }
  h2 {
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    opacity: 0.7;
    font-family: "Imperial Script", cursive;
    font-size: calc(0.5em + 1vw);
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.25);
    border-color: rgba(249, 249, 249, 0.8);
    z-index: 1;
  }
`;

export default Genres4;
