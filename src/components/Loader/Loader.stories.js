import Loader from './Loader'

export default {
  title: 'Loader',
  component: Loader,
}

// eslint-disable-next-line react/react-in-jsx-scope
export const Basic = (args) => <Loader {...args} />
Basic.args = { size: 50 }
