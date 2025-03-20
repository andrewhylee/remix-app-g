import React from "react";
import { BulletList } from "~/components/BulletList.comp";
import { Button } from "~/components/Button.comp";
import { ProjectsCarousel } from "~/components/ProjectsCarousel.comp";

type Section1Props = {
  className?: string | undefined;
};

export const Section1: React.FC<Section1Props> = ({ className = "" }) => {
  return (
    <div className={"Section1 " + className}>
      <h2>Websites That Power Your Business Growth</h2>
      <BulletList
        header="Smart, scalable websites for:"
        listItems={[
          "Independent professionals",
          "Local businesses",
          "Professional service providers",
        ]}
        bulletImgSrc="/green_arrow_xs.png"
      />
      <ProjectsCarousel className="pt-10" />
      <Button
        className="mx-auto w-6/12 mt-10 min-w-56"
        link="https://www.figma.com/deck/8by1h7KhgAp5yiebcuNHwl/District-Public?node-id=8-778"
        textContent="See More Work"
      />
    </div>
  );
};
