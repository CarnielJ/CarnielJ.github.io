import { HeaderWrapper, Island, NavList, NavItem, NavLink } from "./styles";

const NAV_ITEMS = [
  { id: "home", label: "Home", to: "/" },
  { id: "projects", label: "Projects", to: "/projects" },
  { id: "about", label: "About", to: "/about" },
];

const Header = () => {
  return (
    <HeaderWrapper>
      <Island>
        <NavList>
          {NAV_ITEMS.map(({ id, label, to }) => (
            <NavItem key={id}>
              <NavLink to={to} end={to === "/"}>
                {label}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </Island>
    </HeaderWrapper>
  );
};

export default Header;
