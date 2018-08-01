import React from 'react'

export const TableContent = ({title, description, done}) =>
    <tr>
        <td >Task {title}</td>
        <td>{description}</td>
        <td>
            <input type="checkbox" className="check" defaultChecked={done}/>
            <button>Excluir</button>
        </td>
    </tr>