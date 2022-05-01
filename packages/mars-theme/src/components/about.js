import { connect, styled } from "frontity";
import { useEffect } from "react";
import List from "./list";

const About = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, [actions.source]);

  return data.isReady ? (
    <Content>
      {state.theme.language === "fr" ? (
        <div dangerouslySetInnerHTML={{ __html: post.acf.text_fr }}></div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: post.acf.text_en }}></div>
      )}
    </Content>
  ) : null;
};

export default connect(About);

const Content = styled.div`
  text-align: justify;
  font-size: 12px;
  font-family: "Courier";
  color: #212529;
  line-height: 1.6;
`;
