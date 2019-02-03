import { COLORS } from '../../constants'

export const getHandleStyle = (color?: string) => ({
  backgroundColor: COLORS.dark,
  borderColor: color || COLORS.highlighted
})

export const getTrackStyle = (color?: string) => ({
  backgroundColor: color || COLORS.highlighted
})
