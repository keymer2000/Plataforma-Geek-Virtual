import React, {Component} from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import perfil from '../../img/perfil.jpg'

const url="http://localhost:3001/instructores";


class InstructorsMain extends Component {
    state={
        data:[]
    }

    peticionGet=()=>{
        axios.get(url).then(response=>{
           this.setState({data: response.data});
        })
    }

    componentDidMount(){
        this.peticionGet();
    }
    render(){
    return (
        <div className="mt-4" style={{width:"88%", margin:"auto"}}>
            <h1 className="text-center mb-4">Instructores</h1>
            <div className="card-columns ">
                {this.state.data.map((instructor, i) =>{
                    return(
                    <div key={i} className="card text-center">
                        
                        <img className="card-img-top" src={instructor.foto} alt="Card image cap" />
                        
                        <div className="card-body">
                            <h5 className="card-title">
                                {instructor.primer_nombre}
                                {instructor.segundo_nombre}
                                {instructor.primer_apellido}
                                {instructor.segundo_apellido}
                            </h5>
                            <p className="card-text">{instructor.descripcion}</p>
                        </div>
                        <div className="card-footer">
                            
                        </div>
                    </div>
                    )
                })}        
            </div>
        </div>
    )
    }
}

export default InstructorsMain


{/* <div className="card  text-center">
                    
                    <img className="card-img-top" src={perfil} alt="Card image cap" />
                    
                    <div className="card-body">
                        <h5 className="card-title">KEYMER ALEXANDER JIMENEZ JEREZ</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        
                    </div>
                </div>
                <div className="card  text-center">
                    
                    <img className="card-img-top" src={perfil} alt="Card image cap" />
                    
                    <div className="card-body">
                        <h5 className="card-title">KEYMER ALEXANDER JIMENEZ JEREZ</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        
                    </div>
                    
                </div>
            </div>
            <div className="card-columns mt-4">
                <div className="card  text-center">
                    
                    <img className="card-img-top" src={perfil} alt="Card image cap" />
                    
                    <div className="card-body">
                        <h5 className="card-title">KEYMER ALEXANDER JIMENEZ JEREZ</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        
                    </div>
                </div>
                <div className="card  text-center">
                    
                    <img className="card-img-top" src={perfil} alt="Card image cap" />
                    
                    <div className="card-body">
                        <h5 className="card-title">KEYMER ALEXANDER JIMENEZ JEREZ</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        
                    </div>
                </div>
                <div className="card  text-center">
                    
                    <img className="card-img-top" src={perfil} alt="Card image cap" />
                    
                    <div className="card-body">
                        <h5 className="card-title">KEYMER ALEXANDER JIMENEZ JEREZ</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div> 
                    <div className="card-footer">
                        
                    </div>
                    
                </div>*/}