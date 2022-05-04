import { connect, styled, useConnect } from "frontity";
import Link from "./link";
/**
 * The modal containing the mobile menu items.
 *
 * @param props - The props passed to the component from parent.
 * @returns A React component.
 */
const MenuModal = ({ ...props }) => {
  const { state, actions } = useConnect();

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
    <div {...props}>
      {state.frontity.mode !== "amp" && <MenuOverlay />}
      <MenuContent as="nav">
        {items.map(item => (
          <>
            {item.title === "About" ? (
              <>
                <br />
                <br />
              </>
            ) : null}
            {item.title === "CV" ? (
              <a className="nav__link" href={item.url} target="_blank">
                {item.title}
              </a>
            ) : (
              <MenuLink
                key={item.ID}
                link={item.url}
                className={
                  state.source.url + state.router.link === item.url
                    ? "text-underline nav__link"
                    : "nav__link"
                }
              >
                {item.title === "about" && state.theme.language === "fr"
                  ? "A propos"
                  : item.title}
              </MenuLink>
            )}
          </>
        ))}
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
      </MenuContent>
    </div>
  );
};

const MenuOverlay = styled.div`
  background-color: #e8e8e8;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
  position: relative;

  .language {
    font-size: 16px;
    text-align: left;
    padding: 0.5rem 2rem;
    cursor: pointer;
  }

  .text-underline {
    text-decoration: underline;
  }

  .nav__link {
    width: 100%;
    display: inline-block;
    outline: 0;
    font-size: 16px;
    text-align: left;
    padding: 0.5rem 2rem;

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const MenuLink = styled(Link)`
  /* styles for active link */
  &[aria-current="page"] {
    font-weight: bold;
  }
`;

export default connect(MenuModal, { injectProps: false });
