import React from 'react';
import { NextPage } from 'next';
import Login from './auth/login';

export const index: NextPage = () => {
  return <Login />;
};

export default index;
