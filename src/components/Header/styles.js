import { StyleSheet, Platform } from 'react-native';
import { colors, metrics } from '~/styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.basePadding,
    ...Platform.select({
      ios: {
        height: 54 + getStatusBarHeight(),
        paddingTop: getStatusBarHeight(),
      },
      android: {
        height: 54,
      },
    }),
  },

  icon: {
    color: colors.darker,
  },

  title: {
    color: colors.darker,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
