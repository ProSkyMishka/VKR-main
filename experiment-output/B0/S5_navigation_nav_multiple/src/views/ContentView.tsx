import React from 'react'
import PageA from './PageA'
import PageB from './PageB'

function ContentView() {
  return (
    <NavigationView>
      <VStack spacing={20}>
        <NavigationLink to="A">
          <PageA />
        </NavigationLink>
        <NavigationLink to="B">
          <PageB />
        </NavigationLink>
      </VStack>
      <NavigationTitle>Menu</NavigationTitle>
    </NavigationView>
  )
}

function NavigationView({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

function NavigationLink({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) {
  return (
    <button
      onClick={() => {
        // Navigate to the specified page
      }}
    >
      {children}
    </button>
  )
}

function NavigationTitle({ children }: { children: string }) {
  return <h1>{children}</h1>
}

export default ContentView