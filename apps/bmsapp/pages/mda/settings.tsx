import React from 'react';
import { NextPage } from 'next';
import Layout from 'components/layout/v2/layout';
import ProfileSettings from 'components/mda/settings';

export const Settings: NextPage = (props) => {
  return (
    <Layout>
      <ProfileSettings />
    </Layout>
  );
};

export default Settings;
