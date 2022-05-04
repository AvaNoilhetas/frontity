import { connect, styled } from "frontity";

const description404EN = (
  <>
    That page can’t be found{" "}
    <span role="img" aria-label="confused face">
      😕
    </span>
  </>
);

const description404FR = (
  <>
    Cette page est introuvable{" "}
    <span role="img" aria-label="confused face">
      😕
    </span>
  </>
);

const descriptionEN = (
  <>
    Don&apos;t panic! Seems like you encountered an error. If this persists,
    <a href="https://community.frontity.org"> let us know </a> or try refreshing
    your browser.
  </>
);

const descriptionFR = (
  <>
    Pas de panique ! Il semble que vous ayez rencontré une erreur. Si cela
    persiste,
    <a href="https://community.frontity.org"> faites-le nous savoir </a> ou
    essayez d'actualiser ton navigateur.
  </>
);

// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);

  const titleEN = "Oops! Something went wrong";
  const title404EN = "Oops! 404";

  const titleFR = "Oops! Quelque chose s'est mal passé";
  const title404FR = "Oops! 404";

  return (
    <Container>
      {state.theme.language === "fr" ? (
        <>
          <Title>{data.is404 ? title404FR : titleFR}</Title>
          <Description>
            {data.is404 ? description404FR : descriptionFR}
          </Description>
        </>
      ) : (
        <>
          <Title>{data.is404 ? title404EN : titleEN}</Title>
          <Description>
            {data.is404 ? description404EN : descriptionEN}
          </Description>
        </>
      )}
    </Container>
  );
};

export default connect(Page404);

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 24px 0;
  text-align: center;
  font-family: "Courier";
  color: #212529;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 4em;
  font-family: "Arial";
`;

const Description = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
`;
