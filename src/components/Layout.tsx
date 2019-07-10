import React, { useState } from "react";

import {
  AppContainer,
  GlobalStyles,
  MainContent,
  BodyContainer,
  Flex,
  MobileButton,
  Navigation,
} from ".";
import { Link } from "@reach/router";
import Bars from "./Icons/BarsIcon";
import Sidebar from "./Sidebar";

const Layout: React.SFC<{ chlidren?: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, toggleSidebar] = useState(false);
  return (
    <BodyContainer
    >
      <GlobalStyles />
      <Sidebar open={sidebarOpen}>
        <Link to="/" onClick={() => toggleSidebar(false)}>
          HOME
        </Link>
        <Link to="/accommodations" onClick={() => toggleSidebar(false)}>
          ACCOMMODATIONS
        </Link>
        <Link to="/rsvp" onClick={() => toggleSidebar(false)}>
          RSVP
        </Link>
        <Link to="/rsvp" onClick={() => toggleSidebar(false)}>
          REGISTRY
        </Link>
      </Sidebar>
      <AppContainer
        onClick={() => {
          if (sidebarOpen) {
            toggleSidebar(false);
          }
        }}
      >
        <MainContent>
          <Flex align="center" justify="space-between">
            <MobileButton onClick={() => toggleSidebar(!sidebarOpen)}>
              <Bars
                style={{
                  fill: `#CCC`
                }}
              />
            </MobileButton>
            <Navigation>
                <Link to="/" onClick={() => toggleSidebar(false)} getProps={({ isCurrent}) => {
                  return {
                    style: {
                      borderBottom: isCurrent && `2px solid rgba(8, 148, 161, 0.4)`
                    }
                  }
                }}>
                  HOME
                </Link>
              <Link to="/accommodations" onClick={() => toggleSidebar(false)} getProps={({ isCurrent }) => {
                return {
                  style: {
                    borderBottom: isCurrent && `2px solid rgba(8, 148, 161, 0.4)`
                  }
                }
              }}>
                      ACCOMMODATIONS
                </Link>
              <Link to="/rsvp" onClick={() => toggleSidebar(false)} getProps={({ isCurrent }) => {
                return {
                  style: {
                    borderBottom: isCurrent && `2px solid rgba(8, 148, 161, 0.4)`
                  }
                }
              }}>
                      RSVP
                </Link>
              <Link to="/registry" onClick={() => toggleSidebar(false)} getProps={({ isCurrent }) => {
                return {
                  style: {
                    borderBottom: isCurrent && `2px solid rgba(8, 148, 161, 0.4)`
                  }
                }
              }}>
                      REGISTRY
                </Link>
            </Navigation>
          </Flex>
          {children}
        </MainContent>
      </AppContainer>
    </BodyContainer>
  );
};

export default Layout;
