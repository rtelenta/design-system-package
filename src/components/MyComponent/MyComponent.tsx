import * as React from 'react'
import './Mycomp.css'

interface MyComponentProps {
  name: string
}

const MyComponent: React.FC<MyComponentProps> = ({ name }) => (
  <div role="heading" aria-level={1} className="mt-20">
    My First Component: {name}
  </div>
)

export default MyComponent
