import { Dimensions, Platform } from 'react-native';
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const HEADER_HEIGHT = 50;
export const CLASS_HEADER_HEIGHT = 60;
export const FOOTER_HEIGHT = 54;
export const GRADIENT_SELECTIONS_HEIGHT = 84;
const isWeb = Platform.OS === 'web';

export const deskWidth = isWeb ? 95 : 100;
export const deskHeight = isWeb ? 65 : 70;
export const deskGap = 5;
export const sectionGap = 20;

export const studentListBoxHeight = 35;

export const SIDEBAR_TOGGLE_SCREEN = SCREEN_WIDTH < 1600;
export const MEDIUM_SCREEN = SCREEN_WIDTH < 1250;
export const SMALL_SCREEN = SCREEN_WIDTH < 1000;
export const EXTRA_SMALL_SCREEN = SCREEN_WIDTH < 800;
export const MOBILE_SCREEN = SCREEN_WIDTH < 600;
export const SMALL_MOBILE_SCREEN = SCREEN_WIDTH < 400;
