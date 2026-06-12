import PropTypes from 'prop-types';
import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';
import { Suspense, useEffect } from 'react';

// project-imports
import Loader from '@/components/Loader';

import useConfig from '@/hooks/useConfig';
import { setResolvedTheme } from '@/components/setResolvedTheme';

export default function AuthLayout({
    children,
    ...props
}) {
    const { themeDirection, customColor, mode } = useConfig();

    useEffect(() => {
        const body = document.body;
        body.setAttribute('data-pc-preset', customColor);
        body.setAttribute('data-pc-direction', themeDirection);
        body.setAttribute('data-pc-theme', mode);
        setResolvedTheme(mode);
    }, [customColor, themeDirection, mode]);

    return (
        <Suspense fallback={<Loader />}>
            <AuthLayoutTemplate {...props}>
                {children}
            </AuthLayoutTemplate>
        </Suspense>
    );
}


AuthLayout.propTypes = {children:PropTypes.node};