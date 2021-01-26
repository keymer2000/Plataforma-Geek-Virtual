import React, { Component } from 'react'
import './logininstructores.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import desktop from '../../img/desktop.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

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
        // console.log(this.state.form);
    }
    iniciarSesion = async () => {
         axios.get(`${baseUrl}?username=${this.state.form.username}&password=${this.state.form.password}`)
            .then(response => {
                console.log(response.data);
                return response.data;
                // this.props.history.push("/Posts") 
            })
            .then(response => {
                if (response.length > 0) {
                    alert('bienvenido:')
                    window.location.href = "/AdministradorMain"
                } else {
                    alert("El usuario o la contraseña no son correctos")
                }

            })
            .catch(error => {
                console.log(error);
            })
    }



    cerrarSesion = async () => {
        // alert('saliendo....')
        window.location.href = "/Home"
    }

    render() {
        return (
            <div className="cont-login-form">
                <h1 className="title-login">LOG IN</h1>
                <div className="mt-lg-3 text-center ">
                    <img style={{width:"280px"}} className="img-fluid " src={desktop} alt=""/>
                </div>
                <form >
                    <div className="cont-form-group">
                        <label className="label">Username:</label>
                        <div className="group-icon-input">
                            <FontAwesomeIcon className="iconos" icon={faUser}></FontAwesomeIcon>
                            <input className="input-login" type="text" name="username"  placeholder="Username"  onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="cont-form-group">
                        <label className="label">Password:</label>
                        <div className="group-icon-input">
                            <FontAwesomeIcon className="iconos" icon={faUnlockAlt}></FontAwesomeIcon>
                            <input className="input-login" type="password" name="password"  placeholder="Password"  onChange={this.handleChange} />
                        </div>
                    </div>
                    {/* <div class="cont-form-group">
                        <div class="form-check">
                            <input className="input-login" class="form-check-input" type="checkbox" id="gridCheck" />
                            <p class="form-check-label" for="gridCheck">Recordar Contraseña</p>
                        </div>
                    </div> */}
                    
                </form>
                <button type="button" className="button-login" onClick={() => this.iniciarSesion()}  >Iniciar Sesión</button>
            </div>
        )
    }
}

export default LoginInstructores
