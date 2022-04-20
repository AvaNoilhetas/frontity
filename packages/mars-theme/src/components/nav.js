import { connect, styled, useConnect } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => {
  const { actions } = useConnect();

  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

  const clickFR = () => {
    if (state.theme.language) {
      actions.theme.switchLanguageFR();
    }
  };

  const clickEN = () => {
    if (state.theme.language) {
      actions.theme.switchLanguageEN();
    }
  };

  return (
    <NavContainer>
      {items.map(item => {
        if (!item.child_items) {
          return (
            <NavItem key={item.ID}>
              {item.title === "Contact" ? <br /> : null}
              {item.title === "CV" ? (
                <a href={item.url} target="_blank">
                  {item.title}
                </a>
              ) : (
                <Link link={item.url}>{item.title}</Link>
              )}
            </NavItem>
          );
        } else {
          const childItems = item.child_items;
          return (
            <NavItemWithChild key={item.ID}>
              <NavItem>
                <Link link={item.url}>{item.title}</Link>
              </NavItem>
              <ChildMenu>
                {childItems.map(childItem => {
                  return (
                    <NavItem key={childItem.ID}>
                      <Link link={childItem.url}>{childItem.title}</Link>
                    </NavItem>
                  );
                })}
              </ChildMenu>
            </NavItemWithChild>
          );
        }
      })}
      <div>
        <button onClick={clickFR}>FR</button>
        <button onClick={clickEN}>EN</button>
      </div>
    </NavContainer>
  );
};

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  font-size: 16px;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }
`;
