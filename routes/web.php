<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {return Inertia::render('navigation/dashboard/Default');})->name('dashboard');

    // Dashboard
    Route::get('dashboard/default', function () {return Inertia::render('navigation/dashboard/Default');})->name('default');
    Route::get('dashboard/ecommerce', function () {return Inertia::render('navigation/dashboard/Ecommerce');})->name('ecommerce');
    Route::get('dashboard/crm', function () {return Inertia::render('navigation/dashboard/CRM');})->name('CRM');
    Route::get('dashboard/analytics', function () {return Inertia::render('navigation/dashboard/Analytics');})->name('analytics');
    Route::get('dashboard/crypto', function () {return Inertia::render('navigation/dashboard/Crypto');})->name('crypto');
    Route::get('dashboard/finance', function () {return Inertia::render('navigation/dashboard/Finance');})->name('finance');
    Route::get('dashboard/project', function () {return Inertia::render('navigation/dashboard/Project');})->name('project');

    // Widgets
    Route::get('widget/statistics', function () {return Inertia::render('navigation/widgets/statistics/index');})->name('statistics');
    Route::get('widget/data', function () {return Inertia::render('navigation/widgets/DataPages');})->name('DataPages');
    Route::get('widget/table', function () {return Inertia::render('navigation/widgets/TablePages');})->name('TablePages');
    Route::get('widget/user', function () {return Inertia::render('navigation/widgets/UserPage');})->name('UserPage');
    Route::get('widget/chart', function () {return Inertia::render('navigation/widgets/Charts');})->name('Charts');

    // Basic component
    Route::get('basic/alert', function () {return Inertia::render('components/basic/Alert');})->name('Alert');
    Route::get('basic/buttons', function () {return Inertia::render('components/basic/Button');})->name('Button');
    Route::get('basic/badges', function () {return Inertia::render('components/basic/Badges');})->name('Badges');
    Route::get('basic/breadcrumb', function () {return Inertia::render('components/basic/Breadcrumb');})->name('Breadcrumb');
    Route::get('basic/cards', function () {return Inertia::render('components/basic/Cards');})->name('Cards');
    Route::get('basic/color', function () {return Inertia::render('components/basic/Color');})->name('Color');
    Route::get('basic/collapse', function () {return Inertia::render('components/basic/Collapse');})->name('Collapse');
    Route::get('basic/carousel', function () {return Inertia::render('components/basic/Carousel');})->name('Carousel');
    Route::get('basic/dropdowns', function () {return Inertia::render('components/basic/DropDown');})->name('DropDown');
    Route::get('basic/offcanvas', function () {return Inertia::render('components/basic/OffCanvas');})->name('OffCanvas');
    Route::get('basic/pagination', function () {return Inertia::render('components/basic/Pagination');})->name('Pagination');
    Route::get('basic/progress', function () {return Inertia::render('components/basic/Progress');})->name('Progress');
    Route::get('basic/list-group', function () {return Inertia::render('components/basic/ListGroup');})->name('ListGroup');
    Route::get('basic/modal', function () {return Inertia::render('components/basic/Modal');})->name('Modal');
    Route::get('basic/spinner', function () {return Inertia::render('components/basic/Spinner');})->name('Spinner');
    Route::get('basic/tabs-pills', function () {return Inertia::render('components/basic/TabsPills');})->name('TabsPills');
    Route::get('basic/typography', function () {return Inertia::render('components/basic/Typography');})->name('Typography');
    Route::get('basic/tooltip', function () {return Inertia::render('components/basic/Tooltip');})->name('Tooltip');
    Route::get('basic/toasts', function () {return Inertia::render('components/basic/Toasts');})->name('Toasts');
    Route::get('basic/other', function () {return Inertia::render('components/basic/Other');})->name('Other');

    // Advance component
    Route::get('advance/sweet-alert', function () {return Inertia::render('components/advance/SweetAlert');})->name('SweetAlert');
    Route::get('advance/date-picker', function () {return Inertia::render('components/advance/DatePicker');})->name('DatePicker'); 
    Route::get('advance/light-box', function () {return Inertia::render('components/advance/LightBox');})->name('LightBox'); 
    Route::get('advance/modal', function () {return Inertia::render('components/advance/Modal');})->name('Modal'); 
    Route::get('advance/notification', function () {return Inertia::render('components/advance/Notification');})->name('Notification'); 
    Route::get('advance/range-slider', function () {return Inertia::render('components/advance/RangeSlider');})->name('RangeSlider'); 
    Route::get('advance/slider', function () {return Inertia::render('components/advance/Slider');})->name('Slider'); 
    Route::get('advance/syntax-highlighter', function () {return Inertia::render('components/advance/SyntaxHighLighter');})->name('SyntaxHighLighter'); 
    Route::get('advance/tour', function () {return Inertia::render('components/advance/Tour');})->name('Tour'); 
    Route::get('advance/tree-view', function () {return Inertia::render('components/advance/TreeView');})->name('TreeView'); 
    
    // Other component
    Route::get('animation', function () {return Inertia::render('components/Animation');})->name('Animation'); 
    Route::get('icons', function () {return Inertia::render('components/Icons');})->name('Icons'); 


    // Forms element
    Route::get('forms/form-elements/basic', function () {return Inertia::render('forms/form-element/FormBasic');})->name('FormBasic');
    Route::get('forms/form-elements/floating', function () {return Inertia::render('forms/form-element/FormFloating');})->name('FormFloating');
    Route::get('forms/form-elements/options', function () {return Inertia::render('forms/form-element/FormOption');})->name('FormOption');
    Route::get('forms/form-elements/input-group', function () {return Inertia::render('forms/form-element/InputGroup');})->name('InputGroup');
    Route::get('forms/form-elements/checkbox', function () {return Inertia::render('forms/form-element/Checkbox');})->name('Checkbox');
    Route::get('forms/form-elements/radio', function () {return Inertia::render('forms/form-element/Radio');})->name('Radio');
    Route::get('forms/form-elements/switch', function () {return Inertia::render('forms/form-element/Switch');})->name('Switch');
    Route::get('forms/form-elements/mega-options', function () {return Inertia::render('forms/form-element/MegaOptions');})->name('MegaOptions');
    
    // Forms plugin
    Route::get('forms/form-plugins/date/date-picker', function () {return Inertia::render('forms/form-plugins/date/DatePicker');})->name('DatePicker');
    Route::get('forms/form-plugins/date/date-range-picker', function () {return Inertia::render('forms/form-plugins/date/DateRangePicker');})->name('date/DateRangePicker');
    Route::get('forms/form-plugins/date/time-picker', function () {return Inertia::render('forms/form-plugins/date/TimePickerMain');})->name('date/TimePickerMain');
    Route::get('forms/form-plugins/select/choice-js', function () {return Inertia::render('forms/form-plugins/Choices');})->name('Choices'); 
    Route::get('forms/form-plugins/rating', function () {return Inertia::render('forms/form-plugins/Rating');})->name('Rating'); 
    Route::get('forms/form-plugins/recaptcha', function () {return Inertia::render('forms/form-plugins/GoogleReCaptcha');})->name('GoogleReCaptcha'); 
    Route::get('forms/form-plugins/input-mask', function () {return Inertia::render('forms/form-plugins/InputMask');})->name('InputMask'); 
    Route::get('forms/form-plugins/clipboard', function () {return Inertia::render('forms/form-plugins/ClipboardMain');})->name('ClipboardMain'); 
    Route::get('forms/form-plugins/nouislider', function () {return Inertia::render('forms/form-plugins/NouiSliderMain');})->name('NouiSliderMain'); 
    Route::get('forms/form-plugins/bootstrap-switch', function () {return Inertia::render('forms/form-plugins/BootstrapSwitch');})->name('BootstrapSwitch'); 
    Route::get('forms/form-plugins/typeahead', function () {return Inertia::render('forms/form-plugins/TypeaHeadMain');})->name('TypeaHeadMain'); 
    
    // Forms editor
    Route::get('forms/text-editor/tinymce', function () {return Inertia::render('forms/text-editor/TinyMCE');})->name('TinyMCE'); 
    Route::get('forms/text-editor/quill', function () {return Inertia::render('forms/text-editor/Quill');})->name('quill'); 

