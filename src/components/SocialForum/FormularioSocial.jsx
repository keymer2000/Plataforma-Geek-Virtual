import React from 'react'
import { Component } from 'react';

class FormularioSocial extends Component{
    render(){
        return(
            <form style={{width:"60%", margin:"auto"}}>
                    <div className="form-group">
                        <h5>Mensaje *</h5>
                        <textarea name="tema" className="form-control" rows="5" placeholder="Escribe tu tema de consulta..." ></textarea>
                    </div>
                    <div className="container">
                        <div className="row" >
                            <div className="col-10"></div>
                            <div className="col-2" style={{padding:"0px"}}>
                                <button className="btn btn-primary" style={{float:"right"}} >Publicar</button>
                            </div>
                        </div>
                    </div> 
                </form>
        )
    }
    

}

export default FormularioSocial