import React, { Dispatch, SetStateAction } from 'react'

interface InnerViewProps {
  x: number
  setX: Dispatch<SetStateAction<number>>
}

const InnerView: React.FC<InnerViewProps> = ({ x, setX }) => {
  return (
    <button onClick={() => setX(x + 1)}>Inner</button>
  )
}

export default InnerView