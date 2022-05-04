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
              {item.title === "About" ? <br /> : null}
              {item.title === "CV" ? (
                <a href={item.url} target="_blank">
                  {item.title}
                </a>
              ) : (
                <Link
                  className={
                    state.source.url + state.router.link === item.url
                      ? "text-underline"
                      : ""
                  }
                  link={item.url}
                >
                  {item.title === "About" && state.theme.language === "fr"
                    ? "A propos"
                    : item.title}
                </Link>
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
      <div className="language">
        <br />
        <a
          className={state.theme.language === "fr" ? "text-underline" : ""}
          onClick={clickFR}
        >
          FR
        </a>
        &nbsp;/&nbsp;
        <a
          className={state.theme.language === "en" ? "text-underline" : ""}
          onClick={clickEN}
        >
          EN
        </a>
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
  padding: 0 2rem 2rem 2rem;

  @media screen and (max-width: 992px) {
    padding: 0 1rem 2rem 1rem;
  }

  @media screen and (max-width: 560px) {
    display: none;
  }

  .language {
    font-size: 14px;
    cursor: pointer;
  }

  .text-underline {
    text-decoration: underline;
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
