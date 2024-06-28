import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(p) {
    const {todos} = p
    return (
        <ul className='main'>
            {todos.map((todo, index) => {
                return (<TodoCard key={index} {...p} index={index}>
                    <p>{todo}</p>
                </TodoCard>)
            })}
        </ul>
    )
}
