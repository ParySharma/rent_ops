'use client';

// Libraries
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
import { Title } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { BUTTON_TYPE, BUTTON_VARIANT_TYPE } from '@/units/constants';
import { useAuth } from '@/context/AuthProvider';
import ButtonStyled from '@/component/Button';
// import useAuth from '@/contexts/useAuth';

// Utils
// import { Title, AddTitle, Typography } from '@/styles/common';
// import Button from '@/components/Button';
// import {
//   BUTTON_TYPE,
//   BUTTON_VARIANT_TYPE,
//   USER_ROLES,
// } from '@/utils/constants';

const not_found = `/images/not_found.gif`;

const Wrapper = styled(Box)`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  background-color: #f5f6fa;
  color: #000;

  .four_zero_four_bg {
    background-image: url(${not_found});
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #f5f6fa;
    mix-blend-mode: darken;
  }
`;

const NotFound = () => {
  const router = useRouter();
  const {} = useAuth();

  return (
    <Wrapper className='page_404'>
      <Box className='container'>
        <Box className='row'>
          <Box className='col-sm-12 '>
            <Box className='col-sm-10 col-sm-offset-1  text-center'>
              <Box className='four_zero_four_bg'>
                <Typography fontSize={18} mb={4}>
                  404
                </Typography>
              </Box>
              <Box className='contant_box_404'>
                <Typography
                  fontSize={24}
                  mb={1.5}
                  textTransform='none'
                  color='#000'
                >
                  Oops! You seem to be lost.
                </Typography>
                <Typography
                  fontSize={18}
                  mb={1.5}
                  lineHeight={26}
                  // position='center'
                  color='#000'
                  textAlign={'center'}
                >
                  {`Sorry, the page you're looking for doesn't exist.`}
                </Typography>
                <ButtonStyled
                  type={BUTTON_TYPE.SUBMIT}
                  variant={BUTTON_VARIANT_TYPE.CONTAINED}
                  text='Go Back To Dashboard'
                  backgroundColor='var(--primary-button-background-color)'
                  borderColor='var(--primary-button-background-color)'
                  color='var(--primary-button-text-color)'
                  onClick={() => router.push('/dashboard')}
                  width={196}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default NotFound;