// Route::get('forms/text-editor/tinymce', function () {return Inertia::render('forms/text-editor/ck-editor/ClassicMain');})->name('TinyMCE'); 
// Route::get('forms/text-editor/tinymce', function () {return Inertia::render('forms/text-editor/ck-editor/DocumentMain');})->name('TinyMCE'); 
// Route::get('forms/text-editor/tinymce', function () {return Inertia::render('forms/text-editor/ck-editor/InlineMain');})->name('TinyMCE'); 
// Route::get('forms/text-editor/tinymce', function () {return Inertia::render('forms/text-editor/ck-editor/BalloonEditorMain');})->name('TinyMCE'); 
// Route::get('forms/text-editor/tinymce', function () {return Inertia::render('forms/text-editor/MarkDown');})->name('TinyMCE'); 

// // render - forms layout pages
// const FormLayoutMain = Loadable(lazy(() => import('views/forms/forms-layouts/SimpleLayout')));
// const FormMultiLayouts = Loadable(lazy(() => import('views/forms/forms-layouts/MultiLayouts')));
// const FormActionBars = Loadable(lazy(() => import('views/forms/forms-layouts/ActionBars')));
// const FormStickyActionBarMain = Loadable(lazy(() => import('views/forms/forms-layouts/StickyActionBarMain')));

// // render - forms upload pages
// const FileUploadDropZone = Loadable(lazy(() => import('views/forms/form-upload/DropZone')));
// const FileUploadUppy = Loadable(lazy(() => import('views/forms/form-upload/Uppy')));

// // render - forms validation, wizard, image-cropper pages
// const FormValidationMain = Loadable(lazy(() => import('views/forms/FormValidationMain')));
// const FormWizard = Loadable(lazy(() => import('views/forms/WizardMain')));
// const FormImageCrop = Loadable(lazy(() => import('views/forms/ImageCrop')));

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
