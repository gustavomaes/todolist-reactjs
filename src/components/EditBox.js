import React from 'react'

const EditBox = ({ description, cancel, confirm, handleChange }) =>
    <div className="card-container">
        <textarea value={description} onChange={handleChange} />
        <div className="card__box-button">
            <button className="card__cancel" onClick={cancel}>Cancelar</button>

            <button className="card__confirm" onClick={confirm} >Confirmar</button>
        </div>
    </div>

export default EditBox