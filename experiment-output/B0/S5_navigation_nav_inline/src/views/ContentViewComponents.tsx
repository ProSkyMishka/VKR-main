import React from 'react'

export const NavigationView = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '1rem' }}>{children}</div>
)

export const List = ({ children }: { children: React.ReactNode }) => (
  <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '0.5rem' }}>
    {children}
  </div>
)

export const NavigationLink = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <div style={{ padding: '0.5rem', borderBottom: '1px solid #ccc' }}>
    <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
      {title}
    </a>
    {children}
  </div>
)

export const Text = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '0.5rem' }}>{children}</div>
)