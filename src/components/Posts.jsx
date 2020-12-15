import React from 'react'
import '../styles/posts.css'
import anuncio from '../img/anuncio.JPG'

function Posts() {
    return (
        //revisar el tamaño del panel central que esta en el estilo de dashboard.css el cual tiene como id cont-anuncios -- lo defini con un tamaño de 80%
        <div className="border border-primary">
            <div id="cont-title-geek" className="border">
                <h1 id="title-geek">Academia Geek</h1>
            </div>
            <br />
            <div className="border"><h1>Anuncios</h1></div>
            <br />
            {/* <div id="contenedor-de-publicaciones" className="border"> */}
            <div className="border" id="generador-anuncios">
                <form action="" className="form-group">
                    <textarea class="form-control" id="" rows="4" placeholder="Publique su anuncio..." />
                    <button id="boton-publicar-anuncion" type="submit" class="btn btn-primary">Publicar</button>
                </form>
            </div>
            {/* estructuracion de la tabla de Anuncios */}
            <div>
            <table className="border " id="tabla-anuncios">
                <tbody className="border ">
                    <tr className="border ">
                        <img className="img-fluid" src={anuncio} alt="" />
                    </tr>
                    <br />
                    <tr className="border ">
                        <img className="img-fluid" src={anuncio} alt="" />
                    </tr>
                    <br />
                    <tr className="border ">
                        <img className="img-fluid" src={anuncio} alt="" />
                    </tr>
                </tbody>
            </table>
            </div>
            
            {/* </div> */}
        </div>
    )
}

export default Posts
