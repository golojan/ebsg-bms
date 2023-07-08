import React from 'react';
import AuthLayout from 'components/layout/auth';

function Setup() {
  const processInstall = (e: any) => {
    e.preventDefault();
    alert('Installing MDA from JSON');
  };
  return (
    <AuthLayout>
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen">
        <h1 className="tw-text-3xl tw-font-bold tw-mb-4">Setup</h1>
        <p className="tw-text-xl tw-text-center">
          This is the setup page for adding static uploads to the database.
        </p>
        <button className="btn btn-primary" onClick={processInstall}>
          Install MDA From JSON
        </button>
      </div>
    </AuthLayout>
  );
}

export default Setup;
