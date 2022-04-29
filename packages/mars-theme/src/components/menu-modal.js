import { connect, styled, useConnect } from "frontity";
import Link from "./link";

/**
 * The modal containing the mobile menu items.
 *
 * @param props - The props passed to the component from parent.
 * @returns A React component.
 */
const MenuModal = ({ ...props }) => {
  const { state } = useConnect();
  const { menu } = state.theme;

  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

  return (
    <div {...props}>
      {state.frontity.mode !== "amp" && <MenuOverlay />}
      <MenuContent as="nav">
        {items.map(item => (
          <MenuLink key={item.ID} link={item.url}>
            {item.title}
          </MenuLink>
        ))}
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
`;

const MenuLink = styled(Link)`
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
  /* styles for active link */
  &[aria-current="page"] {
    color: yellow;
    font-weight: bold;
  }
`;

export default connect(MenuModal, { injectProps: false });
