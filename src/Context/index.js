import React from 'react';
import {AccountContextProvider} from './AccountContext';
import {DashboardContextProvider} from './DashboardContext';
import {AuthContextProvider} from './AuthContext';

export function Context({children}) {
  return (
    <>
      {/* User Account Context Provider */}
      <AuthContextProvider>
        <AccountContextProvider>
          <DashboardContextProvider>{children}</DashboardContextProvider>
        </AccountContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default Context;
