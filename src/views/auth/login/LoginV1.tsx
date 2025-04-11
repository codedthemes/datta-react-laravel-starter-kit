// project-imoports
import AuthLoginForm from 'sections/auth/AuthLogin';

// ===========================|| AUTH - LOGIN V1 ||=========================== //

export default function LoginV1Page() {
  return (
    <div className="auth-main">
      <div className="auth-wrapper v1">
        <div className="auth-form">
          <div className="position-relative ">
            <div className="auth-bg">
              <span className="r"></span>
              <span className="r s"></span>
              <span className="r s"></span>
              <span className="r"></span>
            </div>
            <AuthLoginForm link="/auth/register-v1" resetLink="/auth/reset-password-v1" />
          </div>
        </div>
      </div>
    </div>
  );
}
