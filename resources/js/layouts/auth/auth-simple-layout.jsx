import React from 'react';
import PropTypes from 'prop-types';

export default function AuthSimpleLayout({ children }) {
    return (
        <>
            <div
                data-pc-preset="preset-1"
                data-pc-sidebar-caption="true"
                data-pc-direction="ltr"
                data-pc-theme="light"
            >
                {children}
            </div>
        </>
    );
}


AuthSimpleLayout.propTypes = {children:PropTypes.any,
props:PropTypes.any};