import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class AnunciosForm extends Component {
    constructor() {
        super();
        this.state = {
            textAnuncio: ''
        };

        this.handleTextAnuncio = this.handleTextAnuncio.bind(this);
        this.handleSubmitAnuncio = this.handleSubmitAnuncio.bind(this);
    }

    handleTextAnuncio(e) {
        const { value, name } = e.target;
        // console.log(value, name); para mostrar en console lo que se esta escribiendo
        this.setState({
            [name]: value
        })
    }

    handleSubmitAnuncio(e) {
        e.preventDefault();
        this.props.onAddAnuncios(this.state)
    }

    


    render() {
        return (
            <div className="card" style={{ width: "50%", margin: "auto" }}>
                <form onSubmit={this.handleSubmitAnuncio}  >
                    <div className="card-header">
                        Anuncios Geek
                    </div>
                    <div className="card-body">

                        <textarea
                            name="textAnuncio"
                            rows="8"
                            placeholder="Escriba su anuncio..."
                            value={this.state.textAnuncio}
                            onChange={this.handleTextAnuncio}
                            style={{ width: "100%" }}>
                        </textarea>

                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary float-right mb-2 ml-2">Publicar</button>
                        <button className="btn btn-danger float-right" onClick={this.abrirModal}>Cerrar</button>
                    </div>
                </form>
            </div>
        )
    }



}

export default AnunciosForm