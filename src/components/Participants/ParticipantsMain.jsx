import React, {Component} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const url="http://localhost:3001/usuarios";

class ParticipantsMain extends Component{
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
        <div>
           <h1 className="text-center mt-5" style={{fontFamily:"Georgia"}}>Participantes</h1>
            <table className="mt-5 table " style={{width:"70%", margin:"auto", height:"auto"}}>
                <tbody>
                    {this.state.data.map((usuario, i) =>{
                        return(
                            <tr key={i}>
                                <td >
                                    <div  style={{width:"110px", height:"80px"}}>
                                        <img className="img-fluid"  style={{minWidth:"110px", maxWidth:"110px", height:"80px"}}  src={usuario.foto} alt=""/> 
                                    </div>
                                    
                                </td>
                                <td >
                                    <a href="" style={{color:"black", fontSize:"18px"}} >
                                        {usuario.primer_nombre}
                                        {usuario.segundo_nombre}
                                        {usuario.primer_apellido}
                                        {usuario.segundo_apellido}
                                    </a>
                                </td>
                            </tr> 
                        )
                    })}
                </tbody>
            </table>
        </div>
    ); 
    }
}

export default  ParticipantsMain;