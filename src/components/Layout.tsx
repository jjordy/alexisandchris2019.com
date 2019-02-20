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
import posed from "react-pose";
import styled from 'styled-components'

const MobileFriendlyContainer = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const DesktopLinks = styled.div`
  & a {
    margin-right: 1rem;
    margin-left: 1rem;
    text-decoration: none;
    color: #222;
    font-family: 'Amatic SC', cursive;
    line-height: 2.5rem;
    font-size: 1.5rem;
  }

  & svg {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

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
            </Navigation>
          </Flex>
          {children}
        </MainContent>
      </AppContainer>
    </BodyContainer>
  );
};

export default Layout;
