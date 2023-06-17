import { useState } from "react";
import GallaryImg from "../assets/placeholder.jpg";
import ReadingMode from "./ReadingMode";

const Article = () => {
  const sizes = [
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
  ];
  // State variable for handling text sizes
  const [textSize, setTextSize] = useState(1);
  // State variable for handling figure(image and caption)
  const [showFig, setShowFig] = useState(true);

  return (
    <article className="max-w-[45rem] mx-auto px-4 py-12 overflow-x-hidden">
      {/* conditionally rendering RedingMode component based on state of figure */}
      {!showFig && <ReadingMode textSize={textSize} setTextSize={setTextSize} showFig={showFig} setShowFig={setShowFig} />}
      
      <h1 className={`font-semibold mt-10 ${sizes[textSize + 2]}`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h1>
      <figure className={showFig ? "block" : "hidden"}>
        <figcaption className="space-x-2 mt-3 mb-4">
          <span className="bg-red-700 text-white pb-[2px] px-2">Lorem</span>
          <span className="bg-red-700 text-white pb-[2px] px-2">Lorem Lorem</span>
          <span className="bg-red-700 text-white pb-[2px] px-2">Loremmm</span>
        </figcaption>
        <img
          src={GallaryImg}
          alt="gallary"
          className="w-full h-full ss:h-[30rem] mm:pr-6"
        />
      </figure>
      {/* conditionally rendering RedingMode component based on state of figure */}
      {showFig && <ReadingMode textSize={textSize} setTextSize={setTextSize} showFig={showFig} setShowFig={setShowFig} />}

      <div className={`pr-8 space-y-4 ${sizes[textSize]}`}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scraLorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </p>
      </div>
    </article>
  );
};

export default Article;
