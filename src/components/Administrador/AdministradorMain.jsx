import React, {Component} from 'react'
import HeaderInstructores from './HeaderInstructores'

class AdministradorMain extends Component {
    render(){
    return (
        <div>
            <HeaderInstructores></HeaderInstructores>
            <div className="border border-warning"></div>
        </div>
    )
    }
}

export default AdministradorMain
