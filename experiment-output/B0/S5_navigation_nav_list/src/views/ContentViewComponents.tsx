import React from 'react'

export const NavigationView = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
)

export const List = ({ children }: { children: React.ReactNode }) => (
  <ul>{children}</ul>
)

export const Text = ({ children }: { children: string }) => (
  <li>{children}</li>
)