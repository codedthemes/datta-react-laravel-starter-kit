import PropTypes from 'prop-types';

// project-imports
import Drawer from '../Dashboard/Drawer';
import Footer from '../Dashboard/Footer';
import Header from '../Dashboard/Header';
import Breadcrumbs from '@/components/breadcrumbs';
import useConfig from '@/hooks/useConfig';
import NavigationScroll from '@/components/NavigationScroll';

export default function AppSidebarLayout({ children, breadcrumbs = [], ...props }) {
    const { container } = useConfig();

    return (
        <>
            <Drawer />
            <Header />
            <div className="pc-container">
                <div className={`pc-content ${container && 'container'}`}>
                    <Breadcrumbs items={breadcrumbs} />
                    <NavigationScroll>
                        {children}
                    </NavigationScroll>
                </div>
            </div>
            <Footer />
        </>
    );
}

AppSidebarLayout.propTypes = {
    children: PropTypes.any,
    breadcrumbs: PropTypes.array
};
