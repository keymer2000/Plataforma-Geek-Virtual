import React, { Component } from 'react'
import './../../styles/login/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  axios from "axios";


const baseUrl="http://localhost:3001/usuarios";

class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
        
    }

    handleChange=async e=>{
       await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
            
        });
        
        
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: this.state.form.password}})
        .then(response=>{
            console.log(response.data);
            this.props.history.push("/Posts") 
        })
        .catch(error=>{
            console.log(error)
        })
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
                   </div>

               </div>
            </div>
        )
    }
}

export default Login
