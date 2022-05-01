import { connect, styled } from "frontity";
import { useEffect } from "react";
import List from "./list";

const Exposition = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, [actions.source]);

  return data.isReady ? (
    <Content>
      <div className="images__container">
        {Object.entries(post.acf.photos).map((group, index) => {
          return (
            <div key={index} className="images__group">
              {Object.entries(group[1]).map((item, i) => {
                if (item[0] === "image" && item[1] !== false) {
                  return (
                    <img
                      key={i}
                      className="images__image"
                      src={item[1].url}
                      alt={item[1].alt}
                    />
                  );
                }
                if (
                  item[0] === "text_fr" &&
                  item[1] !== "" &&
                  state.theme.language === "fr"
                ) {
                  return (
                    <div key={i} className="images__caption">
                      {item[1]}
                    </div>
                  );
                }
                if (
                  item[0] === "text_en" &&
                  item[1] !== "" &&
                  state.theme.language === "en"
                ) {
                  return (
                    <div key={i} className="images__caption">
                      {item[1]}
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </Content>
  ) : null;
};

export default connect(Exposition);

const Content = styled.div`
  .images {
    &__image {
      width: 100%;
    }

    &__group {
      position: relative;
      margin-bottom: 30px;

      &:hover > .images__caption {
        display: block;
      }
    }

    &__caption {
      text-align: justify;
      font-size: 12px;
      font-family: "Courier";
      display: none;
      padding: 5px 5px 5px 5px;
      margin-bottom: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      max-width: 100%;
      background-color: #dedee0;
    }

    &__description {
      max-width: 670px;
      text-align: justify;
      font-size: 12px;
      font-family: "Courier";
    }
  }
`;
