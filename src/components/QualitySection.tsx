import React from "react";
import { Heart, Star, Award } from "lucide-react";

const QualitySection = () => {
  const qualityFeatures = [
    {
      id: 1,
      title: "Quality",
      icon: Star,
      description:
        "We use only the finest wellness products and state-of-the-art spa techniques to provide you with long-lasting and aesthetically pleasing relaxation results.",
      titleFontSize: "text-[39px]",
      titleWidth: "w-[129px]",
    },
    {
      id: 2,
      title: "Reliability",
      icon: Heart,
      description:
        "You can rely on us. We keep our wellness promises and deliver our spa services on time and to the highest quality standards.",
      titleFontSize: "text-[38px]",
      titleWidth: "w-[172px]",
    },
    {
      id: 3,
      title: "Experience",
      icon: Award,
      description:
        "With years of experience and a deep understanding of the wellness industry, we are ideally equipped to successfully implement your spa projects.",
      titleFontSize: "text-[40.6px]",
      titleWidth: "w-[213px]",
    },
  ];

  return (
    <section className="absolute w-[1803px] h-[523px] top-[4529px] left-[59px]">
      <header 
        className="absolute w-[274px] h-[53px] -top-2 left-0 font-normal text-[#11388a] text-[39.9px] tracking-[0] leading-[52.8px] whitespace-nowrap"
        style={{ fontFamily: 'Inter' }}
      >
        Why Infinite Spa?
      </header>

      <p 
        className="absolute w-[445px] h-[81px] top-20 left-0 font-medium text-[#11388a] text-[17.5px] tracking-[0] leading-[29px]"
        style={{ fontFamily: 'Inter' }}
      >
        Our experienced spa team consists of highly qualified
        <br />
        wellness professionals who are characterized by their passion
        <br />
        for perfection and their attention to therapeutic detail.
      </p>

      <div className="absolute w-[973px] h-[523px] top-0 left-[830px] border-b border-[#11388a]/20">
        {qualityFeatures.map((feature, index) => {
          const heights = ["h-[184px]", "h-[155px]", "h-[184px]"];
          const topPositions = ["top-0", "top-[184px]", "top-[339px]"];
          const iconTopPositions = ["top-20", "top-[66px]", "top-20"];
          const descriptionTopPositions = [
            "top-[104px]",
            "top-[101px]",
            "top-[104px]",
          ];
          const descriptionWidths = ["w-[829px]", "w-[800px]", "w-[782px]"];
          const descriptionHeights = ["h-[52px]", "h-[29px]", "h-[52px]"];
          const descriptionWhitespace = index === 1 ? "whitespace-nowrap" : "";
          const descriptionFontSize =
            index === 1 ? "text-[17.3px]" : "text-[17.5px]";

          const IconComponent = feature.icon;

          return (
            <article
              key={feature.id}
              className={`${heights[index]} ${topPositions[index]} absolute w-[973px] left-0 border-t border-[#11388a]/20`}
            >
              <div
                className={`absolute w-6 h-6 ${iconTopPositions[index]} left-0`}
              >
                <IconComponent 
                  className="w-[23px] h-[23px] text-[#11388a]"
                />
              </div>

              <p
                className={`absolute ${descriptionWidths[index]} ${descriptionHeights[index]} ${descriptionTopPositions[index]} left-24 font-normal text-[#11388a]/60 ${descriptionFontSize} tracking-[0] leading-[29px] ${descriptionWhitespace}`}
                style={{ fontFamily: 'Inter' }}
              >
                {feature.description}
              </p>

              <div className="absolute w-[877px] h-[53px] top-[25px] left-24">
                <h3
                  className={`${feature.titleWidth} ${feature.titleFontSize} absolute h-[50px] top-0 left-0 font-normal text-[#11388a] tracking-[0] leading-[52.8px] whitespace-nowrap`}
                  style={{ fontFamily: 'Inter' }}
                >
                  {feature.title}
                </h3>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default QualitySection; 