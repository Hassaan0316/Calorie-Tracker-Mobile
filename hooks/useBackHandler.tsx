import { useCallback } from 'react'
import { BackHandler } from 'react-native'
import { useFocusEffect } from 'expo-router';
import { useAppDispatch } from 'redux/store';
import { PayloadAction } from '@reduxjs/toolkit';

type SetStepsAction = (payload: number) => PayloadAction<number>;

interface IProps {
  stepsCount: number;
  setStepsAction: SetStepsAction
}

const useBackHandler = ({stepsCount, setStepsAction }: IProps) => {
  const dispatch = useAppDispatch();

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (stepsCount > 1) {
          dispatch(setStepsAction(stepsCount - 1));
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        // BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [stepsCount, dispatch, setStepsAction])
  );
};

export default useBackHandler;