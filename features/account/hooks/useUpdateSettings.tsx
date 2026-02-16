import { useDispatch } from 'react-redux';
import { setSettings, setTempSettings } from '../state/accountSlice';
import { useUpdateSettingsMutation } from '../state/authApi';

export const useUpdateSettings = () => {
  const [updateSettings, { isLoading }] = useUpdateSettingsMutation();
  const dispatch = useDispatch();

  /**
   *  These settings are stored in tempSettings in redux and not saved to database, we load them up in useSettings with defaults from teacher.settings
   * @param key tempSettings key to update
   * @param value value to set, if not provided will toggle boolean
   */
  const updateTempSettings = (
    key:
      | 'sortStudentList'
      | 'sortStudentMetrics'
      | 'showMetrics'
      | 'seatingChartView'
      | 'metricView',
    value?: any,
  ) => {
    dispatch(setTempSettings({ key, value }));
  };

  const onUpdateSettings = async (newSettings: any) => {
    try {
      const updatedSettings = await updateSettings({
        id: newSettings.id,
        settings: { ...newSettings },
      }).unwrap();
      dispatch(setSettings(updatedSettings));

      return updatedSettings;
    } catch (error) {
      throw error;
    }
  };

  return { updateSettings: onUpdateSettings, updateTempSettings, isLoading };
};
