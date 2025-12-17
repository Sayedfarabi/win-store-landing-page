import { JSX } from "react";
type TContent = {
  id: number;
  paragraph: string;
};

export type TBannerSlide = {
  id: number;
  title: JSX.Element;
  contents: TContent[];
  discount_rate: string;
  btn_text: string;
};

const banner_slides: TBannerSlide[] = [
  {
    id: 1,
    title: (
      <h1 className="text-5xl">
        Shop <span className="text-[#0AAEB9]">Computer & Experience 1</span>
      </h1>
    ),
    contents: [
      {
        id: 1,
        paragraph:
          "You can not Inspect Quality Into The Product; It Is Already There. 1",
      },
      {
        id: 2,
        paragraph:
          "I am not a product of my Circumstances. I am a product of my decisions. 1",
      },
    ],
    discount_rate: "40%",
    btn_text: "View More",
  },
  {
    id: 2,
    title: (
      <h1 className="text-5xl">
        Shop <span className="text-[#0AAEB9]">Computer & Experience 2</span>
      </h1>
    ),
    contents: [
      {
        id: 1,
        paragraph:
          "You can not Inspect Quality Into The Product; It Is Already There. 2",
      },
      {
        id: 2,
        paragraph:
          "I am not a product of my Circumstances. I am a product of my decisions. 2",
      },
    ],
    discount_rate: "40%",
    btn_text: "View More",
  },
  {
    id: 3,
    title: (
      <h1 className="text-5xl">
        Shop <span className="text-[#0AAEB9]">Computer & Experience 3</span>
      </h1>
    ),
    contents: [
      {
        id: 1,
        paragraph:
          "You can not Inspect Quality Into The Product; It Is Already There. 3",
      },
      {
        id: 2,
        paragraph:
          "I am not a product of my Circumstances. I am a product of my decisions. 3",
      },
    ],
    discount_rate: "40%",
    btn_text: "View More",
  },
];

export default banner_slides;
