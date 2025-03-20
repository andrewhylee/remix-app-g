import React from "react";
import { Card } from "~/components/Card.comp";

type Section2Props = {
  className?: string | undefined;
};

export const Section2: React.FC<Section2Props> = ({ className = "" }) => {
  return (
    <div className={"Section2 " + className}>
      <h2>We Value Your Time</h2>
      <div className="text_subtitle_2 pt-10 pb-16">
        No more endless meetings and back-and-forth. Get results with a
        streamlined process.
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8">
        <Card
          className="bg-white"
          image="/clipboard_image.png"
          imageTitle="Onboarding Questionnaire"
          imageSubtext="Tell us everything upfront—so you don’t have to repeat yourself"
        />
        <Card
          className="bg-white"
          image="/calendar_image.png"
          imageTitle="Minimal Meetings"
          imageSubtext="Just a kickoff meeting and a final review before launch"
        />
        <Card
          className="bg-white"
          image="/taskboard_image.png"
          imageTitle="Live Project Board"
          imageSubtext="All updates & feedback in Notion. No back and forth emails."
        />
        <Card
          className="bg-white"
          image="/videoplayer_image.png"
          imageTitle="Post-Launch Training Video"
          imageSubtext="A custom walkthrough so you can update and manage your site easily."
        />
      </div>
    </div>
  );
};
