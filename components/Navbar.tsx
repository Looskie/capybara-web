import styled from "styled-components";
import { GITHUB_REPO, TWITTER } from "../utils/Consts";
import { GitHubIcon, TwitterIcon } from "./Icons";

const Container = styled.div`
  position: sticky;
  top: 0;

  background: hsl(35, 31%, 88%, 80%);
  backdrop-filter: blur(8px);
  z-index: 999;
  width: 100%;

  max-width: 100vw;
  overflow-x: hidden;

  border-bottom: 2px solid rgb(0 0 0 / 5%);
`;

const InnerNav = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  font-size: 1.15em;

  padding: 1.25rem 2rem;

  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

const Title = styled.h1`
  left: 0;
  font-size: 1.25em;
  font-weight: bold;
  color: var(--text-secondary);
  margin-right: 20px;
`;

const StyledLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  font-weight: 900;
  margin-left: 20px;
  flex: 1;

  li {
    color: var(--text-muted);
    transition: 0.15s ease-in-out;

    &:hover {
      color: var(--text-secondary);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;

  svg {
    display: block;
    height: 30px;
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
      <InnerNav>
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
      </InnerNav>
    </Container>
  );
};

export default Navbar;
