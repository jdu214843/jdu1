import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cccccc;

  justify-content: space-between;
  background: var(--colorWhite);
  color: #000;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  max-width: 1440px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;

  .active {
    color: white;
    background-color: blue;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 5px 32px;

  color: #000;
  border-radius: 4px;
`;

export { Container, Wrapper, Section, Link };
