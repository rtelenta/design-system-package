import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const buttonBasic = (args) => <Button {...args} />
buttonBasic.args = { children: '' }
