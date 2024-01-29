import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Container, Link, Section, Wrapper } from "./style";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/home")} logo>
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
          <button>Account</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Home;
