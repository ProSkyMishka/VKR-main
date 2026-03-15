import React, { Dispatch, SetStateAction } from 'react'

interface ChildViewProps {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

const ChildView: React.FC<ChildViewProps> = ({ count, setCount }) => {
  return (
    <button onClick={() => setCount(count + 1)}>Child +1</button>
  )
}

export default ChildView