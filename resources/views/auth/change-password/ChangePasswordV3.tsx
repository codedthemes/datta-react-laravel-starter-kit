// project-imports
import AuthChangePasswordForm from 'sections/auth/AuthChangePassword';

// assets
import BackgroundImg3 from 'assets/images/authentication/img-auth-bg-3.jpg';

// ===========================|| AUTH - CHANGE PASSWORD V3 ||=========================== //

export default function ChangePasswordV3Page() {
  return (
    <div className="auth-main" style={{ backgroundImage: `url(${BackgroundImg3})` }}>
      <div className="auth-wrapper v3">
        <div className="auth-form">
          <AuthChangePasswordForm className="text-white" />
        </div>
      </div>
    </div>
  );
}
