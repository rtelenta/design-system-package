import MyComponent from './MyComponent'

export default {
  title: 'My Component',
  component: MyComponent,
}

export const Basic = (args) => <MyComponent {...args} />
Basic.args = { name: 'hello', gaea: false, list: ['asd', 'asds'] }
