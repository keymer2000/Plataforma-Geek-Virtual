import React, { Component } from 'react'
import './logininstructores.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
// import desktop from '../../img/desktop.png'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle} from "@fortawesome/free-solid-svg-icons";

const baseUrl = "https://fuente-de-datos-geek-virtual-b6nd06nal.vercel.app/instructores";

class LoginInstructores extends Component {
    state = {
        form: {
            username: '',
            password: ''
        }
    }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
    iniciarSesion = async () => {
        window.location.href = "/AdministradorMain"
    }

    cerrarSesion = async () => {
        // alert('saliendo....')
        window.location.href = "/Home"
   }

    render() {
        return (
            <div className="containerPrincipal">
               <div className="containerSecundario">
                   <div className="form-group">
                        <label htmlFor="">Usuario: </label>
                        <br/>
                        <input type="text" className="form-control" name="username" 
                        onChange={this.handleChange} />
                        <br/>
                        <label htmlFor="">Contraseña: </label>
                        <br/>
                        <input type="password" className="form-control" name="password" 
                        onChange={this.handleChange} />
                        <br/>
                        <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
                        <br/>
                        <br/>
                        <button className="btn btn-danger" onClick={()=> this.cerrarSesion()}>cerrar Sesión</button>
                   </div>
               </div>
            </div>
        )
    }
}

export default LoginInstructores
