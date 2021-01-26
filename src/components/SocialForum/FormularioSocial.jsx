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
                    {this.state.data.map((consulta, i) => {
                        return (
                            <div className="mt-3" key={i}  >
                                <div className="card-header border border-primary p-4" style={{ borderRadius: "10px" }} >
                                    <p>{consulta.tema}</p>
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