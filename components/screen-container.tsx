import { colors } from '@/constants/colors';
import { type ReactNode } from 'react';
import { StyleSheet, type ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type ScreenContainerProps = ViewProps & {
  children: ReactNode;
};

export function ScreenContainer({ style, children, ...rest }: ScreenContainerProps) {
  return (
    <SafeAreaView style={[styles.root, style]} edges={['top', 'right', 'bottom', 'left']} {...rest}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.petalBlue,
  },
});
