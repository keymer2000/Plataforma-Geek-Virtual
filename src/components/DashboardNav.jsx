import React from 'react'

export default function DashboardNav() {
    return (
        <div className="container-small">
            <table className="row ">
                <tbody className="col">
                    <tr className="row border">
                        <td className="col-3 border" id="panelIzq">
                            <nav className="nav">
                                <ul>
                                    <li><a class="nav-link" href="#">Anuncios</a></li>
                                    <li><a class="nav-link" href="#">Contenido del bootcamp</a></li>
                                    <li><a class="nav-link" href="#">Foro social</a></li>
                                    <li><a class="nav-link" href="#">Tareas</a></li>
                                    <li><a class="nav-link" href="#">Portafolio de evidencia</a></li>
                                    <li><a class="nav-link" href="#">Participantes</a></li>
                                    <li><a class="nav-link" href="#">Instructores</a></li>
                                </ul>
                            </nav>
                        </td>
                        <td className="col-9 border" id="marcoCentral">
                            <div>Anuncios</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
