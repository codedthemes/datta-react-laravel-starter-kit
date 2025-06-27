import { lazy } from 'react';

// project-imports
import DashboardLayout from 'layout/Dashboard';
import Loadable from 'components/Loadable';

// render - forms element pages
const FormBasic = Loadable(lazy(() => import('views/forms/form-element/FormBasic')));
const FormFloating = Loadable(lazy(() => import('views/forms/form-element/FormFloating')));
const FormOptions = Loadable(lazy(() => import('views/forms/form-element/FormOption')));
const FormInputGroup = Loadable(lazy(() => import('views/forms/form-element/InputGroup')));
const FormCheckbox = Loadable(lazy(() => import('views/forms/form-element/Checkbox')));
const FormRadio = Loadable(lazy(() => import('views/forms/form-element/Radio')));
const FormSwitch = Loadable(lazy(() => import('views/forms/form-element/Switch')));
const FormMegaOptions = Loadable(lazy(() => import('views/forms/form-element/MegaOptions')));

// render - forms plugin pages
const FormDatePicker = Loadable(lazy(() => import('views/forms/form-plugins/date/DatePicker')));
const FormDateRangePickerMain = Loadable(lazy(() => import('views/forms/form-plugins/date/DateRangePicker')));
const FormTimePickerMain = Loadable(lazy(() => import('views/forms/form-plugins/date/TimePickerMain')));
const FormSelectChoice = Loadable(lazy(() => import('views/forms/form-plugins/Choices')));
const FormRating = Loadable(lazy(() => import('views/forms/form-plugins/Rating')));
const FormGoogleReCaptcha = Loadable(lazy(() => import('views/forms/form-plugins/GoogleReCaptcha')));
const FormInputMask = Loadable(lazy(() => import('views/forms/form-plugins/InputMask')));
const FormClipBoardMain = Loadable(lazy(() => import('views/forms/form-plugins/ClipboardMain')));
const FormNouiSlider = Loadable(lazy(() => import('views/forms/form-plugins/NouiSliderMain')));
const FormBootstrapSwitch = Loadable(lazy(() => import('views/forms/form-plugins/BootstrapSwitch')));
const FormTypeaHeadMain = Loadable(lazy(() => import('views/forms/form-plugins/TypeaHeadMain')));

// render - forms editor pages
const FormTinyMCEPage = Loadable(lazy(() => import('views/forms/text-editor/TinyMCE')));
const FormQuill = Loadable(lazy(() => import('views/forms/text-editor/Quill')));
const FormClassic = Loadable(lazy(() => import('views/forms/text-editor/ck-editor/ClassicMain')));
const FormDocument = Loadable(lazy(() => import('views/forms/text-editor/ck-editor/DocumentMain')));
const FormInlineMain = Loadable(lazy(() => import('views/forms/text-editor/ck-editor/InlineMain')));
const FormBalloonEditorMain = Loadable(lazy(() => import('views/forms/text-editor/ck-editor/BalloonEditorMain')));
const FormMarkDown = Loadable(lazy(() => import('views/forms/text-editor/MarkDown')));

// render - forms layout pages
const FormLayoutMain = Loadable(lazy(() => import('views/forms/forms-layouts/SimpleLayout')));
const FormMultiLayouts = Loadable(lazy(() => import('views/forms/forms-layouts/MultiLayouts')));
const FormActionBars = Loadable(lazy(() => import('views/forms/forms-layouts/ActionBars')));
const FormStickyActionBarMain = Loadable(lazy(() => import('views/forms/forms-layouts/StickyActionBarMain')));

// render - forms upload pages
const FileUploadDropZone = Loadable(lazy(() => import('views/forms/form-upload/DropZone')));
const FileUploadUppy = Loadable(lazy(() => import('views/forms/form-upload/Uppy')));

// render - forms validation, wizard, image-cropper pages
const FormValidationMain = Loadable(lazy(() => import('views/forms/FormValidationMain')));
const FormWizard = Loadable(lazy(() => import('views/forms/WizardMain')));
const FormImageCrop = Loadable(lazy(() => import('views/forms/ImageCrop')));

// ==============================|| FORMS ROUTING ||============================== //

const FormsRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'forms',
          children: [
            {
              path: 'form-elements',
              children: [
                { path: 'basic', element: <FormBasic /> },
                { path: 'floating', element: <FormFloating /> },
                { path: 'options', element: <FormOptions /> },
                { path: 'input-group', element: <FormInputGroup /> },
                { path: 'checkbox', element: <FormCheckbox /> },
                { path: 'radio', element: <FormRadio /> },
                { path: 'switch', element: <FormSwitch /> },
                { path: 'mega-options', element: <FormMegaOptions /> }
              ]
            },
            {
              path: 'form-plugins',
              children: [
                {
                  path: 'date',
                  children: [
                    { path: 'date-picker', element: <FormDatePicker /> },
                    { path: 'date-range-picker', element: <FormDateRangePickerMain /> },
                    { path: 'time-picker', element: <FormTimePickerMain /> }
                  ]
                },
                { path: 'select/choice-js', element: <FormSelectChoice /> },
                { path: 'rating', element: <FormRating /> },
                { path: 'recaptcha', element: <FormGoogleReCaptcha /> },
                { path: 'input-mask', element: <FormInputMask /> },
                { path: 'clipboard', element: <FormClipBoardMain /> },
                { path: 'nouislider', element: <FormNouiSlider /> },
                { path: 'bootstrap-switch', element: <FormBootstrapSwitch /> },
                { path: 'typeahead', element: <FormTypeaHeadMain /> }
              ]
            },
            {
              path: 'text-editor',
              children: [
                { path: 'tinymce', element: <FormTinyMCEPage /> },
                { path: 'quill', element: <FormQuill /> },
                {
                  path: 'ck-editor',
                  children: [
                    { path: 'classic', element: <FormClassic /> },
                    { path: 'document', element: <FormDocument /> },
                    { path: 'inline', element: <FormInlineMain /> },
                    { path: 'balloon', element: <FormBalloonEditorMain /> }
                  ]
                },
                { path: 'markdown', element: <FormMarkDown /> }
              ]
            },
            {
              path: 'form-layouts',
              children: [
                { path: 'default-layouts', element: <FormLayoutMain /> },
                { path: 'multi-layouts', element: <FormMultiLayouts /> },
                { path: 'action-bar', element: <FormActionBars /> },
                { path: 'sticky-action-bar', element: <FormStickyActionBarMain /> }
              ]
            },
            {
              path: 'form-upload',
              children: [
                { path: 'dropzone', element: <FileUploadDropZone /> },
                { path: 'uppy', element: <FileUploadUppy /> }
              ]
            },
            { path: 'wizard', element: <FormWizard /> },
            { path: 'form-validation', element: <FormValidationMain /> },
            { path: 'image-cropper', element: <FormImageCrop /> }
          ]
        }
      ]
    }
  ]
};

export default FormsRoutes;
