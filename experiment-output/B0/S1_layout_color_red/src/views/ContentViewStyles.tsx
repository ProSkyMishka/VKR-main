import styled from 'styled-components'

export const ZStack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Color = styled.div<{ color: string, ignoresSafeArea?: boolean }>`
  background-color: ${props => props.color};
  width: 100%;
  height: 100%;
  ${props => props.ignoresSafeArea && `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `}
`

export const Text = styled.div<{ color: string }>`
  color: ${props => props.color};
  font-size: 24px;
  font-weight: bold;
`