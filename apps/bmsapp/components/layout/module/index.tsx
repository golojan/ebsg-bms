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
                {module.name === 'mdas' && <CrudMda />}
                {module.name === 'accounts' && <CrudAccount />}
                {module.name === 'roles' && <CrudRole />}
                {module.name === 'documents' && <CrudDocument />}
                {module.name === 'templates' && <CrudTemplate />}
                {module.name === 'files' && <CrudFile />}
                {module.name === 'budgets' && <CrudBudget />}
                {module.name === 'reports' && <CrudReport />}
                {module.name === 'profile' && <CrudProfile />}
                {module.name === 'settings' && <CrudSetting />}
                {module.name === 'securities' && <CrudSecurity />}
                {module.name === 'conversations' && <CrudConversation />}
                {module.name === 'ai' && <CrudAi />}
              </div>
            </div>
          </nav>
        </>
      ) : null}
    </>
  );
};

export default ModuleNavBar;
