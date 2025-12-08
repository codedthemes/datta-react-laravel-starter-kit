import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

// project-imports
import Drawer from '../Dashboard/Drawer';
import Footer from '../Dashboard/Footer';
import Header from '../Dashboard/Header';
import Customizer from '../Dashboard/Customizer';
import Breadcrumbs from '@/components/breadcrumbs';
import useConfig from '@/hooks/useConfig';
import NavigationScroll from '@/components/NavigationScroll';


export default function AppSidebarLayout({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    const { container } = useConfig();
    return (
        <>
            <Customizer/>
            <Drawer />
            <Header />
            <div className="pc-container">
                <div className={`pc-content ${container && 'container'} `}>
                    <Breadcrumbs />
                    <NavigationScroll>
                        {children}
                    </NavigationScroll>
                </div>
            </div>
            <Footer />
        </>
    );
}
