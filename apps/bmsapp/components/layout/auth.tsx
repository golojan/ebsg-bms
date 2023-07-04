import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from 'services/use-user';

type AuthLayoutProps = {
  children?: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { isReady, push } = useRouter();
  const { user, hasUser, busy } = useUser();

  useEffect(() => {
    if (busy || !isReady) return;
    if (hasUser && !user?.hasOtp) {
      push('/dashboard');
    }
  }, [isReady, busy, hasUser]);

  return <>{children}</>;
};

export default AuthLayout;
