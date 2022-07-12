import * as S from "../styles/components/navbar.elements";
import { GITHUB_REPO, TWITTER } from "../utils/Consts";
import { GitHubIcon, TwitterIcon } from "./Icons";

const Navbar = () => {
  return (
    <S.Container>
      <S.InnerNav>
        <S.Title>capybara</S.Title>
        <S.StyledLinks>
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
        </S.StyledLinks>

        <S.Socials>
          <a href={GITHUB_REPO} target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href={TWITTER} target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
        </S.Socials>
      </S.InnerNav>
    </S.Container>
  );
};

export default Navbar;
