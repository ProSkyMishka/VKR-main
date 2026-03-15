import React from 'react'

export const NavigationStack = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export const NavigationLink = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div>
      <div>{title}</div>
      {children}
    </div>
  )
}

export const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>{children}</div>
  )
}