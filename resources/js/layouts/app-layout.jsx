import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';

export default function AppLayout({ children, breadcrumbs, ...props }) {
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            {children}
        </AppLayoutTemplate>
    );
}
