import * as React from 'react'
import './Mycomp.css'
import useMyComponent from './useMyComponent'

interface MyComponentProps {
  name: string
  number: string
  text: string
}

const MyComponent: React.FC<MyComponentProps> = ({ name, number, text }) => {
  const { number: NumberState } = useMyComponent()

  if (true === true) {
    //asdsa
  }

  return (
    <div role="heading" aria-level={1} className="mt-20">
      {' '}
      My Firstasjh hjh sds saodmponent Component: {name} {NumberState} {text}{' '}
      {number}
    </div>
  )
}

export default MyComponent
