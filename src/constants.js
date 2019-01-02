//@flow
export const API_URL: string = 'http://www.boredapi.com/api/activity/'

export const ACTIVITY_TYPES: * = {
  EDUCATION: 'education',
  RECREATIONAL: 'recreational',
  SOCIAL: 'social',
  DIY: 'diy',
  CHARITY: 'charity',
  COOKING: 'cooking',
  RELAXATION: 'relaxation',
  MUSIC: 'music',
  BUSYWORK: 'busywork'
}

export const ACTIVITY_ICONS: * = {
  [ACTIVITY_TYPES.EDUCATION]: 'graduation-cap',
  [ACTIVITY_TYPES.RECREATIONAL]: 'hiking',
  [ACTIVITY_TYPES.SOCIAL]: 'users',
  [ACTIVITY_TYPES.DIY]: 'hammer',
  [ACTIVITY_TYPES.CHARITY]: 'gift',
  [ACTIVITY_TYPES.COOKING]: 'glass-cheers',
  [ACTIVITY_TYPES.RELAXATION]: 'bed',
  [ACTIVITY_TYPES.MUSIC]: 'music',
  [ACTIVITY_TYPES.BUSYWORK]: 'briefcase'
}

export const COLORS: * = {
  highlighted: '#FFFFA5',
  dark: '#413C58',
  greenLight: '#56E39F',
  greenDark: '#59C9A5',
  red: '#EF6F6C'
}
