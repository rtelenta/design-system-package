import React from 'react'
import {
  StyledButton,
  StyledWrapperButton,
  StyledTextButton,
  StyledWrapperIcon,
} from './ButtonStyled'
import Icon from '../Icon/Icon'
import { IButton } from './ButtonInterface'
import Loader from '../Loader/Loader'

const Button: React.FC<IButton> = ({
  iconName,
  iconReverse = false,
  iconOnly = false,
  disabled = false,
  fill = 'solid',
  expand = false,
  color = 'primary',
  href,
  target,
  size = 'lg',
  glow = false,
  type = 'button',
  loading = false,
  children,
}) => {
  return (
    <StyledWrapperButton expand={expand}>
      <StyledButton
        as={href && href !== '' ? 'a' : 'button'}
        href={href}
        color={color}
        fill={fill}
        glow={glow}
        type={type}
        iconOnly={iconOnly}
        iconReverse={iconReverse}
        size={size}
        target={target}
        disabled={disabled}
      >
        {iconName && !loading && (
          <StyledWrapperIcon iconOnly={iconOnly} iconReverse={iconReverse}>
            <Icon name={iconName} size={size === 'sm' ? 16 : 24} />
          </StyledWrapperIcon>
        )}
        {loading && (
          <Loader className="button__icon" size={size === 'sm' ? 16 : 24} />
        )}
        <StyledTextButton iconOnly={iconOnly}>{children}</StyledTextButton>
      </StyledButton>
    </StyledWrapperButton>
  )
}

export default Button
