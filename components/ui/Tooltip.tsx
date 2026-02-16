import { useAppTheme } from '@/state/themeContext';
import React from 'react';
import { IconButton, Tooltip } from 'react-native-paper';
// toolTip with default info icon, or pass any child through to be the tooltip trigger
export const CustomTooltip = ({
  tooltipText,
  icon,
  size = 16,
  children,
}: {
  tooltipText: string;
  icon?: string;
  size?: number;
  children?: any;
}) => {
  const { theme, setTheme } = useAppTheme();
  const { colors, fontSize } = theme;

  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <Tooltip title={tooltipText} theme={theme} enterTouchDelay={0}>
      {children ? (
        children
      ) : (
        <IconButton
          icon={icon || 'information-outline'}
          selected={showTooltip}
          size={size}
          onPress={() => {
            setShowTooltip(!showTooltip);
          }}
          style={{ maxHeight: 20 }}
        />
      )}
    </Tooltip>
  );
};
