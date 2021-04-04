import React from 'react'
import iconPaths from './selection.json'

export interface IIcon {
  name: string
  size?: number
  className?: string
}

const Icon: React.FC<IIcon> = ({ name, size = 24, className = '' }) => {
  const getPath = (iconName: string) => {
    const icon = iconPaths.icons.find(
      ({ properties }) => properties.name === iconName
    )

    if (icon) {
      return icon.icon.paths.join(' ')
    } else {
      return ''
    }
  }
  if (name === '') {
    return <div></div>
  }

  return (
    <div className={`${className}`}>
      <svg
        className={`cc-icon`}
        width={size}
        height={size}
        viewBox={'0 0 1024 1024'}
      >
        <path d={getPath(name)} style={{ fill: 'currentColor' }} />
      </svg>
    </div>
  )
}

export default Icon
