import * as React from 'react'
import './Mycomp.css'

interface MyComponentProps {
  name: string;
  number:string;
}

const MyComponent: React.FC<MyComponentProps> = ({ name,number }) => (
  <div role="heading" aria-level={1} className="mt-20">
    My First Component: {name} {number}
  </div>
)

export default MyComponent
