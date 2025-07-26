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
    Route::get('forms/text-editor/ck-editor/classic', function () {return Inertia::render('forms/text-editor/ck-editor/ClassicMain');})->name('TinyMCE'); 
    Route::get('forms/text-editor/ck-editor/document', function () {return Inertia::render('forms/text-editor/ck-editor/DocumentMain');})->name('TinyMCE'); 
    Route::get('forms/text-editor/ck-editor/inline', function () {return Inertia::render('forms/text-editor/ck-editor/InlineMain');})->name('TinyMCE'); 
    Route::get('forms/text-editor/ck-editor/balloon', function () {return Inertia::render('forms/text-editor/ck-editor/BalloonEditorMain');})->name('TinyMCE'); 
    Route::get('forms/text-editor/markdown', function () {return Inertia::render('forms/text-editor/MarkDown');})->name('TinyMCE'); 

    // Forms layout
    Route::get('forms/form-layouts/default-layouts', function () {return Inertia::render('forms/forms-layouts/SimpleLayout');})->name('SimpleLayout'); 
    Route::get('forms/form-layouts/multi-layouts', function () {return Inertia::render('forms/forms-layouts/MultiLayouts');})->name('MultiLayouts'); 
    Route::get('forms/form-layouts/action-bar', function () {return Inertia::render('forms/forms-layouts/ActionBars');})->name('ActionBars'); 
    Route::get('forms/form-layouts/sticky-action-bar', function () {return Inertia::render('forms/forms-layouts/StickyActionBarMain');})->name('StickyActionBarMain'); 
    
    // Forms upload
    Route::get('forms/form-upload/dropzone', function () {return Inertia::render('forms/form-upload/DropZone');})->name('DropZone'); 
    Route::get('forms/form-upload/uppy', function () {return Inertia::render('forms/form-upload/Uppy');})->name('Uppy'); 
    
    // Forms validation, wizard, image-cropper
    Route::get('forms/wizard', function () {return Inertia::render('forms/WizardMain');})->name('WizardMain'); 
    Route::get('forms/form-validation', function () {return Inertia::render('forms/FormValidationMain');})->name('FormValidationMain'); 
    Route::get('forms/image-cropper', function () {return Inertia::render('forms/ImageCrop');})->name('ImageCrop'); 

    // Bootstrap table
    Route::get('tables/bootstrap-table/basic-table', function () {return Inertia::render('table/bootstrap-table/BasicTable');})->name('BasicTable'); 
    Route::get('tables/bootstrap-table/sizing-table', function () {return Inertia::render('table/bootstrap-table/SizingTable');})->name('SizingTable'); 
    Route::get('tables/bootstrap-table/border-table', function () {return Inertia::render('table/bootstrap-table/BorderTable');})->name('BorderTable'); 
    Route::get('tables/bootstrap-table/styling-table', function () {return Inertia::render('table/bootstrap-table/StylingTable');})->name('StylingTable'); 

    // React table
    Route::get('tables/react-table/basic', function () {return Inertia::render('table/react-table/Basic');})->name('Basic');
    Route::get('tables/react-table/dense', function () {return Inertia::render('table/react-table/Dense');})->name('Dense');
    Route::get('tables/react-table/sorting', function () {return Inertia::render('table/react-table/Sorting');})->name('Sorting');
    Route::get('tables/react-table/filtering', function () {return Inertia::render('table/react-table/Filtering');})->name('Filtering');
    Route::get('tables/react-table/grouping', function () {return Inertia::render('table/react-table/Grouping');})->name('Grouping');
    Route::get('tables/react-table/pagination', function () {return Inertia::render('table/react-table/Pagination');})->name('Pagination');
    Route::get('tables/react-table/row-selection', function () {return Inertia::render('table/react-table/RowSelection');})->name('RowSelection');
    Route::get('tables/react-table/expanding', function () {return Inertia::render('table/react-table/Expanding');})->name('Expanding');
    Route::get('tables/react-table/drag-drop', function () {return Inertia::render('table/react-table/DragDrop');})->name('DragDrop');
    Route::get('tables/react-table/column-visibility', function () {return Inertia::render('table/react-table/ColumnVisibility');})->name('ColumnVisibility');
    Route::get('tables/react-table/column-resizing', function () {return Inertia::render('table/react-table/ColumnResizing');})->name('ColumnResizing');
    Route::get('tables/react-table/sticky', function () {return Inertia::render('table/react-table/StickyHeader');})->name('StickyHeader');
    Route::get('tables/react-table/umbrella', function () {return Inertia::render('table/react-table/Umbrella');})->name('Umbrella');
    Route::get('tables/react-table/empty', function () {return Inertia::render('table/react-table/Empty');})->name('Empty');
    Route::get('tables/react-table/virtualized', function () {return Inertia::render('table/react-table/Virtualized');})->name('Virtualized');
    Route::get('tables/react-table/edit-table', function () {return Inertia::render('table/react-table/EditTable');})->name('EditTable');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
