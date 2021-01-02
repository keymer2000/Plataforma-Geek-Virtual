import React from 'react'
import './../../styles/ContBootcamp/BootcampMain.css'

import 'bootstrap/dist/css/bootstrap.min.css';


function BootcampMain() {
    return (
        <div className="container-fluid">
            <div className="row border">
            <section className="col- border border-success" id="menu-lateral-de-tareas">
                <ul>
                    <li><span><a href="">RETOS DE FORMACIÓN</a></span>
                        <ul>
                            <li><span><a href="">Entregas FCC  Web 1-2</a></span>
                                <ul>
                                    <li><span><a href="">Página Tributo</a></span></li>
                                    <li><span><a href="">Formulario de encuesta</a></span></li>
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
                {/* lo que esta dentro del div con id="contenedor-de-evidencias" va en un componente junto con una hpja de estilo sola */}
                <div className="border" id="contenedor-de-evidencias">
                    <div className="border">
                        <h4 className="col">Sube tu evidencia</h4>
                        <div>
                            <form action="" method="get" className="container-fluid">
                                <div className="form-group col">
                                    <div className="form-group row border">
                                        <label htmlFor="" className="col-4" >Url repositorio GitHub</label>
                                        <input type="text" placeholder="Adjunta tu enlace del repositorio" className="col-8" />
                                    </div>
                                    
                                    <div className="form-group row border">
                                        <label htmlFor="" className="col-4">Url GitHub pages</label>
                                        <input type="text" placeholder="Adjunta tu Endpoint-URL" className="col-8"/>
                                    </div>
                                   
                                    <div className="form-group row border">
                                        <textarea name="" id="" className="col-12" rows="6" placeholder="Conclusiones de la evidencia..." ></textarea>
                                    </div>
                                    <button className="btn btn-primary float-right">Contestar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
        </div>
        
    )
}

export default BootcampMain
