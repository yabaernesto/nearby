import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 14
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600],
  },
  description: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[400],
    marginTop: 10
  }
})
