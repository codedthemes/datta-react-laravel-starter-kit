import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';

export default function AuthLayout({ children, ...props }: { children: React.ReactNode }) {
    return (
        <AuthLayoutTemplate {...props}>
            {children}
        </AuthLayoutTemplate>
    );
}
