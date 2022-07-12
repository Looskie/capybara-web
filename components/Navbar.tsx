import styled from "styled-components";
import { GITHUB_REPO, TWITTER } from "../utils/Consts";
import { GitHubIcon, TwitterIcon } from "./Icons";

const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  position: fixed;
  align-self: center;
  height: 60px;
  padding: 0 10%;
  top: 0;
  left: 0;
  font-size: 1.15em;
  background: hsl(35, 31%, 88%, 80%);
  backdrop-filter: blur(3px);
  z-index: 100;
`;

const Title = styled.h1`
  left: 0;
  font-size: 1.25em;
  font-weight: bold;
  color: var(--text-secondary);
`;

const StyledLinks = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  font-weight: 900;
  margin-left: 20px;
  flex: 1;

  li {
    transition: 0.15s ease-in-out;
    color: var(--text-muted);

    &:hover {
      color: var(--text-secondary);
    }
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;
  justify-self: right;

  svg {
    display: block;
    height: 25px;
    color: var(--text-muted);

    transition: 0.15s ease-in-out;

    &:hover {
      color: var(--text-secondary);
    }
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Title>capybara</Title>
      <StyledLinks>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#documentation">documentation</a>
        </li>
        <li>
          <a href={TWITTER} target="_blank" rel="noreferrer">
            twitter
          </a>
        </li>
      </StyledLinks>

      <Socials>
        <a href={GITHUB_REPO} target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href={TWITTER} target="_blank" rel="noreferrer">
          <TwitterIcon />
        </a>
      </Socials>
    </Container>
  );
};

export default Navbar;
