import { useEffect, useState } from 'react';
import { UserInterface } from '../interfaces/Interfaces';
// import api from '../services/AxiosAPI';
import { useData } from './useData';

/**
 * This Hook is retrieving Data from API in shape of UserInterface
 * and this data is being submitting to useData hook and using useData (returned data)
 * hook after it is stored with redux 
 * @returns 
 */

export const useUsersAPI = () => {

  // Sending Data to useData Hook
  const { updatingAddValuesFunction } = useData();
 
  const [isLoading, setIsLoading] = useState(true);

  const getSportLanding = async () => {

    // This "resp" is where data from API is received
    // const resp = await api.get<UserInterface[]>('/firebaseUsers');

    
    /**
     * Now and once data is ready, this function is sending all 
     * data to useData hook
     */
    //  updatingAddValuesFunction(resp.data)

    //  console.log( " **************DATA FROM FIREBASE**************"+ resp.data)

    setIsLoading(false);
  };

  useEffect(() => {
    getSportLanding();
  }, []);

  return {
    isLoading,
  };
};
