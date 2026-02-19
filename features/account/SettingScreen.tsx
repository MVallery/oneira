import CustomButton from '@/components/ui/Button';
import CustomText from '@/components/ui/Text';
import { useFormHandler } from '@/hooks/form/useFormHandler';
import { RootState } from '@/state/store';
import { useAppTheme } from '@/state/themeContext';
import { clone } from '@/utils/helpers/general';
import { Link, router } from 'expo-router';
import { useController } from 'react-hook-form';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CustomSelect } from '@/components/form/Select';
import Title from '@/components/ui/Title';
import { isWeb } from '@/utils/constants/platform';
import { baseStyles } from '@/utils/styles/baseStyles';
import { useLogout } from '../account/hooks/useLogout';
import { useUpdateSettings } from '../account/hooks/useUpdateSettings';

type Settings = {
  // default views get set upon intial load of the app, but user can then use seatingChartView & sortStudentList to change it.
  defaultView: 'chart' | 'list';
  defaultMetricView: 'behavior' | 'academic' | 'lastUsed';
  defaultSortStudent: 'lastName' | 'firstName';
  nameStyle: 'full' | 'lastInitial';
  showMetrics: boolean;
  seatingChartView: boolean;
  sortStudentList: 'firstName' | 'lastName' | 'metricAsc' | 'metricDesc';
};
type SettingsKey = keyof Settings;

const SettingScreen = () => {
  const { theme } = useAppTheme();
  const settings = useSelector((state: RootState) => state.account.settings);
  const dispatch = useDispatch();
  const { updateSettings, isLoading } = useUpdateSettings();
  const user = useSelector((state: RootState) => state.auth.user);
  const onSubmit = async (data: any) => {
    const clonedSettings = clone({ ...settings, ...data });

    // dispatch(setSettings(tempSettings));
    await updateSettings(clonedSettings);

    router.replace(`/dream-list`);
  };
  const { error, logout } = useLogout();

  const { control, handleSubmit } = useFormHandler(onSubmit);
  const { field: nameStyleField } = useController({
    control,
    defaultValue: settings.nameStyle || '',
    name: 'nameStyle',
  });
  const { field: viewField } = useController({
    control,
    defaultValue: settings.defaultView || '',
    name: 'defaultView',
  });
  const { field: sortField } = useController({
    control,
    defaultValue: settings.defaultSortStudent || '',
    name: 'defaultSortStudent',
  });
  const { field: metricViewField } = useController({
    control,
    defaultValue: settings.defaultMetricView || '',
    name: 'defaultMetricView',
  });

  const nameStyleOptions = [
    { label: 'Full Name', value: 'full' },
    { label: 'Last Initial', value: 'lastInitial' },
  ];
  const viewOptions = [
    { label: 'Seating Chart View', value: 'chart' },
    { label: 'List View', value: 'list' },
  ];
  const sortOptions = [
    { label: 'First Name', value: 'firstName' },
    { label: 'Last Name', value: 'lastName' },
  ];
  const metricViewOptions = [
    { label: 'Behavior', value: 'behavior' },
    { label: 'Academic', value: 'academic' },
    { label: 'Last Used', value: 'lastUsed' },
  ];
  return (
    <View
      style={[
        baseStyles.container,
        { padding: 20 },
        isWeb ? baseStyles.wrapper : {},
      ]}
    >
      <Title element='h2' size='sm'>
        Settings
      </Title>
      <View style={{ width: 240 }}>
        <CustomSelect
          control={control}
          field={nameStyleField}
          name='subject'
          options={nameStyleOptions}
          label='Student Name Display:'
        />
      </View>
      <View style={{ width: 240 }}>
        <CustomSelect
          control={control}
          field={viewField}
          name='defaultView'
          options={viewOptions}
          label='Default Class View:'
        />
      </View>
      <View style={{ width: 240 }}>
        <CustomSelect
          control={control}
          field={metricViewField}
          name='defaultMetricView'
          options={metricViewOptions}
          label='Default Metric View:'
        />
      </View>
      <View style={{ width: 240 }}>
        <CustomSelect
          control={control}
          field={sortField}
          name='defaultSortStudent'
          options={sortOptions}
          label='Default Sort Students By:'
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          paddingTop: 50,
        }}
      >
        <View style={{ paddingTop: 15 }}>
          <Link
            href={`/`}
            style={{ color: theme.colors.onBackground }}
            replace={true}
          >
            <CustomText style={{ fontSize: 18 }}>Cancel</CustomText>
          </Link>
        </View>
        <CustomButton
          onPress={handleSubmit}
          icon='content-save'
          loading={isLoading}
        >
          Save
        </CustomButton>
      </View>
      <View style={{ position: 'absolute', bottom: 20, right: 20 }}>
        <CustomText>{user?.email}</CustomText>
        <CustomButton
          onPress={logout}
          icon='logout'
          type='danger'
          colorSaturation='transparent'
        >
          Sign Out
        </CustomButton>
      </View>
    </View>
  );
};

export default SettingScreen;
