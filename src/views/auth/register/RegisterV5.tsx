// project-imports
import AuthRegisterForm from 'sections/auth/AuthRegister';

// assets
import BackgroundImg5 from 'assets/images/authentication/img-auth-bg-5.jpg';

// ===========================|| AUTH - REGISTER V5 ||=========================== //

export default function RegisterV5Page() {
  return (
    <div className="auth-main" style={{ backgroundImage: `url(${BackgroundImg5})` }}>
      <div className="auth-wrapper v5">
        <div className="auth-form">
          <AuthRegisterForm link="/auth/login-v5" />
        </div>
      </div>
    </div>
  );
}
