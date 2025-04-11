// project-imports
import AuthRegisterForm from 'sections/auth/AuthRegister';

// assets
import BackgroundImg3 from 'assets/images/authentication/img-auth-bg-3.jpg';

// ===========================|| AUTH - REGISTER V3 ||=========================== //

export default function RegisterV3Page() {
  return (
    <div className="auth-main" style={{ backgroundImage: `url(${BackgroundImg3})` }}>
      <div className="auth-wrapper v3">
        <div className="auth-form">
          <AuthRegisterForm className="text-white" link="/auth/login-v3" />
        </div>
      </div>
    </div>
  );
}
