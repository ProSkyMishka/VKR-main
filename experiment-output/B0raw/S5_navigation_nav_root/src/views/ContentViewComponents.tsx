import React from 'react'

export const NavigationView = ({ children, navigationTitle }: { children: React.ReactNode, navigationTitle: string }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export const VStack = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </div>
  )
}

export const Text = ({ children }: { children: string }) => {
  return (
    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
      {children}
    </p>
  )
}