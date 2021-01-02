import React from 'react'
import './../../styles/ContBootcamp/evidence.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Evidence extends React.Component {
    render(){
        return (
            <div className="border" id="contenedor-de-evidencias">
                    <div className="border">
                        <h4 className="col">Sube tu evidencia</h4>
                        <div>
                            <form action="" method="get" className="container-fluid">
                                <div className="form-group col">
                                    <div className="form-group row border">
                                        <label htmlFor="" className="col-4" >Url repositorio GitHub</label>
                                        <input type="text" placeholder="Adjunta tu enlace del repositorio" className="col-8" />
                                    </div>
                                    
                                    <div className="form-group row border">
                                        <label htmlFor="" className="col-4">Url GitHub pages</label>
                                        <input type="text" placeholder="Adjunta tu Endpoint-URL" className="col-8"/>
                                    </div>
                                   
                                    <div className="form-group row border">
                                        <textarea name="" id="" className="col-12" rows="6" placeholder="Conclusiones de la evidencia..." ></textarea>
                                    </div>
                                    <button className="btn btn-primary float-right">Contestar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Evidence