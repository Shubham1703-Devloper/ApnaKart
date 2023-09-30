/* eslint-disable no-unused-vars */
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export const AccountContext = createContext({});

export function AccountContextProvider({children}) {
 const [isFindMoreAnalytics, setIsFindMoreAnalytics] = useState(false);



  const contextPayload = useMemo(
    () => ({
      // States
      isFindMoreAnalytics, 
      setIsFindMoreAnalytics
      
      //API calls


      // Form Initial States & Validations


      //functions

    }),
    [
      // States
      isFindMoreAnalytics, 
      setIsFindMoreAnalytics

      //API calls


      // Form Initial States & Validations


      //functions

    ],
  );

  // We expose the context's value down to our components, while
  // also making sure to render the proper content to the screen
  return (
    <AccountContext.Provider value={contextPayload}>
      {children}
    </AccountContext.Provider>
  );
}

// A custom hook to quickly read the context's value. It's
// only here to allow quick imports
export const useAccountContext = () => useContext(AccountContext);

export default AccountContext;
