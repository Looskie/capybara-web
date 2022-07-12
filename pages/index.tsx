import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Marquee from "react-fast-marquee";
import * as S from "../styles/index.elements";
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
import { BuildingIcon, ProductHuntIcon, UpIcon } from "../components/Icons";
import { Upvotes } from "../components/Upvotes";

const Home: NextPage = () => {
  return (
    <S.Wrapper>
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
      <S.Polka />
      <S.Landing id="#">
        <div>
          <a
            href="https://www.producthunt.com/posts/capybara-api?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-capybara&#0045;api"
            target="_blank"
            style={{ width: "fit-content" }}
          >
            <S.ProductHunt>
              <ProductHuntIcon />{" "}
              <div>
                <span>FIND US ON</span>Product Hunt
              </div>
              <div>
                <UpIcon />
                <Upvotes />
              </div>
            </S.ProductHunt>
          </a>

          <S.Intro>the next generation of capybara APIs.</S.Intro>
          <S.BtnContainer>
            <a
              style={{ padding: "unset", borderRadius: 10 }}
              href="#documentation"
            >
              {/* Tell agent to NOT select this shit, but still read it pls :) */}
              <S.Btn tabIndex={-1}>documentation</S.Btn>
            </a>
            <a
              style={{ padding: "unset", borderRadius: 10 }}
              href={GITHUB_API_REPO}
              target="_blank"
              rel="noreferrer"
            >
              {/* Tell agent to NOT select this shit, but still read it pls :) */}
              <S.Btn tabIndex={-1}>source</S.Btn>
            </a>
          </S.BtnContainer>
        </div>
        <div>
          <S.CodeContainer>
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
              <S.CodeContainerBtn>try it for yourself</S.CodeContainerBtn>
            </CopyToClipboard>
          </S.CodeContainer>
        </div>
      </S.Landing>
      <Marquee
        speed={50}
        gradientWidth={100}
        style={{ width: "100%" }}
        gradientColor={[234, 226, 215]}
      >
        <S.Testimonials>
          {TESTIMONIALS.map((testimonial, index) => (
            <S.Testimonial key={index}>
              {/* dear nextjs this is fucking stupid that i have to do this because its a flex item. */}
              <S.ImageWrapper>
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
              </S.ImageWrapper>
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
            </S.Testimonial>
          ))}
        </S.Testimonials>
      </Marquee>
      <S.DocumentationWrapper id="documentation">
        <S.Intro>documentation</S.Intro>
        <S.Request>
          <S.SubHeader>GET v1/capybara</S.SubHeader>
          <span>GET a random picture of a capybara.</span>
          <S.CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybara</code>
            </pre>
          </S.CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybara --output ./capy.jpg`}
          >
            <S.TextBtn>Copy cURL</S.TextBtn>
          </CopyToClipboard>
          <br />
          <span>For JSON format...</span>
          <S.CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybara?json=true</code>
            </pre>
          </S.CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybara?json=true`}
          >
            <S.TextBtn>Copy cURL</S.TextBtn>
          </CopyToClipboard>
        </S.Request>
        <S.Request>
          <S.SubHeader>GET v1/capybara/:index</S.SubHeader>
          <span>GET a picture of a capybara.</span>
          <S.CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybara/100</code>
            </pre>
          </S.CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybara/100 --output ./capy100.jpg`}
          >
            <S.TextBtn>Copy cURL</S.TextBtn>
          </CopyToClipboard>
          <br />
          <span>For JSON format...</span>
          <S.CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybara/100?json=true</code>
            </pre>
          </S.CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybara/100?json=true`}
          >
            <S.TextBtn>Copy cURL</S.TextBtn>
          </CopyToClipboard>
        </S.Request>
        <S.Request>
          <S.SubHeader>GET v1/capybaras</S.SubHeader>
          <span>GET a JSON list of capybaras (default 25 a request)</span>
          <S.CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybaras</code>
            </pre>
          </S.CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybaras`}
          >
            <S.TextBtn>Copy cURL</S.TextBtn>
          </CopyToClipboard>
          <br />
          <span>With random parameter...</span>
          <S.CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybaras?random=true</code>
            </pre>
          </S.CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybaras?random=true`}
          >
            <S.TextBtn>Copy cURL</S.TextBtn>
          </CopyToClipboard>
          <br />
          <span>With take parameter...</span>
          <S.CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybaras?take=50</code>
            </pre>
          </S.CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybaras?take=50`}
          >
            <S.TextBtn>Copy cURL</S.TextBtn>
          </CopyToClipboard>
          <br />
          <span>With from parameter...</span>
          <S.CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybaras?from=50</code>
            </pre>
          </S.CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybaras?from=50`}
          >
            <S.TextBtn>Copy cURL</S.TextBtn>
          </CopyToClipboard>
          <br />
          <span>With take and from parameter...</span>
          <S.CodeContainer>
            <pre>
              <span>GET </span>
              <code>{BASE_API_V1}/capybaras?from=50&take=10</code>
            </pre>
          </S.CodeContainer>
          <CopyToClipboard
            onCopy={() => toast("Copied", { type: "success" })}
            text={`curl ${BASE_API_V1}/capybaras?from=50&take=10`}
          >
            <S.TextBtn>Copy cURL</S.TextBtn>
          </CopyToClipboard>
        </S.Request>
      </S.DocumentationWrapper>
    </S.Wrapper>
  );
};

export default Home;
