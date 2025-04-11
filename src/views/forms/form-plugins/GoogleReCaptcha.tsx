// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import ReCaptcha from 'sections/forms/form-plugins/ReCaptcha';

// =============================|| FORM PLUGIN - GOOGLE RECAPTCHA ||============================== //

export default function GoogleReCaptchaPage() {
  return (
    <>
      <ComponentHeader
        caption="A vanilla JavaScript remake of bootstrap-datepicker is written from scratch as ECMAScript modules/Sass stylesheets to reproduce similar usability to bootstrap-datepicker."
        link="https://mymth.github.io/vanillajs-datepicker/#/"
      />
      <ReCaptcha />;
    </>
  );
}
