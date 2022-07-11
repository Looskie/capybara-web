import type { NextPage } from "next";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Marquee from "react-fast-marquee";
import {
  BASE_API_V1,
  GITHUB_API_REPO,
  GITHUB_REPO,
  TESTIMONIALS,
} from "../utils/Consts";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import Head from "next/head";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  height: 100%;
`;

const Landing = styled.div`
  display: flex;
  align-items: center;
  height: calc(90vh - 60px);
  width: 100%;
  margin-top: 60px; /* The height of the nav */

  > div {
    display: flex;
    flex-direction: column;
    flex: 1;

    &:nth-child(2) {
      @media (max-width: 1120px) {
        display: none;
      }
    }
  }
`;

const Intro = styled.h1`
  max-width: 13ch;
  font-size: 3em;
  font-weight: bold;
  line-height: 1.35;
`;

const SubHeader = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 5px;
  margin-left: 0 !important;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  align-self: flex-start;
`;

const Btn = styled.button`
  outline: none;
  border: unset;
  color: var(--text-secondary);
  padding: 8px;
  border-radius: 10px;
  background: var(--bg-secondary);
  opacity: 0.75;
  cursor: pointer;
  box-shadow: 0px 0px 8px rgb(0 0 0 / 5%);

  transition: all 0.15s ease-in-out;

  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 8px rgb(0 0 0 / 12%);
  }
`;

const TextBtn = styled.button`
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

const CodeContainerBtn = styled.button`
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
  box-shadow: 0px 0px 8px rgb(0 0 0 / 5%);
  align-self: flex-end;
  margin-top: -15px;

  transition: all 0.15s ease-in-out;

  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 8px rgb(0 0 0 / 12%);
  }
`;

const CodeContainer = styled.div`
  position: relative;
  align-self: center;
  justify-self: center;
  display: flex;
  background: var(--bg-secondary);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 0px 8px rgb(0 0 0 / 12%);
  width: 100%;
  height: 100%;
  max-width: 500px;

  span {
    user-select: none;
    color: var(----text-muted);
  }

  pre {
    color: var(--text-secondary);
    line-height: 1.25;
  }
`;

const Testimonials = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const Testimonial = styled.div`
  display: flex;
  width: 400px;
  background: var(--bg-secondary);
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0px 0px 8px rgb(0 0 0 / 12%);

  &:first-of-type {
    margin-left: 20px;
  }

  > div {
    > div {
      p {
        line-height: 1;
        margin: 5px 0;
        color: var(--text-primary);

        span {
          font-size: 0.9em;
          color: var(--text-secondary);
        }
      }
    }
    > p {
      margin-top: 2px;
      line-height: 1;
      font-weight: 400;
      color: var(--text-secondary);
    }
  }
`;

const ImageWrapper = styled.div`
  display: block;
  margin-right: 10px;
`;

const DocumentationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 150px 0;

  h1 {
    margin-bottom: 50px;
  }
`;

