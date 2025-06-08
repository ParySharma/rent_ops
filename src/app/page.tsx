'use client';

// Libraries
import { useLayoutEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// Utils
import { getAccessToken } from '@/units/localStorage';
import { decodeJWT } from '@/units/jwt';
import { NULL } from '@/units/constants';

const LandingPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const accessToken = getAccessToken();
  // const first_login_by = localStorage.getItem('first_login_by');

  useLayoutEffect(() => {
    if (!pathname.startsWith('/')) return;
    if (!accessToken) {
      router.push('/login');
      return;
    }

    const userDetails = decodeJWT(accessToken);
    // if (first_login_by === '1') {
    //   return router.push('/reset-password');
    // }

    router.push('/dashboard');
  }, [pathname, accessToken, router]);

  return NULL;
};

export default LandingPage;
