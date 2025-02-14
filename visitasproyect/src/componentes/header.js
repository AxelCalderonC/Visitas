import React, {useState} from "react";
import Buttons from "./buttons";
const Header = () => {
    const [selectedText, setSelectedText] = useState("Todos");

    const handleSelect = (event) => {
        event.preventDefault();
        setSelectedText(event.target.textContent);
    }
    return(
    <nav className="navbar sticky-top row navbar-expand-lg bg-danger">
        <div className="col">
            <p className="h1">Historial visitas</p>
            <div className="d-flex px-2">
                <form className="form">
                    <input type="text"
                    className="me-2"
                    placeholder="buscar"
                    aria-label="Buscar"
                     />
                <button className="btn btn-secondary me-2 border-0 rounded-circle"><i className="bi bi-search"></i></button>
                </form>
                <div className="dropdown">
                    <button className="btn btn-secondary   dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{selectedText}</button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" onClick={handleSelect} href="#/">Todos</a></li>
                        <li><a className="dropdown-item" onClick={handleSelect} href="#/">2000</a></li>
                        <li><a className="dropdown-item" onClick={handleSelect} href="#/">2200</a></li>
                        <li><a className="dropdown-item" onClick={handleSelect} href="#/">1100</a></li>
                        <li><a className="dropdown-item" onClick={handleSelect} href="#/">8020</a></li>
                        <li><a className="dropdown-item" onClick={handleSelect} href="#/">3000</a></li>
                        <li><a className="dropdown-item" onClick={handleSelect} href="#/">1000</a></li>
                    </ul>
                </div>
            </div>
        </div>
         <div className="col d-flex justify-content-center">
                <Buttons/>
            </div>
    </nav>
    )
}

export default Header;