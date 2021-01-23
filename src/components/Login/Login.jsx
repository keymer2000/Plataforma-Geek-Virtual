import React, { Component } from 'react'
import './../../styles/login/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import desktop from '../../img/desktop.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";

const baseUrl = "http://localhost:3001/usuarios";
class Login extends Component {
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
        await axios.get(baseUrl, { params: { username: this.state.form.username, password: this.state.form.password } })
            .then(response => {
                return response.data;
                // this.props.history.push("/Posts") 
            })
            .then(response => {
                if (response.length > 0) {
                    window.location.href = "/Posts"
                } else {
                    alert("El usuario o la contraseña no son correctos")
                }

            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="border border-success container-fluid " style={{height: "100vh"}}>
                <div className="row border border-warning" id="cont-general">
                    <div className="col-lg-6 border">
                        <div>
                            <img className="img-fluid" src={desktop} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 border">
                        <div className="row">
                            <div className="col-12 border border-primary"  id="cont-sesion" >
                                <div  id="form-sesion">
                                    <h3>Iniciar Sesión</h3>
                                    
                                    <FontAwesomeIcon icon={faUserCircle} id="icon-login" />
                                    <br/>
                                    <br/>
                                    <input type="text" className="form-control" name="username" placeholder="Username"
                                            onChange={this.handleChange} />
                                    <br />
                                    <input type="password" className="form-control" name="password" placeholder="Password"
                                            onChange={this.handleChange} />
                                    <br />
                                    <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>Iniciar Sesión</button>
                                    </div>
                                
                            </div>  
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login
