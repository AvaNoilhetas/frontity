import { connect, styled } from "frontity";
import { useEffect } from "react";
import List from "./list";

const Home = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, [actions.source]);

  return data.isReady ? (
    <>
      <Container
        style={{ backgroundImage: `url("${post.acf.background.url}")` }}
      ></Container>
    </>
  ) : null;
};

export default connect(Home);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  padding: 4em;
`;
