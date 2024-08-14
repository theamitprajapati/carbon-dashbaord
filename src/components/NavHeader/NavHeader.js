import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../Auth/auth-context";

import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  Search,
  MenuItem,
  MenuItemDivider,
  MenuItemGroup,
  MenuItemSelectable,
  Menu,
  MenuItemRadioGroup,
  //  SideNavLink,
  //  SideNavMenu,
  //  SideNavMenuItem
} from "@carbon/react";
import { Logout, UserAvatar } from "@carbon/react/icons";

const NavHeader = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label={props.title}>
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName element={Link} to="/" prefix="">
            Zybisys | Zoomview
          </HeaderName>
          <HeaderNavigation aria-label="New Report">
            <HeaderMenuItem element={Link} to="/infrastructure">
              Infrastructure
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/logs">
              Logs
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/lama">
              Lama
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/documents">
              Documents
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/setting">
              Setting
            </HeaderMenuItem>
            {/* <Menu label="aaaaaa with" open={true}>
            <MenuItem label="Share with">
              <MenuItemRadioGroup
                label="Share with"
                items={["None", "Product team", "Organization", "Company"]}
                defaultSelectedItem="Product team"
              />
            </MenuItem>
          </Menu> */}
          </HeaderNavigation>
          <Search
            style={{ background: "#2c4048" }}
            size="lg"
            placeholder="Search your data"
            labelText="Search"
            closeButtonLabelText="Clear search input"
            id="search-1"
            onChange={() => {}}
            onKeyDown={() => {}}
          />

          

          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem element={Link} to="/newreport">
                  New Report
                </HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <Link to="/userprofile">
              <HeaderGlobalAction aria-label="User Profile">
                <UserAvatar size={20} />
              </HeaderGlobalAction>
            </Link>
            <HeaderGlobalAction onClick={authCtx.onLogout} aria-label="Logout">
              <Logout size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
};

export default NavHeader;
