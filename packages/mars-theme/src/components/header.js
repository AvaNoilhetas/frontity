import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        {/* <MobileMenu /> */}
        <Nav />
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  padding: 2em;
`;

const Title = styled.h1`
  font-size: 38px;
  margin-bottom: 46px;
  font-weight: normal;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
