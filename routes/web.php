<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::get('dashboard', function () {return Inertia::render('dashboard');})->name('dashboard');
    // Route::get('component', function () {return Inertia::render('component');})->name('component');
    // Route::get('component', function () {return Inertia::render('component');})->name('component');

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

    // Route::get('basic/alert', function () {return Inertia::render('navigation/components/basic/Alert');})->name('Alert');


    // Basic component
// const BasicAlert = Loadable(lazy(() => import('views/components/basic/Alert')));
// const BasicButton = Loadable(lazy(() => import('views/components/basic/Button')));
// const BasicBadges = Loadable(lazy(() => import('views/components/basic/Badges')));
// const BasicBreadcrumb = Loadable(lazy(() => import('views/components/basic/Breadcrumb')));
// const BasicCards = Loadable(lazy(() => import('views/components/basic/Cards')));
// const BasicColor = Loadable(lazy(() => import('views/components/basic/Color')));
// const BasicCarousel = Loadable(lazy(() => import('views/components/basic/Carousel')));
// const BasicCollapse = Loadable(lazy(() => import('views/components/basic/Collapse')));
// const BasicDropdown = Loadable(lazy(() => import('views/components/basic/DropDown')));
// const BasicOffcanvas = Loadable(lazy(() => import('views/components/basic/OffCanvas')));
// const BasicPagination = Loadable(lazy(() => import('views/components/basic/Pagination')));
// const BasicProgress = Loadable(lazy(() => import('views/components/basic/Progress')));
// const BasicListGroup = Loadable(lazy(() => import('views/components/basic/ListGroup')));
// const BasicModal = Loadable(lazy(() => import('views/components/basic/Modal')));
// const BasicSpinner = Loadable(lazy(() => import('views/components/basic/Spinner')));
// const BasicTabsPills = Loadable(lazy(() => import('views/components/basic/TabsPills')));
// const BasicTypography = Loadable(lazy(() => import('views/components/basic/Typography')));
// const BasicTooltip = Loadable(lazy(() => import('views/components/basic/Tooltip')));
// const BasicToasts = Loadable(lazy(() => import('views/components/basic/Toasts')));
// const BasicOther = Loadable(lazy(() => import('views/components/basic/Other')));

// render - advance component pages
// const AdvanceDatePicker = Loadable(lazy(() => import('views/components/advance/DatePicker')));
// const AdvanceLightBox = Loadable(lazy(() => import('views/components/advance/LightBox')));
// const AdvanceModal = Loadable(lazy(() => import('views/components/advance/Modal')));
// const AdvanceNotification = Loadable(lazy(() => import('views/components/advance/Notification')));
// const AdvanceRangeSlider = Loadable(lazy(() => import('views/components/advance/RangeSlider')));
// const AdvanceSlider = Loadable(lazy(() => import('views/components/advance/Slider')));
// const AdvanceSweetAlert = Loadable(lazy(() => import('views/components/advance/SweetAlert')));
// const AdvanceSyntaxHighlighter = Loadable(lazy(() => import('views/components/advance/SyntaxHighLighter')));
// const AdvanceTour = Loadable(lazy(() => import('views/components/advance/Tour')));
// const AdvanceTreeView = Loadable(lazy(() => import('views/components/advance/TreeView')));

// render - animation component page
// const AnimationPage = Loadable(lazy(() => import('views/components/Animation')));

// render - icons component pag
// const IconsComponents = Loadable(lazy(() => import('views/components/Icons')));


});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
