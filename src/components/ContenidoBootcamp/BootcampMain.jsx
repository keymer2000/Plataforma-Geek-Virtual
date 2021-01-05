import React from 'react'
import './../../styles/ContBootcamp/BootcampMain.css'
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './../Main'
import Evidence from './../ContenidoBootcamp/Evidence'

function BootcampMain() {
    return (
        <div className="container-fluid">

            <BrowserRouter>
                


                <div className="row border">
                    <section className="col- border border-success" id="menu-lateral-de-tareas">
                        <ul>
                            <li><span><a href="">RETOS DE FORMACIÓN</a></span>
                                <ul>
                                    <li><span><a href="">Entregas FCC  Web 1-2</a></span>
                                        <ul>
                                            <li><span><Link   to="/Evidence/prueba">Pagina tributo</Link></span></li>
                                            <li><span><Link   to="/Evidence/prueba1">Formulario de encuesta</Link></span></li>
                                        </ul>
                                    </li>
                                    <li><span><a href="">Entregas FCC  Web 3-4-5</a></span>
                                        <ul>
                                            <li><span><a href="">Página de destino del producto</a></span></li>
                                            <li><span><a href="">Página de documentación técnica</a></span></li>
                                            <li><span><a href="">Página web portafolio personal</a></span></li>
                                        </ul>
                                    </li>
                                    <li><span><a href="">Entrega GitBook Web</a></span>
                                        <ul>
                                            <li><span><a href="">Retos Introdución a la Web</a></span></li>
                                            <li><span><a href="">Retos Fundamentos de programacion Parte I</a></span></li>
                                            <li><span><a href="">Retos Fundamentos de programacion Parte II</a></span></li>
                                        </ul>
                                    </li>
                                    <li><span><a href="">Entregas FCC JavaScript</a></span>
                                        <ul>
                                            <li><span><a href="">Comprobador de palindrome</a></span></li>
                                            <li><span><a href="">Convertidor de números romanos</a></span></li>
                                            <li><span><a href="">Cifrado de Caesars</a></span></li>
                                            <li><span><a href="">Validador de números de teléfonos</a></span></li>
                                            <li><span><a href="">Caja Registradora</a></span></li>
                                        </ul>
                                    </li>
                                    <li><span><a href="">Entregas FCC Bibliotecas Front-end</a></span>
                                        <ul>
                                            <li><span><a href="">Maquína de cotizaciones al azar</a></span></li>
                                            <li><span><a href="">Visor de Markdown</a></span></li>
                                            <li><span><a href="">Caja de Ritmos</a></span></li>
                                            <li><span><a href="">Calculadora de JavaScript</a></span></li>
                                            <li><span><a href="">Reloj 25 + 5</a></span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section className="col- border border-primary" id="menu-central-de-tareas">
                    <Switch>

                        <Route path="/Evidence/prueba" exact render={(props) => <Evidence {...props} />}></Route>
                        <Route path="/Evidence/prueba1" exact render={(props) => "hola mundo 1"}></Route>

                        
                        </Switch>

                    </section>
                </div>
            </BrowserRouter>
        </div>

    )
}

export default BootcampMain
