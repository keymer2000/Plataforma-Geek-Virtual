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
           <h1 className="text-center">Participantes</h1>
            <table className="mt-4 table " style={{width:"70%", margin:"auto", height:"auto"}}>
                <thead>
                    <tr>
                        <th>imagen</th>
                        <th>Nombre completo</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((usuario, i) =>{
                        return(
                            <tr key={i}>
                                <td >

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