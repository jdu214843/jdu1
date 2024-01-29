import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Container, Link, Section, Wrapper } from "./style";
import UserIcon from "../UserIcons";
import Account from "../Account";

import AngleDownIcon from "../DownArrow";

export const Analyze = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/analyze")} logo>
          <h3>JDU AI</h3>
        </Section>
        <Section>
          {navbar.map(({ title, path }, index) => {
            return (
              <Link
                className={({ isActive }) => isActive && "active"}
                key={index}
                to={path}
              >
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <UserIcon />
          <Account />
          <AngleDownIcon />
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Analyze;
