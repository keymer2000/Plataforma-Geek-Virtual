import React from 'react'
import './../../styles/RegulatoryDoc/documentacion.css'

export default function DocMain() {
    return (
        <div className="container-fluid">
            <div className="col- mt-lg-5" id="contenedor-de-documentacion" >
                <div className="row border ">
                    <div className="col-6 border"><h4 className=" doc-title">Autorizacion de datos personales</h4></div>
                    <div className="col-6 border">
                        <iframe src="https://drive.google.com/file/d/13190g8-PRvgep5PtKkjK3SVuD6b1Pret/preview" width="300" height="200"></iframe>
                    </div>
                </div>

                <div className="row border mt-4 ">
                    <div className="col-6 border"><h4 className=" doc-title">Autorizacion de imagen</h4></div>
                    <div className="col-6 border">
                        <iframe src="https://drive.google.com/file/d/1P4w32PMQ6RRwsfl3xxZoP7htf4TVfJxV/preview" width="300" height="200"></iframe>
                    </div>
                </div>

                <div className="row border mt-4 ">
                    <div className="col-6 border"><h4 className=" doc-title">Acta de compromiso de recepción de beca</h4></div>
                    <div className="col-6 border">
                        <iframe src="https://drive.google.com/file/d/1IhaJ838eg4pouK2i8he1JBU3lfxcgYT2/preview" width="300" height="200"></iframe>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
