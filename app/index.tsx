import { ProgressBar } from '@/components/progress-bar';
import { ScreenContainer } from '@/components/screen-container';
import { colors } from '@/constants/colors';
import { fonts } from '@/constants/typography';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <ScreenContainer style={{ padding: 16 }}>
      <View style={styles.content}>
        <Text style={styles.title}>My Weekly Habits</Text>
        <ProgressBar max={100} current={30} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.regular,
    color: colors.highlight,
    fontSize: 22,
  },
});
