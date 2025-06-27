import { useState } from 'react';
import axios from 'axios';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';

// third-party
import { SubmitHandler, useForm } from 'react-hook-form';

// project-imports
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';
import { ThemeMode } from 'config';
import { emailSchema, passwordSchema } from 'utils/validationSchema';
import { getResolvedTheme, setResolvedTheme } from 'components/setResolvedTheme';

// assets
import LightLogo from 'assets/images/logo-white.svg';
import DarkLogo from 'assets/images/logo-dark.svg';

interface LoginFormInput {
  email: string;
  password: string;
}

interface FormProps {
  className?: string;
  link: string;
  resetLink?: string;
}

export default function AuthLoginForm({ className, link, resetLink }: FormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const { mode } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const logo = resolvedTheme === ThemeMode.DARK ? LightLogo : DarkLogo;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LoginFormInput>();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    setLoginError('');
    try {
      // Step 1: Get CSRF token
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials: true,
      });

      // Step 2: Submit login request
      await axios.post(
        'http://localhost:8000/login',
        {
          email: data.email,
          password: data.password,
          remember: true,
        },
        {
          withCredentials: true,
        }
      );

      // Step 3: Redirect
      window.location.href = 'http://localhost:3000/dashboard/default';
    } catch (error: any) {
      setLoginError('Login failed');
      // reset('password');
    }
  };

  return (
    <MainCard className="mb-0">
      <div className="text-center">
        <a>
          <Image src={logo} alt="img" />
        </a>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <h4 className={`text-center f-w-500 mt-4 mb-3 ${className}`}>Login</h4>

        {loginError && (
          <div className="alert alert-danger text-center py-2">{loginError}</div>
        )}

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Email Address"
            {...register('email', emailSchema)}
            isInvalid={!!errors.email}
            className={className && 'bg-transparent border-white text-white border-opacity-25 '}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <InputGroup>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password', passwordSchema)}
              isInvalid={!!errors.password}
              className={className && 'bg-transparent border-white text-white border-opacity-25 '}
            />
            <Button variant="secondary" onClick={togglePasswordVisibility}>
              {showPassword ? <i className="ti ti-eye" /> : <i className="ti ti-eye-off" />}
            </Button>
          </InputGroup>
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Stack direction="horizontal" className="mt-1 justify-content-between align-items-center">
          <Form.Group controlId="customCheckc1">
            <Form.Check
              type="checkbox"
              label="Remember me?"
              defaultChecked
              className={`input-primary ${className || 'text-muted'} `}
            />
          </Form.Group>
          <a
            href={resetLink ?? '/'}
            className={`text-secondary f-w-400 mb-0  ${className}`}
          >
            Forgot Password?
          </a>
        </Stack>

        <div className="text-center mt-4">
          <Button type="submit" className="shadow px-sm-4">
            Login
          </Button>
        </div>

        <Stack direction="horizontal" className="justify-content-between align-items-end mt-4">
          <h6 className={`f-w-500 mb-0 ${className}`}>Don't have an Account?</h6>
          <a href={link} className="link-primary">
            Create Account
          </a>
        </Stack>
      </Form>
    </MainCard>
  );
}
