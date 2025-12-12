import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const FooterContent = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-12 flex flex-col justify-start gap-y-12 w-full md:gap-x-[normal] md:flex-row md:justify-between md:gap-y-[normal]">
      <div className="items-start box-border caret-transparent gap-x-12 flex flex-col max-w-[70%] gap-y-12 md:max-w-[400px]">
        <div className="items-start box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:gap-x-6 md:gap-y-6">
          <img
            alt="image"
            src="https://c.animaapp.com/mhfo26pp0M5OPA/assets/logo.svg"
            className="box-border caret-transparent h-[33px] object-cover"
          />
          <p className="text-white text-sm box-border caret-transparent leading-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
      </div>
      <div className="items-start box-border caret-transparent gap-x-12 flex flex-col gap-y-12 md:gap-x-[100px] md:flex-row md:gap-y-[100px]">
        <FooterLinks
          items={[
            { text: "Find a guide", isButton: true },
            { text: "Find a tour", href: "#destinations", isButton: false },
            { text: "Visit a city", href: "#destinations", isButton: false },
            { text: "Visit a country", href: "#destinations", isButton: false },
          ]}
        />
        <FooterLinks
          items={[
            { text: "How it works", href: "#how-it-works", isButton: false },
            { text: "Cancelation policy", isButton: true },
            { text: "Local guides", isButton: true },
            { text: "Affiliate", isButton: true },
          ]}
        />
        <FooterLinks
          items={[
            { text: "About us", isButton: true },
            { text: "Blog", isButton: true },
            { text: "Partners", isButton: true },
            { text: "Faqs", isButton: true },
            { text: "Careers", isButton: true },
          ]}
        />
      </div>
    </div>
  );
};
