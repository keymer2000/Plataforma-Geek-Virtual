import React from 'react'
import './../../styles/RegulatoryDoc/documentacion.css'

export default function DocMain() {
    return (
        <div className="container-fluid">
            <h5 className="text-center mt-5">
                Descargar las autorizaciones y actas de compromiso, leerlas y firmarlas. Una vez diligenciadas subirlas a la plataforma.
            </h5>
            <table className="mt-5 text-center " style={{width:"80%", margin:"auto"}}>
                <tbody  >
                    <tr className="border border-secondary">
                        <td>
                            <h4>Autorizacion de datos personales</h4>
                        </td>
                        <td>
                            <iframe src="https://drive.google.com/file/d/13190g8-PRvgep5PtKkjK3SVuD6b1Pret/preview" width="300" height="200"></iframe>
                        </td>
                    </tr>
                    <tr className="border border-secondary">
                        <td>
                            <h4>Autorizacion de imagen</h4>
                        </td>
                        <td>
                            <iframe src="https://drive.google.com/file/d/1P4w32PMQ6RRwsfl3xxZoP7htf4TVfJxV/preview" width="300" height="200"></iframe>
                        </td>
                    </tr>
                    <tr className="border border-secondary">
                        <td>
                            <h4>Acta de compromiso de recepción de beca</h4>
                        </td>
                        <td>
                            <iframe src="https://drive.google.com/file/d/1IhaJ838eg4pouK2i8he1JBU3lfxcgYT2/preview" width="300" height="200"></iframe>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}
