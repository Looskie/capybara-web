import styled from "styled-components";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Marquee from "react-fast-marquee";
import { BASE_API_V1, GITHUB_API_REPO, TESTIMONIALS } from "../utils/Consts";
import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import Head from "next/head";
import { BuildingIcon, ProductHuntIcon, UpIcon } from "../components/Icons";
import { Upvotes } from "../components/Upvotes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Polka = styled.div`
  background: linear-gradient(transparent, var(--bg-primary)),
    url("/polka-dots.svg");
  position: absolute;
  inset: 0;
  height: 500px;
  z-index: 1;
`;

const Landing = styled.div`
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

const ProductHunt = styled.div`
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

const Intro = styled.h1`
  max-width: 13ch;
  font-size: 3.85em; // big text = attention
  font-weight: 800;
  line-height: 1.35;
  margin-top: 20px;
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
  gap: 20px;
  margin-top: 30px;
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
  border: 2px solid rgb(0 0 0 / 5%);

  transition: all 0.15s ease-in-out;

  &:hover {
    opacity: 1;
    border: 2px solid rgb(0 0 0 / 12%);
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
  border: 2px solid rgb(0 0 0 / 12%);

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

const Testimonials = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;

  padding: 5rem 0;
`;

const Testimonial = styled.div`
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

const ImageWrapper = styled.div`
  margin-right: 15px;

  position: absolute;
  top: -28px;

  left: 14px;
  span {
    border: 2px solid rgb(0 0 0 / 35%) !important;
    border-radius: 18px;
  }
`;

const DocumentationWrapper = styled.div`
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

const Request = styled.div`
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
          content="The next generation of capybara APIs, access over 700+ images of capybaras in high definition."
        />
        <meta name="twitter:creator" content="@devlooskie" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#E9E2D8" />
      </Head>

      <Navbar />
      <Polka />
      <Landing id="#">
        <div>
          <a
            href="https://www.producthunt.com/posts/capybara-api?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-capybara&#0045;api"
            target="_blank"
            rel="noreferrer"
            style={{ width: "fit-content", padding: 0, borderRadius: 11.125 }}
          >
            <ProductHunt>
              <ProductHuntIcon />{" "}
              <div>
                <span>FIND US ON</span>Product Hunt
              </div>
              <div>
                <UpIcon />
                <Upvotes />
              </div>
            </ProductHunt>
          </a>

          <Intro>the next generation of capybara APIs.</Intro>
          <BtnContainer>
            <a
              style={{ padding: "unset", borderRadius: 10 }}
              href="#documentation"
            >
              {/* Tell agent to NOT select this shit, but still read it pls :) */}
              <Btn tabIndex={-1}>documentation</Btn>
            </a>
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
                  style={{
                    borderRadius: "0",
                  }}
                  width={65}
                  height={65}
                  layout="fixed"
                  draggable={false}
                  src={testimonial.pfp}
                  alt={testimonial.name + "'s pfp"}
                />
              </ImageWrapper>
              <div>
                <div>
                  <p>
                    {testimonial.name}{" "}
                    <span>
                      <BuildingIcon /> {testimonial.worksAt}
                    </span>
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
          <span>With random parameter...</span>
          <CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybaras?random=true</code>
            </pre>
          </CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybaras?random=true`}
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
        <Request>
          <SubHeader>GET v1/capyoftheday</SubHeader>
          <span>GET the capy of the day! (refreshes every 24hrs)</span>
          <CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capyoftheday</code>
            </pre>
          </CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capyoftheday --output ./capyoftheday.jpeg`}
          >
            <TextBtn>Copy cURL</TextBtn>
          </CopyToClipboard>
          <br />
          <span>For JSON format...</span>
          <CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capyoftheday?json=true</code>
            </pre>
          </CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capyoftheday?json=true`}
          >
            <TextBtn>Copy cURL</TextBtn>
          </CopyToClipboard>
        </Request>
        <Request>
          <SubHeader>GET v1/capyhour</SubHeader>
          <span>GET the capy of the hour! (refreshes every hour)</span>
          <CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capyhour</code>
            </pre>
          </CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capyhour --output ./capyhour.jpeg`}
          >
            <TextBtn>Copy cURL</TextBtn>
          </CopyToClipboard>
          <br />
          <span>For JSON format...</span>
          <CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capyhour?json=true</code>
            </pre>
          </CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capyhour?json=true`}
          >
            <TextBtn>Copy cURL</TextBtn>
          </CopyToClipboard>
        </Request>
      </DocumentationWrapper>
    </Wrapper>
  );
};

export default Home;
