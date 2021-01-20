import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioSocial from "./FormularioSocial";

function ForumMain() {
    return (
        <div className="border border-success " style={{height:"100%"}}>
            <div className="mt-4 mb-4">
                <h1>Foro de consultas</h1>
                <p>Puedes abrir un debate sobre consultas que tengas o para invitar a otras personas a discutir algún tema de interés relacionado con el curso.</p>
                <p>También te daremos <strong>información de cosas importantes que puedan acontecer.</strong></p>
                <strong>¡Hagamos comunidad!</strong>
            </div>
            <div className="border mb-3">
                <p>Su nuevo tema de debate</p>
            </div>
            <div className="border">
                <FormularioSocial />
            </div>
        </div>
    )
}

export default ForumMain
