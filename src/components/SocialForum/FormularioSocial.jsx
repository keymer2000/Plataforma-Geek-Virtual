import React from 'react'
import { Component } from 'react';
import axios from 'axios'

const url = "https://fuente-de-datos-geek-virtual.keymer2000.vercel.app/foro"


class FormularioSocial extends Component {
    constructor() {
        super();
        this.state = {
            comentar: false,
            data: [],
            form: {
                id: '',
                tema: ''
            }
        }
    }


    comentar = () => {
        this.setState({ comentar: !this.state.comentar })
    }

    peticionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });
        })
    }

    peticionPost = async () => {
        await axios.post(url, this.state.form).then(response => {
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        // console.log(this.state.form);
    }
    componentDidMount() {
        this.peticionGet();
    }


    render() {
        const { form } = this.state;
        return (
            <div>
                <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ color: "black" }}>
                                    Su nuevo tema de consulta
                        </button>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <form style={{ width: "60%", margin: "auto" }}>
                                    <div className="form-group">
                                        <h5>Mensaje *</h5>
                                        <textarea name="tema" value={form.tema} className="form-control" rows="5" placeholder="Escribe tu tema de consulta..." onChange={this.handleChange}></textarea>
                                    </div>
                                    <div className="container">
                                        <div className="row" >
                                            <div className="col-10"></div>
                                            <div className="col-2" style={{ padding: "0px" }}>
                                                <button type="button" className="btn btn-primary" style={{ float: "right" }} onClick={() => this.peticionPost()}>Publicar</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {/* <h1 className="text-center">Temas</h1> */}
                <div className="mt-4" style={{ width: "95%", margin: "auto" }}>
                <div className="mt-4"  >
                            <div className=" border p-4" style={{ borderRadius: "10px", backgroundColor: " #bde1ff" }} >
                                <p>No he podido integrar la libreria de bootstrap a mi pagina web de free code camp</p>
                                <a href="" alt=""><strong style={{ color: "black" }} >Comentarios</strong></a><br />
                                <p style={{backgroundColor:"#eff2f2", padding:"15px", borderRadius:"5px"}}><u><strong>Respuesta de: </strong>keymer jimenez</> puedes pegar esta linea de codigo al inicio de tu index.html <u> link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"</u> </p>
                                <textarea name="" id="" rows="2" placeholder="Escribe tu comentario..." style={{ width: "100%", backgroundColor: "#eff2f2" }}></textarea>
                                <div className="text-right">
                                    <button className="btn btn-info font-weight-bold" >Guardar comentario</button>
                                </div>
                            </div>
                        </div>
                    {this.state.data.map((consulta, i) => {
                        
                        return (
                            <div className="mt-4" key={i}  >
                                <div className=" border p-4" style={{ borderRadius: "10px", backgroundColor: " #bde1ff" }} >
                                    <p>{consulta.tema}</p>
                                    <strong style={{ color: "black" }} >Comentarios</strong><br />
                                    <textarea name="" id="" rows="2" placeholder="Escribe tu comentario..." style={{ width: "100%", backgroundColor: "#eff2f2" }}></textarea>
                                    <div className="text-right">
                                        <button className="btn btn-info font-weight-bold" >Guardar comentario</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div >

        )
    }


}

export default FormularioSocial