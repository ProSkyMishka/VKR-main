import React, { useState } from 'react'

function ContentView() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <a href="#" style={{ marginRight: '1rem' }}>One</a>
        <a href="#" style={{ marginRight: '1rem' }}>Two</a>
        <a href="#" style={{ marginRight: '1rem' }}>Three</a>
      </nav>
      <h1 style={{ marginBottom: '1rem' }}>Menu</h1>
      <div>
        <p>Page 1</p>
        <p>Page 2</p>
        <p>Page 3</p>
      </div>
    </div>
  )
}

export default ContentView