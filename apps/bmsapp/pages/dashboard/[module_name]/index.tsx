import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Layout from 'components/layout';
import { NextPage } from 'next';
import useModule from 'services/use-module';
/* eslint-disable-next-line */
export type dashboardProps = {};

import DasboardIndex from 'components/modules/dashboard';
import MdaIndex from 'components/modules/mdas';
import AccountIndex from 'components/modules/accounts';
import RoleIndex from 'components/modules/roles';
import DocumentIndex from 'components/modules/documents';
import TemplateIndex from 'components/modules/templates';
import FileIndex from 'components/modules/files';
import BudgetIndex from 'components/modules/budgets';
import ReportIndex from 'components/modules/reports';

export const ModuleDashboard: NextPage<dashboardProps> = (props) => {
  const { hasModule, appmodule } = useModule();
  return (
    <Layout>
      {!hasModule && <DasboardIndex />}
      {hasModule && appmodule.name === 'mdas' && <MdaIndex />}
      {hasModule && appmodule.name === 'accounts' && <AccountIndex />}
      {hasModule && appmodule.name === 'roles' && <RoleIndex />}
      {hasModule && appmodule.name === 'documents' && <DocumentIndex />}
      {hasModule && appmodule.name === 'templates' && <TemplateIndex />}
      {hasModule && appmodule.name === 'files' && <FileIndex />}
      {hasModule && appmodule.name === 'budgets' && <BudgetIndex />}
      {hasModule && appmodule.name === 'reports' && <ReportIndex />}
    </Layout>
  );
};

export default ModuleDashboard;
