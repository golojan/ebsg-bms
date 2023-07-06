import React from 'react';
import Link from 'next/link';

const CrudMda = () => {
  return (
    <ul>
      <li>
        <Link href="#">
          <span className="link hide">List All MDAs</span>
        </Link>
      </li>
      <li>
        <Link href="#">
          <span className="link hide">Create New MDA</span>
        </Link>
      </li>
      <li>
        <Link href="#">
          <span className="link hide">MDA Reports</span>
        </Link>
      </li>
    </ul>
  );
};

const CrudAccount = () => {
  return (
    <ul>
      <li>
        <Link href="#">
          <span className="link hide">List All Users</span>
        </Link>
      </li>
    </ul>
  );
};

const CrudRole = () => {
  return <></>;
};

const CrudDocument = () => {
  return <></>;
};

const CrudTemplate = () => {
  return <></>;
};

const CrudFile = () => {
  return <></>;
};

const CrudBudget = () => {
  return <></>;
};

const CrudReport = () => {
  return <></>;
};

const CrudProfile = () => {
  return <></>;
};

const CrudSetting = () => {
  return <></>;
};

const CrudSecurity = () => {
  return <></>;
};

const CrudConversation = () => {
  return <></>;
};

const CrudAi = () => {
  return <></>;
};

export {
  CrudMda,
  CrudAccount,
  CrudRole,
  CrudDocument,
  CrudTemplate,
  CrudFile,
  CrudBudget,
  CrudReport,
  CrudProfile,
  CrudSetting,
  CrudSecurity,
  CrudConversation,
  CrudAi,
};
