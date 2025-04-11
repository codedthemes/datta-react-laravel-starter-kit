// project-imports
import AuthResetPasswordForm from 'sections/auth/AuthResetPassword';

// assets
import BackgroundImg3 from 'assets/images/authentication/img-auth-bg-3.jpg';

// ===========================|| AUTH - RESET PASSWORD V3||=========================== //

export default function ResetPasswordV3Page() {
  return (
    <div className="auth-main" style={{ backgroundImage: `url(${BackgroundImg3})` }}>
      <div className="auth-wrapper v3">
        <div className="auth-form">
          <AuthResetPasswordForm className="text-white" />
        </div>
      </div>
    </div>
  );
}
