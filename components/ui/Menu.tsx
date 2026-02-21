import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { IconButton, Menu } from 'react-native-paper';

import { colors } from '@/utils/constants/theme';

export interface Props {
  children: any;
  onPress?: any;
  href: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  type?: 'primary' | 'secondary' | 'minimal';
  colorSaturation?: 'light' | 'normal' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const CustomMenuItem = ({
  title,
  onPress,
  leadingIcon,
  trailingIcon,
  closeMenu,
  showNegativeBar,
}: {
  title: string;
  onPress?: any;
  leadingIcon?: string;
  trailingIcon?: string;
  closeMenu?: any;
  showNegativeBar?: boolean;
}) => {
  const styles = StyleSheet.create({
    negativeIcon: {
      width: 2,
      height: 30,
      backgroundColor: colors.primary,
      position: 'absolute',
      top: 7,
      left: 23,
      transform: 'rotate(-45deg)',
    },
    circle: {
      width: 30,
      height: 30,
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 15,
    },
  });
  const pressMenuItem = () => {
    onPress();
    // closeMenu();

    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <View style={{ position: 'relative' }}>
      {/* {showNegativeBar && <View style={styles.negativeIcon}><View style={{position: 'relative', backgroundColor: 'red'}}><View style={styles.circle}></View></View></View>} */}

      <Menu.Item
        onPress={pressMenuItem}
        title={title}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
      ></Menu.Item>
    </View>
  );
};

// controlled means that the visible prop is controlled by the parent component
// by default, the menu will control it's own visibility state
export const CustomMenu = ({
  visible: controlledVisible,
  onClose: controlledClose,
  iconColor,
  icon,
  anchor,
  anchorPosition = 'bottom',
  children,
  style,
}: {
  visible?: boolean;
  onClose?: () => void;
  iconColor?: string;
  icon?: string;
  anchor?: React.ReactElement;
  anchorPosition?: 'top' | 'bottom';
  children: React.ReactNode;
  style?: any;
}) => {
  const [internalVisible, setInternalVisible] = React.useState(false);
  const isControlled = controlledVisible !== undefined;
  const visible = isControlled ? controlledVisible : internalVisible;
  const openMenu = () => {
    if (!isControlled) setInternalVisible(true);
  };

  const closeMenu = () => {
    if (controlledClose) controlledClose();
    else setInternalVisible(false);
  };

  const Anchor = () =>
    anchor ? (
      <Pressable onPress={openMenu}>{anchor}</Pressable>
    ) : (
      <IconButton
        style={{ padding: 10 }}
        onPress={openMenu}
        icon={icon ?? 'dots-vertical'}
        iconColor={iconColor}
      />
    );

  return (
    <View>
      <Menu
        style={style || {}}
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Anchor />}
        anchorPosition={anchorPosition}
      >
        {React.Children.map(children, (child: any) =>
          child ? React.cloneElement(child, { closeMenu }) : null,
        )}
      </Menu>
    </View>
  );
};
