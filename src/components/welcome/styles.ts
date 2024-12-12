import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
  logo: {
    height: 48,
    width: 48,
    marginTop: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600],
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[600],
    marginTop: 12,
  }
})
