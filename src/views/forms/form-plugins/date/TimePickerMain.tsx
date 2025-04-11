// project-imports
import ComponentHeader from 'components/cards/ComponentHeader';
import TimePicker from 'sections/forms/form-plugins/date/TimePicker';

// ===============================|| DATE - TIME PICKER ||=============================== //

export default function TimePickerPage() {
  return (
    <>
      <ComponentHeader
        caption="flatpickr is a lightweight and powerful datetime picker. Lean, UX-driven, and extensible, yet it doesn’t depend on any libraries. There’s minimal UI but many themes. Rich, exposed APIs and event system make it suitable for any environment."
        link="https://flatpickr.js.org/examples/"
      />
      <TimePicker />
    </>
  );
}
