import { HeroSection } from "@/sections/HeroSection";
import { DestinationsSection } from "@/sections/DestinationsSection";
import { TestimonialSection } from "@/sections/TestimonialSection";
import { ContentSection } from "@/sections/ContentSection";
import { SpotlightSection } from "@/sections/SpotlightSection";
import { GuidesSection } from "@/sections/GuidesSection";
import { ArticlesSection } from "@/sections/ArticlesSection";
import { FAQSection } from "@/sections/FAQSection";
import { CTASection } from "@/sections/CTASection";
import { Footer } from "@/sections/Footer";

export const PageContainer = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="items-center box-border caret-transparent flex flex-col min-h-[1000px] overflow-x-hidden overflow-y-auto w-full">
        <HeroSection />
        <DestinationsSection />
        <TestimonialSection />
        <ContentSection />
        <SpotlightSection />
        <GuidesSection />
        <ArticlesSection />
        <FAQSection />
        <CTASection />
        <Footer />
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent contents">
            <div className="box-border caret-transparent contents"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
