import { StyleSheet } from "react-native"
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  title: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500]
  }
})
