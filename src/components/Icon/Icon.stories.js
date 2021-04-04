// Button.stories.js

import React from 'react'

import Icon from './Icon'

//👇 Some function to demonstrate the behavior
const someFunction = (someValue) => {
  return `${someValue}`
}

export default {
  title: 'Icon',
  component: Icon,
}

export const ExampleStory = (args) => {
  //👇 Destructure the label from the args object
  const { name } = args

  //👇 Assigns the function result to a variable and pass it as a prop into the component
  const functionResult = someFunction(name)
  return <Icon {...args} name={functionResult} />
}

ExampleStory.args = {
  size: 24,
  name: 'plus',
}
