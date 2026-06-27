import { ProgressBar } from '@/components/progress-bar';
import { ScreenContainer } from '@/components/screen-container';
import { colors } from '@/constants/colors';
import { fonts } from '@/constants/typography';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <ScreenContainer style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>My Weekly Habits</Text>
      </View>
      <View style={styles.content}>
        <ProgressBar max={100} current={30} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 16,
  },
  header: {
    paddingTop: 12,
    paddingBottom: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.highlight,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.regular,
    color: colors.white,
    fontSize: 22,
  },
});
