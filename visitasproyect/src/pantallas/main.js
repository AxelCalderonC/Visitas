import React from "react";
import VisitorTable from "../componentes/historial";
import Formulario from "../componentes/infovisitante";
import VisitorActive from "../componentes/visitanteactivos";
import Header from "../componentes/header";

function Main () {
    return (
        <div>
            
           <div className="row">
                <div className="col">
                    <Header/>
                </div >
            </div>
            <div className="row ">
                <div className="col">
                    <VisitorTable/>  
                </div>
                <div className="col">
                    <Formulario/>
                </div>
            </div> 
            <div className="row">
                <div className="col">
                        <VisitorActive/>
                </div>
            </div>  
        </div>
    )
}
export default Main;