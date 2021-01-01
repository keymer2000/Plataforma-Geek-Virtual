import React from 'react'
import './../../styles/posts.css'
import desingAnuncio from './../../img/desingAnuncio.JPG'


function Posts() {
    return (
        //revisar el tamaño del panel central que esta en el estilo de dashboard.css el cual tiene como id cont-anuncios -- lo defini con un tamaño de 80%
        <div className="border border-primary">
            <div id="cont-title-geek" className="border">
                <h1 id="title-geek">Academia Geek</h1>
            </div>
            <br />
            <div className="border"><i className="fas fa-bell"><h1>Anuncios</h1></i></div> {/*  preguntar al profesor por los iconos */}
            <br />
            <div><button type="button" className="btn btn-warning">Generar anuncio</button></div>
            <br/>
            {/* <div id="contenedor-de-publicaciones" className="border"> */}
            {/* preguntar al profe cuando uno crea un formulario se envia lo que esta dentro del formulario mas no lo de sus contenedor padres que en mi casi es el div con id="generador-anuncios" */}
            {/* <div className="border" id="generador-anuncios">
                <form action="" className="form-group" id="form-anuncio">
                    <div id="text-area-buton">
                        <textarea className="form-control" id="area-publicar-anuncio" rows="4" placeholder="Publique su anuncio..."  />
                        <button id="boton-publicar-anuncion" type="submit" className="btn btn-primary">Publicar</button>
                    </div>
                </form>
            </div> */}
            {/* estructuracion de la tabla de Anuncios */}
            {/* <div>
            <table className="border " id="tabla-anuncios">
                <tbody className="border ">
                    <tr className="border ">
                        <img className="img-fluid" src={desingAnuncio} alt="" />
                    </tr>
                    <br />
                    <tr className="border ">
                        <img className="img-fluid" src={desingAnuncio} alt="" />
                    </tr>
                    <br />
                    <tr className="border ">
                        <img className="img-fluid" src={desingAnuncio} alt="" />
                    </tr>
                </tbody>
            </table> 
            </div> */}
            
            {/* </div> */}
        </div>
    )
}

export default Posts
