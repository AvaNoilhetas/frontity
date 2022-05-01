import Switch from "@frontity/components/switch";
import { connect, css, Global, Head, styled } from "frontity";
import Header from "./header";
import List from "./list";
import Loading from "./loading";
import Page from "./page";
import PageError from "./page-error";
import Post from "./post";
import Title from "./title";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <Container>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="fr" />
      </Head>
      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />
      {/* Add the header of the site. */}
      <SiteContainer>
        <HeadContainer>
          <Header />
        </HeadContainer>
        {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
        <Main>
          <Switch>
            <Loading when={data.isFetching} />
            <List when={data.isArchive} />
            <Page when={data.isPage} />
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
          </Switch>
        </Main>
      </SiteContainer>
    </Container>
  );
};

export default connect(Theme);

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

  body {
    margin: 0;
    font-family: "Arial", sans-serif;
    font-size: 16px;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  p {
    margin-top: 0;
  }
`;

const Container = styled.div``;

const HeadContainer = styled.div`
  width: 33%;

  @media screen and (max-width: 992px) {
    width: 40%;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

const SiteContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: between;
  max-width: 1250px;
  margin: auto;

  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`;

const Main = styled.div`
  padding: 2rem 0rem 2rem 2rem;
  width: 66%;
  max-width: 670px;

  @media screen and (max-width: 992px) {
    padding: 2rem;
    width: 60%;
  }

  @media screen and (max-width: 560px) {
    padding: 0rem 1.5rem 0 1.5rem;
    width: auto;
  }
`;
