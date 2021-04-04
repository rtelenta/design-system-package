import tw, { styled } from 'twin.macro'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config'
import { IButton } from './ButtonInterface'

const fullConfig = resolveConfig(tailwindConfig)

const primaryColor = fullConfig.theme.colors.primary.DEFAULT

const primaryColorDark = fullConfig.theme.colors.primary.dark

const generatedColorText = (color: 'primary' | 'secondary') => {
  switch (color) {
    case 'primary':
      return tw`text-primary`
    case 'secondary':
      return tw`text-secondary`
    default:
      return tw``
  }
}

const generatedBorder = (color: 'primary' | 'secondary') => {
  switch (color) {
    case 'primary':
      return tw`border-primary`
    case 'secondary':
      return tw`border-secondary`
    default:
      return tw``
  }
}

const generateColorBase = (color: 'primary' | 'secondary') => {
  switch (color) {
    case 'primary':
      return tw`bg-primary border-primary`
    case 'secondary':
      return tw`bg-secondary border-secondary`
    default:
      return tw``
  }
}

const generateGlow = (color: 'primary' | 'secondary') => {
  switch (color) {
    case 'primary':
      return `background-image: linear-gradient(${primaryColor} 0%,
        ${primaryColor} 50%,
        ${primaryColorDark} 50%,
        ${primaryColorDark} 100%
      );`
    case 'secondary':
      return `background-image: linear-gradient(
        var(--cc-button-color-base) 0%,
        var(--cc-button-color-base) 50%,
        var(--cc-button-color-dark) 50%,
        var(--cc-button-color-dark) 100%
      );`
    default:
      return tw``
  }
}

const generateHeight = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return 'height:3.2rem;line-height: 1.6rem; font-size: 1.2rem; font-weight: 900;'
    case 'md':
      return `height:4rem;`
    case 'lg':
      return 'height:4.8rem;'
    default:
      return tw``
  }
}

const generateWidth = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return 'width:3.2rem;'
    case 'md':
      return 'width:4rem;'
    default:
      return tw``
  }
}

const StyledButtonBase = styled.button`
  line-height: 24rem;
  border: 1px solid transparent;
  line-height: 2.4rem;
  box-sizing: border-box;
  font-family: inherit;
  cursor: pointer;
  text-decoration: none;
  color: white;
  ${tw`px-lg py-xsm flex items-center justify-center text-body font-bold rounded-sm outline-none w-full leading-8 cursor-pointer border-transparent`}
  &:disabled {
    ${tw`text-disabled cursor-not-allowed`};
  }
`

export const StyledWrapperButton = styled.div(({ expand }: IButton) => [
  expand && tw`block`,
  !expand && tw`inline-block`,
])

export const StyledButton = styled(
  StyledButtonBase
)(({ color, fill, glow, iconReverse, size, iconOnly, disabled }: IButton) => [
  fill === 'solid' &&
    !disabled &&
    generateColorBase(color as 'primary' | 'secondary'),
  fill === 'solid' && disabled && tw`bg-disabled`,
  fill !== 'solid' &&
    !disabled &&
    generatedColorText(color as 'primary' | 'secondary'),
  fill !== 'solid' && disabled && tw`text-disabled`,
  fill === 'outline' &&
    !disabled &&
    generatedBorder(color as 'primary' | 'secondary'),
  fill === 'outline' && disabled && tw`border-disabled`,
  glow && generateGlow(color as 'primary' | 'secondary'),
  iconReverse && tw`flex-row-reverse`,
  iconOnly && generateWidth(size as 'sm' | 'md' | 'lg'),
  `${generateHeight(size as 'sm' | 'md' | 'lg')}`,
])

export const StyledWrapperIcon = styled.div(
  ({ iconOnly, iconReverse }: IButton) => [
    !iconOnly && !iconReverse && tw`mr-xsm`,
    !iconOnly && iconReverse && tw`ml-xsm`,
  ]
)

export const StyledTextButton = styled.div(({ iconOnly }: IButton) => [
  iconOnly && tw`hidden`,
])
