import React from 'react';

const AccessPoliciesTab = () => {
  return (
    <>
      <h3 className="text-2xl font-bold text-bgray-900 dark:text-white mb-3">
        Access Policies
      </h3>
      <article className="mb-10 mt-5">
        <p className="text-[#9AA2B1] text-lg dark:text-white">
          <span className="font-bold">Access Policy</span> - A set of rules that
          define the conditions under which a user is granted access to a
          resource. Access policies are used to control access to resources in
          the system. Here you can create and manage access policies for you
          Agency and your Agency’s users.
        </p>
      </article>
    </>
  );
};

export default AccessPoliciesTab;
