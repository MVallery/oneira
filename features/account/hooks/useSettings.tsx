import {
  MetricViewT,
  setAllTempSettings,
  setSettings,
} from '@/features/account/state/accountSlice';
import { RootState } from '@/state/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clone } from '@/utils/helpers/general';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSettings = () => {
  const dispatch = useDispatch();
  const tempSettings = useSelector(
    (state: RootState) => state.account.tempSettings,
  );
  const settings = useSelector((state: RootState) => state.account.settings);
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const loadSettings = async () => {
    const clonedSettings = clone(tempSettings);
    const defaultSettings = clone(settings);

    // set up default settings into the temporary settings object
    clonedSettings.seatingChartView = defaultSettings.defaultView !== 'list';
    clonedSettings.sortStudentList = defaultSettings.defaultSortStudent;

    // if default is lastUsed, then grab from local storage, otherwise use the default
    if (
      !defaultSettings.defaultMetricView ||
      defaultSettings.defaultMetricView === 'lastUsed'
    ) {
      const metricView: MetricViewT =
        ((await AsyncStorage.getItem('metricView')) as MetricViewT) ||
        'academic';
      clonedSettings.metricView = metricView;
    } else {
      clonedSettings.metricView = defaultSettings.defaultMetricView;
    }
    dispatch(setAllTempSettings(clonedSettings));
    dispatch(setSettings(defaultSettings));
    setSettingsLoaded(true);
  };
  // get initial teacher settings & initialize to tempSettings
  useEffect(() => {
    if (!settings || settingsLoaded) return;
    loadSettings();

    // AsyncStorage.getItem('tempSettings')
    //   .then((data) => {
    //     if (data) {
    //       const parsedSettings = JSON.parse(data);
    //       // set up default settings
    //       parsedSettings.seatingChartView = parsedSettings.defaultView !== 'list';
    //       parsedSettings.sortStudentList = parsedSettings.defaultSortStudent;
    //       dispatch(setSettings(parsedSettings));
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching settings from AsyncStorage:', error);
    //   });
  }, [settings]);
};
