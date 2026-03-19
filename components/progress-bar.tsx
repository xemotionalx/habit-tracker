import { colors } from '@/constants/colors';
import { fonts } from '@/constants/typography';
import { useMemo } from 'react';
import { StyleSheet, Text, View, type ViewProps } from 'react-native';

export type ProgressBarProps = ViewProps & {
  max: number;
  current: number;
};

export function ProgressBar({ max, current, style, ...rest }: ProgressBarProps) {
  const ratio = useMemo(() => {
    if (max <= 0) return 0;
    return Math.min(1, Math.max(0, current / max));
  }, [max, current]);

  const clampedCurrent = max > 0 ? Math.min(max, Math.max(0, current)) : 0;

  return (
    <View style={styles.stack}>
      <Text style={styles.label}>
        {current} / {max}
      </Text>
      <View
        style={[styles.track, style]}
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max: Math.max(0, max), now: clampedCurrent }}
        {...rest}>
        <View style={[styles.fill, { width: `${ratio * 100}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stack: {
    width: '100%',
  },
  label: {
    fontFamily: fonts.medium,
    fontSize: 15,
    color: '#FFFFFF',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  track: {
    height: 10,
    width: '100%',
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: colors.centerYellow,
  },
});
