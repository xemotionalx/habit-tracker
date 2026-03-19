import { colors } from '@/constants/colors';
import { type ReactNode } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';

export type ScreenContainerProps = ViewProps & {
  children: ReactNode;
};

export function ScreenContainer({ style, children, ...rest }: ScreenContainerProps) {
  return (
    <View style={[styles.root, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.petalBlue,
  },
});
