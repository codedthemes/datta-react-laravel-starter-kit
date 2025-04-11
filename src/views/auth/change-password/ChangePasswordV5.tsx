// project-imports
import AuthChangePasswordForm from 'sections/auth/AuthChangePassword';

// assets
import BackgroundImg5 from 'assets/images/authentication/img-auth-bg-5.jpg';

// ===========================|| AUTH - CHANGE PASSWORD V5 ||=========================== //

export default function ChangePasswordV5Page() {
  return (
    <div className="auth-main" style={{ backgroundImage: `url(${BackgroundImg5})` }}>
      <div className="auth-wrapper v5">
        <div className="auth-form">
          <AuthChangePasswordForm />
        </div>
      </div>
    </div>
  );
}
