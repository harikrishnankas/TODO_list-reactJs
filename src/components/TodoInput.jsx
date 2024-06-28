import React, { useState } from 'react'

export default function TodoInput(props) {
  const {handelAddTodo, value, setValue} = props
  
  return (
    <header>
        <input 
          value={value}
          onChange={(e) => {setValue(e.target.value)}}
          type="text" 
          placeholder='Enter Todo...' 
        />
        <button 
          onClick={() => 
            {handelAddTodo(value)
              setValue('')
            }
          }
        >
          Add todo
        </button>
    </header>
  )
}