const Request = styled.div`
  > span {
    font-weight: 600;
    color: var(--text-secondary);
  }

  > * {
    margin-left: 25px;
  }
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Home - capy.lol</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="capy.lol" />
        <meta property="og:title" content="Capybara API" />
        <meta
          property="og:description"
          content="The next generation of capybara APIs, access over 700+ images of capybaras in high definition in under < 40ms."
        />
        <meta name="twitter:creator" content="@devlooskie" />
      </Head>
      <Navbar />
      <Landing id="#">
        <div>
          <Intro>the next generation of capybara APIs.</Intro>
          <BtnContainer>
            <Btn id="#documentation">documentation</Btn>
            <a
              style={{ padding: "unset", borderRadius: 10 }}
              href={GITHUB_API_REPO}
              target="_blank"
              rel="noreferrer"
            >
              {/* Tell agent to NOT select this shit, but still read it pls :) */}
              <Btn tabIndex={-1}>source</Btn>
            </a>
          </BtnContainer>
        </div>
        <div>
          <CodeContainer>
            <div style={{ overflow: "auto" }}>
              <pre>
                {`~ curl 'https://api.capy.lol/v1/capybara?json=true' \\
   -H 'authority: api.capy.lol' \\
   -H 'accept: */*' \\
   -H 'accept-language: en-US,en;q=0.9' \\
   -H 'sec-ch-ua: ".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"' \\
   -H 'sec-ch-ua-mobile: ?0' \\
   -H 'sec-ch-ua-platform: "macOS"' \\
   -H 'sec-fetch-dest: empty' \\
   -H 'sec-fetch-mode: cors' \\
   -H 'sec-fetch-site: cross-site' \\
   -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36' \\
   --compressed`}
                <br />
                <br />
              </pre>
            </div>
            <CopyToClipboard
              onCopy={() => toast("Copied", { type: "success" })}
              text={`
            curl 'https://api.capy.lol/v1/capybara?json=true' \\
   -H 'authority: api.capy.lol' \\
   -H 'accept: */*' \\
   -H 'accept-language: en-US,en;q=0.9' \\
   -H 'sec-ch-ua: ".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"' \\
   -H 'sec-ch-ua-mobile: ?0' \\
   -H 'sec-ch-ua-platform: "macOS"' \\
   -H 'sec-fetch-dest: empty' \\
   -H 'sec-fetch-mode: cors' \\
   -H 'sec-fetch-site: cross-site' \\
   -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36' \\
   --compressed
          `}
            >
              <CodeContainerBtn>try it for yourself</CodeContainerBtn>
            </CopyToClipboard>
          </CodeContainer>
        </div>
      </Landing>
      <Marquee
        speed={50}
        gradientWidth={100}
        style={{ width: "100%" }}
        gradientColor={[234, 226, 215]}
      >
        <Testimonials>
          {TESTIMONIALS.map((testimonial, index) => (
            <Testimonial key={index}>
              {/* dear nextjs this is fucking stupid that i have to do this because its a flex item. */}
              <ImageWrapper>
                <Image
                  style={{ borderRadius: "50%" }}
                  width={50}
                  height={50}
                  layout="fixed"
                  draggable={false}
                  src={testimonial.pfp}
                  alt={testimonial.name + "'s pfp"}
                />
              </ImageWrapper>
              <div>
                <div>
                  <p>
                    {testimonial.name} <span>@ {testimonial.worksAt}</span>
                  </p>
                </div>
                <p>{testimonial.message}</p>
              </div>
            </Testimonial>
          ))}
        </Testimonials>
      </Marquee>
      <DocumentationWrapper id="documentation">
        <Intro>documentation</Intro>
        <Request>
          <SubHeader>GET v1/capybara</SubHeader>
          <span>GET a random picture of a capybara.</span>
          <CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybara</code>
            </pre>
          </CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybara --output ./capy.jpg`}
          >
            <TextBtn>Copy cURL</TextBtn>
          </CopyToClipboard>
          <br />
          <span>For JSON format...</span>
          <CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybara?json=true</code>
            </pre>
          </CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybara?json=true`}
          >
            <TextBtn>Copy cURL</TextBtn>
          </CopyToClipboard>
        </Request>
        <Request>
          <SubHeader>GET v1/capybara/:index</SubHeader>
          <span>GET a picture of a capybara.</span>
          <CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybara/100</code>
            </pre>
          </CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybara/100 --output ./capy100.jpg`}
          >
            <TextBtn>Copy cURL</TextBtn>
          </CopyToClipboard>
          <br />
          <span>For JSON format...</span>
          <CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybara/100?json=true</code>
            </pre>
          </CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybara/100?json=true`}
          >
            <TextBtn>Copy cURL</TextBtn>
          </CopyToClipboard>
        </Request>
        <Request>
          <SubHeader>GET v1/capybaras</SubHeader>
          <span>GET a JSON list of capybaras (default 25 a request)</span>
          <CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybaras</code>
            </pre>
          </CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybaras`}
          >
            <TextBtn>Copy cURL</TextBtn>
          </CopyToClipboard>
          <br />
          <span>With take parameter...</span>
          <CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybaras?take=50</code>
            </pre>
          </CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybaras?take=50`}
          >
            <TextBtn>Copy cURL</TextBtn>
          </CopyToClipboard>
          <br />
          <span>With from parameter...</span>
          <CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybaras?from=50</code>
            </pre>
          </CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybaras?from=50`}
          >
            <TextBtn>Copy cURL</TextBtn>
          </CopyToClipboard>
          <br />
          <span>With take and from parameter...</span>
          <CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybaras?from=50&take=10</code>
            </pre>
          </CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybaras?from=50&take=10`}
          >
            <TextBtn>Copy cURL</TextBtn>
          </CopyToClipboard>
        </Request>
      </DocumentationWrapper>
    </Wrapper>
  );
};

export default Home;
