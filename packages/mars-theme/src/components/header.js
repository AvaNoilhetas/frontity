import { connect, styled } from "frontity";
import Link from "./link";
import MobileMenu from "./menu";
import Nav from "./nav";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <MobileMenu />
        <Nav />
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div``;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 46px;
  margin-top: 0;
  padding: 2rem 2rem 0 2rem;

  @media screen and (max-width: 1200px) {
    font-size: 32px;
  }

  @media screen and (max-width: 992px) {
    padding: 2rem 1rem 0 1rem;
    font-size: 28px;
  }

  @media screen and (max-width: 560px) {
    padding: 2rem 1.5rem 0 1.5rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
