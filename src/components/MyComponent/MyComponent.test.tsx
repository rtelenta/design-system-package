import * as React from 'react'
import { render } from '@testing-library/react'
import MyComponent from './MyComponent'

test('Renders', async () => {
  const { getByRole } = render(
    <MyComponent name="John" number="12" text="hola" />
  )

  expect(getByRole('heading')).toHaveTextContent('My First Component: John')
})
