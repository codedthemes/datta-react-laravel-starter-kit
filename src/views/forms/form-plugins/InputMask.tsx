// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import DateInputMask from 'sections/forms/form-plugins/input-mask/DateInputMask';
import NetworkInputMask from 'sections/forms/form-plugins/input-mask/NetworkInputMask';
import PhoneNo from 'sections/forms/form-plugins/input-mask/PhoneNo';
import Time from 'sections/forms/form-plugins/input-mask/Time';

// ==========================|| FORM PLUGIN - INPUT MASK ||========================== //

export default function InputMaskPage() {
  return (
    <>
      <ComponentHeader
        caption="vanilla javascript input mask wich Input processing is based on a simple idea of comparing states before and after change."
        link="https://imask.js.org/"
      />{' '}
      <DateInputMask />
      <Time />
      <PhoneNo />
      <NetworkInputMask />
    </>
  );
}
