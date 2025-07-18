import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';
import MainCard from '@/components/MainCard';

interface AuthLayoutProps {
    name?: string;
}

export default function AuthSimpleLayout({ children }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <>
        <div className="auth-main">
            <div className="auth-wrapper v1">
                <div className="auth-form">
                <div className="position-relative">
                    <div className="auth-bg">
                        <span className="r"></span>
                        <span className="r s"></span>
                        <span className="r s"></span>
                        <span className="r"></span>
                    </div>
                    <MainCard className="mb-0">
                        {children}
                    </MainCard>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}
