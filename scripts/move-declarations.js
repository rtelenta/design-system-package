const { move } = require('fs-extra')

move('./temp/src/components/', './types/', (err) => {
  if (err) return console.error(err)
  console.log('success!')
})
