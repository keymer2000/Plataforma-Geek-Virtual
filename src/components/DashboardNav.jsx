import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/dashboard.css'
import logoMakaia from '../img/logoMakaia.png'
import logoAgile from '../img/logoAgile.png'
import logoEvolution from '../img/logoEvolution.png'
import Posts from './Posts';

export default function DashboardNav() {
    return (
        <div className="container-fluid mt-4 border border-dark">
            <div className="row">
            <section className="col- border border-dark" id="cont-navegador">
                <nav className="navbar-nav" >
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
                <div id="cont-colaboradores">
                    <div className=" border">
                        <a href="" alt=""><img className="border img-fluid" src={logoMakaia} alt="" width="150px" /></a>
                    </div>
                    <div className=" border">
                        <a href="" alt=""><img className="border img-fluid" src={logoAgile} alt="" width="150px" /></a>
                    </div>
                    <div className=" border">
                        <a href="" alt=""><img className="border img-fluid" src={logoEvolution} alt="" width="150px" /></a>
                    </div>
                </div>
            </section>
        {/* estructura de la sesion de anuncios */}
            <section className="border border-warning" id="cont-anuncios">
                <Posts />
            </section>
            </div>
            
        </div>
        // <div className="container-fluid mt-4 border border-dark">
        //     <table className="row border border-danger" >
        //         <tbody className="col">
        //             <tr className="row border">
        //                 <td className="border border-primary" id="panelIzq" width="20%">
        //                     <nav className="navbar-nav">
        //                         <ul className="border" id="navegador">
        //                             <li className="nav-item active"><a className="nav-link border" href="#">Anuncios</a></li>
        //                             <li className="nav-item"><a className="nav-link border" href="#">Contenido del bootcamp</a></li>
        //                             <li className="nav-item"><a className="nav-link border" href="#">Foro social</a></li>
        //                             <li className="nav-item"><a className="nav-link border" href="#">Tareas</a></li>
        //                             <li className="nav-item"><a className="nav-link border" href="#">Portafolio de evidencia</a></li>
        //                             <li className="nav-item"><a className="nav-link border" href="#">Documentación reglamentaria</a></li>
        //                             <li className="nav-item"><a className="nav-link border" href="#">Participantes</a></li>
        //                             <li className="nav-item"><a className="nav-link border" href="#">Instructores</a></li>
        //                         </ul>
        //                     </nav>
        // //                     <br />
        //                     <section className=" logo-colaboradores border">
        //                         <div id="cont-colaboradores">
        //                             <div className=" border">
        //                                 <a href="" alt=""><img className="border" src={logoMakaia} alt="" width="150px" /></a>
        //                             </div>
        //                             <div className=" border">
        //                                 <a href="" alt=""><img className="border" src={logoAgile} alt="" width="150px" /></a>
        //                             </div>
        //                             <div className=" border">
        //                                 <a href="" alt=""><img className="border" src={logoEvolution} alt="" width="150px" /></a>
        //                             </div>
        //                         </div>
        //                     </section>
        //                 </td>
        //                 <td className=" border border-dark" id="panelCentral" width="80%">
        //                     <div>Anuncios</div>
        //                 </td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>

    )
}
