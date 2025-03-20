import type { MetaFunction } from "@remix-run/node";
import { LandingPage } from "~/pages/LandingPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Studio Muni" },
    {
      name: "description",
      content: "Studio Muni: Your Brand with Modern Design",
    },
  ];
};

export default function Index() {
  return (
    <>
      <LandingPage />
    </>
  );
}
