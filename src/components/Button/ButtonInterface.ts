export interface IButtonDev {
  iconName: string
  iconReverse: boolean
  iconOnly: boolean
  disabled: boolean
  fill: 'outline' | 'clear' | 'solid'
  expand: boolean
  color: 'primary' | 'secondary'
  href: string
  target: string
  size: 'lg' | 'md' | 'sm'
  glow: boolean
  type: 'button' | 'submit'
  loading: boolean
}

export interface IButton {
  iconName?: string
  iconReverse?: boolean
  iconOnly?: boolean
  disabled?: boolean
  fill?: 'outline' | 'clear' | 'solid'
  expand?: boolean
  color?: 'primary' | 'secondary'
  href?: string
  target?: string
  size?: 'lg' | 'md' | 'sm'
  glow?: boolean
  type?: 'button' | 'submit'
  loading?: boolean
}
