export const fontSize = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

export const colors = {
  // ...DefaultTheme.colors,

  primary: '#ced4ff',
  onPrimary: '#201A56',

  secondary: '#0a192f', // Deep Navy Blue
  onSecondary: '#ced4ff', // Light blue for readability
  secondaryContainer: '#142846', // Darker blue for containers
  onSecondaryContainer: '#e6f0ff', // Light contrast for readability
  secondaryDark: '#030d1b', // Darker deep navy blue
  secondaryLight: '#316985', // Lighter deep navy blue
  secondaryExtraLight: '#e6f0ff',

  tertiary: '#3c3c3c', // Dark Gray
  tertiaryLight: '#b6b6b6',
  tertiaryExtraLight: '#f0f0f0',
  onTertiary: '#dcdcdc', // Light gray for readability
  tertiaryContainer: '#282828', // Slightly darker gray for containers
  onTertiaryContainer: '#f0f0f0', // Light contrast for readability

  error: '#bf3c3c', // Darker error red
  onError: '#1e0000', // Dark contrast for readability
  errorContainer: '#221017', // Dark red for error containers
  onErrorContainer: '#ffc8c8', // Light contrast for readability

  background: '#0a0c14', // Very dark blue-gray
  onBackground: '#e6e6f0', // Light gray for readability
  tertiaryOnBackground: '#aeaeb8', // Light gray for tertiary elements
  secondaryOnBackground: '#6e6ea3', // Light gray for secondary elements

  surface: '#0f141e', // Slightly lighter dark blue-gray
  onSurface: '#dcdce6', // Light gray for readability

  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(49, 48, 51)',
  inverseOnSurface: 'rgb(244, 239, 244)',
  inversePrimary: 'rgb(206, 189, 255)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(22, 23, 29)',
    level2: 'rgb(24, 23, 36)',
    level3: 'rgb(238, 231, 248)',
    level4: 'rgb(237, 229, 247)',
    level5: 'rgb(234, 226, 246)',
  },
  surfaceDisabled: 'rgba(28, 27, 30, 0.12)',
  onSurfaceDisabled: 'rgba(28, 27, 30, 0.38)',
  backdrop: 'rgba(50, 47, 56, 0.4)',
};
