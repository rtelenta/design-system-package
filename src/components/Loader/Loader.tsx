import React from 'react'
import './Loader.css'

export interface ILoader {
  size?: number
  className?: string
}

const Icon: React.FC<ILoader> = ({ size = 24, className = '' }) => {
  return (
    <div data-testid="cc-loader" className={`loader ${className}`}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        className="loader__svg"
      >
        <circle className="loader__circle" cx="50" cy="50" r="45" />
      </svg>
    </div>
  )
}

export default Icon
