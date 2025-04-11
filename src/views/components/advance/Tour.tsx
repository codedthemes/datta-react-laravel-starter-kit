// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import HelloCard from 'sections/components/advance/tour/HelloCard';

// =============================|| ADVANCED - TOUR ||============================== //

export default function TourPage() {
  return (
    <>
      <ComponentHeader
        caption="Intro.js is a lightweight JavaScript library for creating step-by-step and powerful onboarding tours"
        link="https://introjs.com/"
      />
      <HelloCard />
    </>
  );
}
