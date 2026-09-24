import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

export const Island = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(92vw, 620px);
  height: 48px;
  padding: 0 12px;
  background: #0a0a0a;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-top: none;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.45);

  @media (max-width: 480px) {
    height: 42px;
    padding: 0 6px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const NavItem = styled.li`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const NavLink = styled(RouterNavLink)`
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
  background: transparent;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.14);
  }

  &.active {
    color: #0a0a0a;
    background: #ffffff;
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 480px) {
    padding: 8px 8px;
    font-size: 0.78rem;
    border-radius: 6px;
  }

   body {
    background: #0a0a0a;
  }
`;