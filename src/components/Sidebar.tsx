import React from "react";
import posed from "react-pose";
import styled from "styled-components";

const AnimatedSidebar = posed.div({
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -250 }
});

const StyledSidebar = styled(AnimatedSidebar)`
  width: 250px;
  top: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 1;
  background: #fcfcfc;
  border-right: 1px 1px 1px #f8f8f8;
  box-shadow: 1px 1px 1px #ccc;
  & a {
    font-size: 1.5rem;
    width: 100%;
    justify-content: center;
    display: flex;
    border-bottom: 2px solid rgba(8, 148, 161, 0.4);
    align-items: center;
    font-weight: 700;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-family: 'Amatic SC', cursive;
    color: #777;
    line-height: 2rem;
    & svg {
      width: 24px;
      height: 24px;
      fill: #777;
    }
  }
`;

const Sidebar = ({
  open,
  children
}: {
  open: boolean;
  children: React.ReactNode;
}) => {
  return (
    <StyledSidebar pose={open ? "open" : "closed"}>{children}</StyledSidebar>
  );
};

export default Sidebar;
