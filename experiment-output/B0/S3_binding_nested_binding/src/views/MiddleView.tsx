import React, { Dispatch, SetStateAction } from 'react'
import InnerView from './InnerView'

interface MiddleViewProps {
  x: number
  setX: Dispatch<SetStateAction<number>>
}

const MiddleView: React.FC<MiddleViewProps> = ({ x, setX }) => {
  return (
    <InnerView x={x} setX={setX} />
  )
}

export default MiddleView