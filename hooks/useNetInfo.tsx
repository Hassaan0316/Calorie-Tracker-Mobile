import React, { useCallback, useState } from 'react'
import NetInfo, { addEventListener } from "@react-native-community/netinfo";
import { useFocusEffect } from '@react-navigation/native';
import { useAppDispatch } from '@store/store';
import { setNetworkModalVisibility } from '@store/Slices/otherStatesSlice';

const useNetInfo = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [subscribedConnection, setSubscribedConnection] = useState<boolean | null>(null);
  const dispatch = useAppDispatch()

  useFocusEffect(
    useCallback(() => {
      checkInternet()
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = addEventListener(state => {
        setSubscribedConnection(state.isConnected)
      });

      return () => {
        unsubscribe()
      }
    }, []),
  );

  const checkInternet = async () => {
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected)
      if (typeof state.isConnected === 'boolean') {
        if (!state.isConnected) dispatch(setNetworkModalVisibility(true))
        else dispatch(setNetworkModalVisibility(false))
      }
    });
  }

  return { isConnected, checkInternet, subscribedConnection };
}

export default useNetInfo