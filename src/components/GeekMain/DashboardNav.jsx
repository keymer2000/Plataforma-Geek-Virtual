import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './../../styles/dashboard.css'
import logoMakaia from './../../img/logoMakaia.jpg'
import logoAgile from './../../img/logoAgile.png'
import logoEvolution from './../../img/logoEvolution.png'
// import Posts from './../GeekMain/Posts';

export default function DashboardNav(props) {
    console.log(props.match)
    return (
        <div className="container-fluid mt-4 border border-dark">
            <div className="row">
                <section className="col- border border-dark" id="cont-navegador">
                    <nav className="" >
                        <ul className="nav nav-tabs" id="navegador">
                            <li className="nav-item "><Link className={"nav-link"+(props.match.path=="/Posts"?" active": "")}   to="/Posts">Anuncios</Link></li>
                            <li className="nav-item"><Link className={"nav-link"+(props.match.path=="/BootcampMain"?" active": "")} to="/BootcampMain">Contenido del bootcamp</Link></li>
                            <li className="nav-item "><Link className={"nav-link"+(props.match.path=="/ForumMain"?" active": "")}   to="/ForumMain">Foro Social</Link></li>
                            <li className="nav-item "><Link className={"nav-link"+(props.match.path=="/TaskMain"?" active": "")}   to="/TaskMain">Tareas</Link></li>
                            <li className="nav-item "><Link className={"nav-link"+(props.match.path=="/PortfolioMain"?" active": "")}   to="/PortfolioMain">Portafolio de Evidencias</Link></li>
                            <li className="nav-item"><Link className={"nav-link"+(props.match.path=="/DocMain"?" active": "")} to="/DocMain">Documentación reglamentaria</Link></li>
                            <li className="nav-item"><Link className={"nav-link"+(props.match.path=="/ParticipantsMain"?" active": "")} to="/ParticipantsMain">Participantes</Link></li>
                            <li className="nav-item"><Link className={"nav-link"+(props.match.path=="/InstructorsMain"?" active": "")} to="/InstructorsMain">Instructores</Link></li>
                        </ul>
                    </nav>
                    <div id="cont-colaboradores">
                        <div id="cont-img" className="border">
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
                    </div>
                </section>
                {/* estructura de la sesion de anuncios */}
                <section className="border border-warning" id="cont-anuncios">
                    {React.createElement (props.contentComponent, props)}
                </section>
            </div>
        </div>

    )
}
