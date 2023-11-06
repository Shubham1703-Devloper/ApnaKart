import React from 'react';
import {DashboardContextProvider} from './DashboardContext';
import {AuthContextProvider} from './AuthContext';
import { AccountContextProvider } from './AccountContext';

export function Context({children}) {
  return (
    <>
      <AuthContextProvider>
        <DashboardContextProvider>
          <AccountContextProvider>{children}</AccountContextProvider>
        </DashboardContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default Context;
