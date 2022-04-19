import { connect, styled } from "frontity";
import { useEffect } from "react";
import List from "./list";

const Contact = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, [actions.source]);

  return data.isReady ? (
    <Content>
      <img src={post.acf.image.url} alt={post.acf.image.alt} />
      <div dangerouslySetInnerHTML={{ __html: post.acf.text }}></div>
    </Content>
  ) : null;
};

export default connect(Contact);

const Content = styled.div``;
