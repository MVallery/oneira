import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type MetricViewT = 'behavior' | 'academic' | 'lastUsed';
export type PointViewT = 'total' | 'pos' | 'neg';
export type BehaviorTimeRangeT = 'day' | 'week' | '2weeks' | 'all';
export type SortStudentType =
  | 'firstName'
  | 'lastName'
  | 'metricAsc'
  | 'metricDesc';
interface AccountState {
  tempSettings: {
    // temporary settings for the app
    showMetrics: boolean;
    seatingChartView: boolean;
    metricView: MetricViewT;
    sortStudentList: SortStudentType;
    sortStudentMetrics?: 'metricAsc' | 'metricDesc';
  };
  // stored in the database
  settings: {
    nameStyle: 'full' | 'lastInitial';
    listColumns?: boolean;
    defaultView: 'list' | 'chart';
    defaultMetricView?: MetricViewT;
    defaultSortStudent: 'lastName' | 'firstName';
    behavior: {
      pointsView: PointViewT;
      timeRange: BehaviorTimeRangeT;
    };
  };
  // activeClassesAnd
}

export const initialAccountState: AccountState = {
  tempSettings: {
    showMetrics: false,
    // should change seatingChartView to match with defaultView like to matches with defaultMetricView
    seatingChartView: true,
    metricView: 'academic',
    sortStudentList: 'lastName',
    sortStudentMetrics: 'metricDesc',
  },
  settings: {
    behavior: {
      pointsView: 'total',
      timeRange: 'all',
    },
    listColumns: false,
    nameStyle: 'lastInitial',
    defaultSortStudent: 'lastName',
    defaultView: 'chart',
    defaultMetricView: 'lastUsed',
  },
};

const accountSlice = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {
    setSettings(state, action: PayloadAction<any>) {
      state.settings = action.payload;
    },
    setAllTempSettings(state, action: PayloadAction<any>) {
      state.tempSettings = action.payload;
    },
    setTempSettings<K extends keyof AccountState['tempSettings']>(
      state: any,
      action: PayloadAction<{ key: K; value: AccountState['tempSettings'][K] }>,
    ) {
      const {
        key,
        value,
      }: { key: keyof AccountState['tempSettings']; value: any } =
        action.payload;
      state.tempSettings[key] = value ?? !state.tempSettings[key];
    },
  },
});

export const { setSettings, setAllTempSettings, setTempSettings } =
  accountSlice.actions;
export default accountSlice.reducer;
