// project-imports
import AuthLoginForm from 'sections/auth/AuthLogin';

// assets
import BackgroundImg3 from 'assets/images/authentication/img-auth-bg-3.jpg';

// ===========================|| AUTH - LOGIN V3 ||=========================== //

export default function LoginV3Page() {
  return (
    <div className="auth-main" style={{ backgroundImage: `url(${BackgroundImg3})` }}>
      <div className="auth-wrapper v3">
        <div className="auth-form">
          <AuthLoginForm className="text-white" link="/auth/register-v3" />
        </div>
      </div>
    </div>
  );
}
