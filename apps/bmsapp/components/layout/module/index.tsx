import style from './navbar.module.scss';
import React from 'react';
import { crudAtom } from 'store';
import { useAtom } from 'jotai';
import {
  CrudAccount,
  CrudAi,
  CrudBudget,
  CrudConversation,
  CrudDocument,
  CrudFile,
  CrudMda,
  CrudProfile,
  CrudReport,
  CrudRole,
  CrudSecurity,
  CrudSetting,
  CrudTemplate,
} from './cruds';

export const ModuleNavBar = () => {
  const [{ module }] = useAtom(crudAtom);
  return (
    <>
      {module ? (
        <>
          <nav className={style.nav}>
            <div className={style.nav_box}>
              <div className={style.sidebartop}></div>
              <div className={style.sidebarlinks}>
                {module === 'mdas' && <CrudMda />}
                {module === 'accounts' && <CrudAccount />}
                {module === 'roles' && <CrudRole />}
                {module === 'documents' && <CrudDocument />}
                {module === 'templates' && <CrudTemplate />}
                {module === 'files' && <CrudFile />}
                {module === 'budgets' && <CrudBudget />}
                {module === 'reports' && <CrudReport />}
                {module === 'profile' && <CrudProfile />}
                {module === 'settings' && <CrudSetting />}
                {module === 'securities' && <CrudSecurity />}
                {module === 'conversations' && <CrudConversation />}
                {module === 'ai' && <CrudAi />}
              </div>
            </div>
          </nav>
        </>
      ) : null}
    </>
  );
};

export default ModuleNavBar;
