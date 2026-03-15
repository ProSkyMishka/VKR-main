import React, { useState } from 'react'

const ContentView: React.FC = () => {
  const [groups, setGroups] = useState([['a', 'b'], ['c', 'd']])

  return (
    <div>
      <ul>
        {groups.map((group, i) => (
          <li key={i}>
            {group.map((item, j) => (
              <span key={j}>{item} </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContentView