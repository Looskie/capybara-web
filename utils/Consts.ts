export type Testimonial = {
  name: string;
  worksAt: string;
  pfp: string;
  message: string;
};

export const BASE_API = "https://api.capy.lol";
export const BASE_API_V1 = `${BASE_API}/v1`;

export const GITHUB_REPO = "https://github.com/looskie/capybara-web";
export const GITHUB_API_REPO = "https://github.com/looskie/capybara-api";
export const TWITTER = "https://twitter.com/devlooskie";

export const TESTIMONIALS: Testimonial[] = [
  {
    message: `before Capybara api: :TrollDespair: 
after Capybara api: :ChocolaPOGGERS:`,
    name: "Phineas",
    pfp: "/img/phineas.png",
    worksAt: "nyanpasu",
  },
  {
    message: "api goes hard no cap on the track 🧢 ❌",
    name: "Robert",
    pfp: "/img/roprt.png",
    worksAt: "Milf Hunter",
  },
  {
    message:
      "did you know that capypabaras eat their own poop in the morning? unique diet. protein rich. he pull up.",
    name: "Ari Dutilh",
    pfp: "/img/ari.png",
    worksAt: "Buildergroop Corporation",
  },
  {
    message:
      "man capybara api be bussin yo this mf gon replace your enterprise-grade fancy ass graphql apis. p.s shoutout to my co-founder ari this dude gets it too yo capybara shit eating ritual mad healthy might partake one day.",
    name: "Aaryaman Maheshwari",
    worksAt: "Buildergroop Corporation",
    pfp: "/img/aaryaman.png",
  },
  {
    message: "love this capybara api. cant wait to eat it.",
    name: "Bereket Semagn",
    pfp: "/img/bereket.jpeg",
    worksAt: "Buildergroop Corporation",
  },
  {
    message: "Love mi capys. Love mi cody. Love mi API.",
    name: "Tejas Ravishankar Ravi Shankar Ganapathy Agraharam Venkataraman",
    pfp: "/img/tejas.png",
    worksAt: "Buildergroop Corporation",
  },
  {
    message: "best api cuz they do be pulling up in a quick efficient manner.",
    name: "shinkuWRLD",
    pfp: "/img/shinku.png",
    worksAt: "ur moms house",
  },
  {
    message:
      "A phenomenal implementation of an image delivery system with no downtime and 99.9999% uptime SLA guaranteed that suits all of my needs",
    name: "pxseu",
    pfp: "/img/pxseu.png",
    worksAt: "Hop inc.",
  },
  {
    message: "dope ass lil copybara api cant wait to figure it out",
    name: "alistair#9999",
    pfp: "/img/alistair.jpeg",
    worksAt: "hospital institution organisation",
  },
  {
    message:
      "I 100% recommend cody's capybara api as it has the largest variety of capybara's on the entire internet and more capy's are being added every day!",
    name: "hexiro",
    pfp: "/img/hexiro.png",
    worksAt: "Southern Produced",
  },
  {
    message: "whats this",
    name: "Oliver Reason",
    pfp: "/img/oli.jpg",
    worksAt: "Rabbit",
  },
  {
    message: "this api helped me a lot ❤️ ~ cody paid me $10 to say this",
    name: "funny#8181",
    pfp: "/img/funny.jpg",
    worksAt: "BoringHand Inc",
  },
];
