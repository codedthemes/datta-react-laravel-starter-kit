import { useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';

// third-party
import { SubmitHandler, useForm } from 'react-hook-form';

// project-imports
import MainCard from 'components/MainCard';
import { confirmPasswordSchema, passwordSchema } from 'utils/validationSchema';

// assets
import WhiteLogo from 'assets/images/logo-white.svg';
import Logo from 'assets/images/logo-dark.svg';
import { Link } from 'react-router-dom';

interface ChangePasswordFormInput {
  password: string;
  confirmpassword: string;
}

// ==============================|| AUTH CHANGE PASSWORD FORM ||============================== //

export default function AuthChangePasswordForm({ className }: { className?: string }) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
    clearErrors
  } = useForm<ChangePasswordFormInput>();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit: SubmitHandler<ChangePasswordFormInput> = (data: ChangePasswordFormInput) => {
    if (data.password !== data.confirmpassword) {
      setError('confirmpassword', {
        type: 'manual',
        message: 'Both Password must be match!'
      });
    } else {
      clearErrors('confirmpassword');
      reset();
    }
  };

  return (
    <MainCard className={window.location.pathname === '/auth/register-v4' ? 'my-0' : 'my-5'}>
      <div className="text-center">
        <Link to="#">
          <Image src={className === 'text-white' ? WhiteLogo : Logo} alt="img" />
        </Link>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h4 className={`text-center f-w-500 mt-4 mb-3 ${className}`}>Change Password</h4>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label className={className}>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password', passwordSchema)}
              isInvalid={!!errors.password}
              className={className && 'bg-transparent border-white text-white border-opacity-25 '}
            />
            <Button onClick={togglePasswordVisibility}>
              {showPassword ? <i className="ti ti-eye" /> : <i className="ti ti-eye-off" />}
            </Button>
            <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label className={className}>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            {...register('confirmpassword', confirmPasswordSchema)}
            isInvalid={!!errors.confirmpassword}
            className={className && 'bg-transparent border-white text-white border-opacity-25 '}
          />
          <Form.Control.Feedback type="invalid">{errors.confirmpassword?.message}</Form.Control.Feedback>
        </Form.Group>
        <div className="text-center mt-4">
          <Button type="submit" className="shadow px-sm-4">
            Change Password
          </Button>
        </div>
      </Form>
    </MainCard>
  );
}
