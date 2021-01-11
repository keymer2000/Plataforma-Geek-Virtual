import React, {Component} from 'react'
import './../../styles/geekmain/posts.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"; ESTE PERTENE A LOS ICONOS DE MARCAS
import { anuncios } from './anuncios.json';
import AnunciosForm from './AnunciosForm'

class Posts extends Component {

    constructor (){
        super();
        this.state = {
            anuncios
        };
        this.handleAddAnuncios = this.handleAddAnuncios.bind(this);
    }

    handleAddAnuncios(anunciar) {
        this.setState({
            anuncios: [...this.state.anuncios, anunciar]
        })
    }

    render() {
        
        const anuncios = this.state.anuncios.map((anunciar, i) => {
            return (
                <div key={i} >
                    <div className="card mt-2" style={{width:"100%"}} >
                        <div className="card-body " >
                            <p>{anunciar.textAnuncio}</p>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            //revisar el tamaño del panel central que esta en el estilo de dashboard.css el cual tiene como id cont-anuncios -- lo defini con un tamaño de 80%
            <div >
                <div id="cont-title-geek" className="border">
                    <h1 id="title-geek">Academia Geek</h1>
                </div>
                <br />
                <div className="border" style={{ display: "flex" }} >
                    <h1 style={{ marginLeft: "10px" }}><FontAwesomeIcon icon={faBell} style={{ color: "f0f3", marginRight: "10px" }} />Anuncios</h1>
                    {/* <button className="btn btn-warning" style={{ fontWeight: "900", margin: "auto", fontSize: "25px", fontFamily: "sans-serif", width: "35%", color: "black" }} onClick={this.abrirModal}><u>Clic para crear anuncio</u></button> */}
                </div>
                <br/>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12  border border-primary" >
                        <AnunciosForm onAddAnuncios={this.handleAddAnuncios} />
                    </div>

                    <div className="col-lg-12 container border border-primary mt-4 pb-5" >
                        <p>{anuncios}</p>
                    </div>
                </div>
                </div>
            </div>


            // no puedo mostrar los anuncios con la ventana modal porque nose como llamar otra tabla de json

        )
    }
}

export default Posts



