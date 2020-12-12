import React from 'react'
import '../styles/dashboard.css'
import logoMakaia from '../img/logoMakaia.png'
import logoAgile from '../img/logoAgile.png'
import logoEvolution from '../img/logoEvolution.png'

export default function DashboardNav() {
    return (

        <div className="container-small">
            <table className="row ">
                <tbody className="col">
                    <tr className="row border">
                        <td className="col-3 border" id="panelIzq">
                            <nav className="navbar-nav">
                                <ul className="border" id="navegador">
                                    <li className="nav-item active"><a className="nav-link border" href="#">Anuncios</a></li>
                                    <li className="nav-item"><a className="nav-link border" href="#">Contenido del bootcamp</a></li>
                                    <li className="nav-item"><a className="nav-link border" href="#">Foro social</a></li>
                                    <li className="nav-item"><a className="nav-link border" href="#">Tareas</a></li>
                                    <li className="nav-item"><a className="nav-link border" href="#">Portafolio de evidencia</a></li>
                                    <li className="nav-item"><a className="nav-link border" href="#">Documentación reglamentaria</a></li>
                                    <li className="nav-item"><a className="nav-link border" href="#">Participantes</a></li>
                                    <li className="nav-item"><a className="nav-link border" href="#">Instructores</a></li>
                                </ul>
                            </nav>
                            <br/>
                            <section className="logo-colaboradores border">
                                <div className="border">
                                    <a  href="" alt=""><img className="border" src={logoMakaia} alt="" width="150px" /></a>
                                </div>
                                <div className="border">
                                    <a href="" alt=""><img className="border" src={logoAgile} alt="" width="150px" /></a>
                                </div>
                                <div className="border">
                                    <a href="" alt=""><img className="border" src={logoEvolution} alt="" width="150px" /></a>
                                </div>
                            </section>
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
