import React from 'react'

export default function TodoCard(props) {
    const {children, handelDelete, index, handelEdit} = props
    return (
        <li className='todoItem'>
            {children.props.children}
            <div className='actionsContainer'>
                <button onClick={() => handelEdit(index)}>
                    e
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {handelDelete(index)}}>
                    d
                    <i className="fa-solid fa-trash"></i>
                </button>

            </div>
            
        </li>
    )
}
