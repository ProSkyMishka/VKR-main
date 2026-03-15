import React from 'react'

export const NavigationView = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: 16 }}>{children}</div>
)

export const VStack = ({ children, spacing }: { children: React.ReactNode; spacing: number }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: spacing }}>{children}</div>
)

export const NavigationLink = ({
  to,
  children
}: {
  to: string
  children: React.ReactNode
}) => (
  <a href="#" style={{ padding: 8, backgroundColor: '#f0f0f0', borderRadius: 4 }}>
    {children}
  </a>
)

export const Text = ({ children }: { children: string }) => (
  <span style={{ fontSize: 16 }}>{children}</span>
)