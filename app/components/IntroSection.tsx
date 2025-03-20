import { Link } from "@remix-run/react";

export const IntroSection: React.FC = () => {
  return (
    <div className="IntroSection mt-14 w-full">
      <div className="mb-10 rounded-3xl border border-white border-solid bg-neutral-100 bg-opacity-10">
        <h1>An Outdated Website Is Costing You Clients</h1>
        <div className="mt-11 text-2xl text_body leading-7 text-gray-500 max-md:mt-10 max-md:max-w-full">
          First impressions matter. An outdated site drives clients away.
        </div>
      </div>
      <div className="flex flex-col bg-[url(/colorful_img_1.png)]  px-4 py-10 gap-10 mb-32 ">
        <div className="bg-black text-white rounded-full w-fit px-8 py-4 ml-2 text-sm">
          <span className="mr-4 px-[0.45rem] rounded-full text-yellow-300 bg-yellow-300">
            .
          </span>
          Accepting New Clients
        </div>
        <div>
          <h2>Upgrade Your Website Today</h2>
          <div className="text-sm pt-4 text_body">
            Simple process. Transparent pricing.
          </div>
        </div>

        <Link
          to="#pricing"
          className="flex justify-center self-center sm:self-start px-5 py-5 bg-black rounded-3xl min-w-72 max-w-xxl text-neutral-100 text-xl"
        >
          See Pricing
        </Link>
        <a
          href="mailto:drewhlee75@gmail.com"
          className="flex text-sm underline self-center"
        >
          Have a question? Email Us
        </a>
      </div>
    </div>
  );
};
