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
      <img
        className="contact__image"
        src={post.acf.image.url}
        alt={post.acf.image.alt}
      />
      <div
        className="contact__text"
        dangerouslySetInnerHTML={{ __html: post.acf.text }}
      ></div>
    </Content>
  ) : null;
};

export default connect(Contact);

const Content = styled.div`
  display: flex;

  .contact {
    &__text,
    &__image {
      width: 50%;
    }

    &__text {
      text-align: justify;
      font-size: 12px;
      font-family: "Courier";
      line-height: 1.5;
      font-weight: 400;
      color: #212529;
      padding-left: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .contact {
      &__text,
      &__image {
        width: 100%;
      }

      &__text {
        padding-left: 0;
        padding-top: 1rem;
      }
    }
  }
`;
