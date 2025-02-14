import React from "react";

const Buttons  =()=>{

    function mostrar() {
        const botonOculto = document.getElementById('liberador');
        botonOculto.style.display = 'block';
    }

    return (
        <div className="d-flex flex-row">
            <div>
                <h2>Informacion Visitantes</h2>
            </div>
            <div className="d-flex flex-row">
            <button className="btn btn-secondary mx-1  rounded-circle "><i className="bi bi-printer-fill"></i></button>
            <button className="btn btn-secondary mx-1  rounded-circle "><i className=" bi bi-box-arrow-right"></i></button>
            <button className="btn btn-secondary mx-1  rounded-circle "><i className="bi bi-pencil-square"></i></button>
            <button className="btn btn-secondary mx-1  rounded-circle" onClick={mostrar}><i className="bi bi-person-fill-add"></i></button>
            <button className="btn btn-secondary mx-1  rounded-circle " type="submit" id="liberador" style={{display:"none"}}><i class="bi bi-arrow-up-circle"></i></button>
            </div>
        </div>
        
    )
}
export default Buttons