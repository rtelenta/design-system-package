import { useState } from 'react;'

const useMyComponent = () => {
  const [number, setNumber] = useState(1)

  return {
    number,
  }
}

export default useMyComponent
