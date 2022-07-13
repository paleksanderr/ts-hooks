import React from 'react'
import { useState } from 'react'

function UseStateComponent() {
  const [arr, setArr] = useState<number[]>([])
  const [name , setName] = useState<string | null >(null)
  return (
      <div>
          <div>
              <button onClick={() => setArr([...arr, arr.length  ])}>
                  add item
              </button>
              {JSON.stringify(arr)}
              <button onClick={() => setName('Paweł')}>set name</button>
              {JSON.stringify(name)}
          </div>
      </div>
  );
}

export default UseStateComponent