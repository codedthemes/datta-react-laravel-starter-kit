// project-imports
import ReferenceHeader from 'components/ReferenceHeader';
import HelloCard from 'sections/components/advance/tour/HelloCard';

// =============================|| ADVANCED - TOUR ||============================== //

export default function TourPage() {
  return (
    <>
      <ReferenceHeader
        caption="Intro.js is a lightweight JavaScript library for creating step-by-step and powerful onboarding tours"
        link="https://introjs.com/"
      />
      <HelloCard />
    </>
  );
}
