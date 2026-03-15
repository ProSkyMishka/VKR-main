import React from 'react'

export const NavigationView = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {children}
  </div>
)

export const VStack = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    {children}
  </div>
)

export const Text = ({ children }: { children: string }) => (
  <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{children}</p>
)