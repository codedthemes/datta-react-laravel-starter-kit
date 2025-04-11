// project-imports
import AppsSection from 'sections/landing/AppsBlock';
import CallToActionBlock from 'sections/landing/CallToActionBlock';
import ContactUSSection from 'sections/landing/ContactUSBlock';
import FeatureBlock from 'sections/landing/FeatureBlock';
import FeatureBlock2 from 'sections/landing/FeatureBlock2';
import HeaderSection from 'sections/landing/HeaderBlock';
import HelpFullComponent from 'sections/landing/HelpFullBlock';
import LayoutsBlock from 'sections/landing/LayoutsBlock';
import NumberBlock from 'sections/landing/NumberBlock';
import PricingBlock from 'sections/landing/PricingBlock';
import TestimonialBlock from 'sections/landing/TestimonialBlock';
import TrustedBySection from 'sections/landing/TrustedByBlock';

// ==============================|| REACT TABLE - LANDING PAGE ||============================== //

export default function LangdingPage() {
  return (
    <div
      data-pc-preset="preset-1"
      data-pc-sidebar-caption="true"
      data-pc-direction="ltr"
      data-pc-sidebar_theme=""
      data-pc-theme="light"
      className="landing-page"
    >
      <header className="landing-header" id="home">
        <HeaderSection />
      </header>
      <FeatureBlock />
      <NumberBlock />
      <LayoutsBlock />
      <CallToActionBlock />
      <HelpFullComponent />
      <FeatureBlock2 />
      <AppsSection />
      <PricingBlock />
      <TestimonialBlock />
      <TrustedBySection />
      <ContactUSSection />
    </div>
  );
}
