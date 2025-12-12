import { DestinationCard } from "@/sections/DestinationsSection/components/DestinationCard";

export const DestinationGrid = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-12 grid flex-col grid-cols-[auto] gap-y-12 w-full md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
      <DestinationCard
        href="/"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/offers-11-1500w.png"
        imageAlt="image"
        destinationName="Crete, Greece"
        localGuidesCount={3}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <DestinationCard
        href="/"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/offers-21-1500w.png"
        imageAlt="image"
        destinationName="Barcelona, Spain"
        localGuidesCount={54}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <DestinationCard
        href="/"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/offers-31-1500w.png"
        imageAlt="image"
        destinationName="Machu Picchu, Peru"
        localGuidesCount={34}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <DestinationCard
        href="/"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/offers-41-1500w.png"
        imageAlt="image"
        destinationName="Doha, Quatar"
        localGuidesCount={1}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <DestinationCard
        href="/"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/offers-51-1500w.png"
        imageAlt="image"
        destinationName="Rhodes, Greece"
        localGuidesCount={6}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <DestinationCard
        href="/"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/offers-61-1500w.png"
        imageAlt="image"
        destinationName="New York, USA"
        localGuidesCount={132}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <DestinationCard
        href="/"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/offers-71-1500w.png"
        imageAlt="image"
        destinationName="Doha, Quatar"
        localGuidesCount={1}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <DestinationCard
        href="/"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/offers-81-1500w.png"
        imageAlt="image"
        destinationName="Rhodes, Greece"
        localGuidesCount={6}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
      <DestinationCard
        href="/"
        imageUrl="https://c.animaapp.com/mhfo26pp0M5OPA/assets/offers-91-1500w.png"
        imageAlt="image"
        destinationName="New York, USA"
        localGuidesCount={132}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      />
    </div>
  );
};
