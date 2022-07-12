import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Polka = styled.div`
  background: linear-gradient(transparent, var(--bg-primary)),
    url("/polka-dots.svg");
  position: absolute;
  inset: 0;
  height: 500px;
  z-index: 1;
`;

export const Landing = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  padding: 8rem 2rem;
  z-index: 2;

  > div {
    display: flex;
    flex-direction: column;
    flex: 1;

    &:nth-child(2) {
      @media (max-width: 1120px) {
        display: none; // sneaky ;)
      }
    }
  }
`;

export const ProductHunt = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  background: #da552f;
  width: fit-content;
  border-radius: 12px;
  color: white;
  div {
    display: flex;
    flex-direction: column;
    font-size: 1.25em;
    margin-left: 15px;
    font-weight: 500;
    span {
      font-size: 0.65em;
      opacity: 0.75;
      position: relative;
    }

    &:nth-of-type(2) {
      align-items: center;
      justify-content: center;
      align-self: center;
      font-size: 1.15em;
      svg {
        width: 1.25em;
        height: 1.25em;
        position: relative;
        margin: -5px 0;
      }
    }
  }
  svg {
    width: 3em;
    height: 3em;
  }
`;

export const Intro = styled.h1`
  max-width: 13ch;
  font-size: 3.85em; // big text = attention
  font-weight: 800;
  line-height: 1.35;
  margin-top: 20px;
`;

export const SubHeader = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 5px;
  margin-left: 0 !important;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  align-self: flex-start;
`;

export const Btn = styled.button`
  outline: none;
  border: unset;
  color: var(--text-secondary);
  padding: 8px;
  border-radius: 10px;
  background: var(--bg-secondary);
  opacity: 0.75;
  cursor: pointer;
  border: 2px solid rgb(0 0 0 / 5%);

  transition: all 0.15s ease-in-out;

  &:hover {
    opacity: 1;
    border: 2px solid rgb(0 0 0 / 12%);
  }
`;

export const TextBtn = styled.button`
  outline: none;
  border: unset;
  color: var(--text-secondary);
  background: unset;
  margin-left: auto;
  opacity: 0.75;
  cursor: pointer;
  font-size: 0.9em;
  margin-bottom: 20px;

  transition: all 0.15s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const CodeContainerBtn = styled.button`
  position: absolute;
  right: -20px;
  bottom: -18px;
  outline: none;
  border: unset;
  color: var(--text-primary);
  padding: 8px;
  border-radius: 10px;
  background: var(--bg-tertiary);
  opacity: 0.9;
  cursor: pointer;
  border: 2px solid rgb(0 0 0 / 12%);

  align-self: flex-end;
  margin-top: -15px;

  transition: all 0.15s ease-in-out;

  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 8px rgb(0 0 0 / 12%);
  }
`;

export const CodeContainer = styled.div`
  position: relative;
  align-self: center;
  justify-self: center;
  display: flex;
  background: var(--bg-secondary);
  border-radius: 10px;
  padding: 10px;
  border: 2px solid rgb(0 0 0 / 12%);

  width: 100%;
  height: 100%;
  max-width: 550px;

  span {
    user-select: none;
    color: var(----text-muted);
  }

  pre {
    color: var(--text-secondary);
    line-height: 1.25;
  }
`;

export const Testimonials = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;

  padding: 5rem 0;
`;

export const Testimonial = styled.div`
  display: flex;
  min-width: 400px;
  max-width: 400px;
  background: var(--bg-secondary);
  padding: 15px;
  border-radius: 18px;
  border: 2px solid rgb(0 0 0 / 12%);
  padding-top: 50px;
  position: relative;

  &:first-of-type {
    margin-left: 50px;
  }

  > div {
    > div {
      p {
        line-height: 1;
        margin-bottom: 8px;
        color: var(--text-primary);
        font-size: 1.2em;
        span {
          display: flex;
          align-items: center;
          font-size: 0.85em;
          color: var(--text-secondary);
          margin-top: 5px;
          opacity: 0.75;
          svg {
            width: 1.2em;
            height: 1.2em;
            margin-right: 5px;
          }
        }
      }
    }
    > p {
      margin-top: 5px;
      line-height: 1;
      font-weight: 400;
      color: var(--text-secondary);
      font-size: 1.15em;
      line-height: 115%;
    }
  }
`;

export const ImageWrapper = styled.div`
  margin-right: 15px;

  position: absolute;
  top: -28px;

  left: 14px;
  span {
    border: 2px solid rgb(0 0 0 / 35%) !important;
    border-radius: 18px;
  }
`;

export const DocumentationWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  padding: 6rem 2rem;

  h1 {
    margin-bottom: 50px;
  }
`;

export const Request = styled.div`
  margin-bottom: 50px;
  > span {
    font-weight: 600;
    color: var(--text-secondary);
    padding: 5px 0;
    display: block;
  }

  > * {
    margin-left: 25px;
  }
`;
