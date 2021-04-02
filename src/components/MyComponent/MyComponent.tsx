import * as React from 'react'
import './Mycomp.css'

interface MyComponentProps {
  name: string
  number: string
  text: string
}

const MyComponent: React.FC<MyComponentProps> = ({ name, number, text }) => (
  <div role="heading" aria-level={1} className="mt-20">
    My First Component: {name} {number} {text}
  </div>
)

export default MyComponent
