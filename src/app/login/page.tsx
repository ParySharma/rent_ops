'use client';

import CustomInput from '@/component/Input';
import { Box, Typography, styled } from '@mui/material';
import { useFormik } from 'formik';
import Image from 'next/image';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import ButtonStyled from '@/component/Button';
import * as Yup from 'yup';
import { useErrorToast } from '@/units/serverError';
import { useRouter } from 'next/navigation';

const GlassedBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(15px)',
  borderRadius: '10px',
  padding: '20px',
  width: '100%',
  maxWidth: '800px',
  height: 'auto',
  minHeight: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
    minHeight: '350px',
  },
}));

const validationSchema = Yup.object().shape({
  email: Yup.string().trim().required('Email/Username is required.'),
  password: Yup.string().trim().required('Password is required.'),
});

const LoginPage = () => {
  const errorToast = useErrorToast('error');
  const successToast = useErrorToast('success');
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      // remember_me: 0,
    },
    validationSchema,
    onSubmit: (values) => {
      try {
        successToast('Login successful!');

        // Simulate a login request
        console.log('Login values:', values);
        return router.push('/dashboard'); // Redirect to dashboard or home page
        // If login is successful
      } catch (error) {
        // Handle error
        console.error('Login error:', error);
        errorToast('Login failed. Please try again.');
      }
      // Handle form submission logic here
    },
  });

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '80vh', sm: '90vh', md: '100vh' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        px: 2,
        position: 'relative',
        backgroundImage: 'url(/images/login-bg.jpg)',
      }}
    >
      <GlassedBox>
        {/* Replace this with your login form */}
        <Box
          component={'form'}
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '70%',
          }}
        >
          <Image
            src={'/images/logo.jpg'}
            alt='ssss'
            height={120}
            width={120}
            unoptimized
            style={{
              borderRadius: '50%',
            }}
          />
          <Typography variant='h5' fontWeight={500} sx={{ mt: 2, mb: 2 }}>
            Welcome to Our Platform
          </Typography>
          <CustomInput
            formik={formik}
            icon={<PersonIcon />}
            type='text'
            name='email'
            label='Username'
            mb={'14'}
            backgroundColor='#2B2B2B'
            borderColor='transparent'
            textColor='#ffffff'
            required
            color='#fff'
            width='100%'
            radius={'24px'}
            ErrorColor='#ff0000'
            fontSize={'20px'}
          />
          <CustomInput
            formik={formik}
            icon={<PasswordIcon />}
            type='password'
            name='password'
            label='Password'
            mb={'14'}
            backgroundColor='#2B2B2B'
            borderColor='transparent'
            textColor='#ffffff'
            required
            color='#fff'
            radius={'24px'}
            width='100%'
            fontSize={'20px'}
            ErrorColor='#ff0000'
            isPassword={true}
          />
          <ButtonStyled
            type='submit'
            variant='contained'
            backgroundColor='#00E0EC'
            color='#000000'
            onClick={formik.handleSubmit}
            text={'Login'}
            width={'100%'}
            borderRadius={'24px'}
            height={'50px'}
            fontSize={'20px'}
          />
        </Box>
      </GlassedBox>
    </Box>
  );
};

export default LoginPage;
