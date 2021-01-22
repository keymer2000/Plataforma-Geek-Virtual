import React from 'react';
import './../../styles/geekmain/header.css'
import perfil from '../../img/perfil.jpg'

function HeaderNav() {
        
    return (
    <header className="container-fluid ">
        <div className="row " id="cont-header">
            <div className="col-lg-7 " >
                <p id="logo-academia-geek">Geek Virtual</p>
            </div>
            <div className="col-lg-5 ">
                <div className="row" style={{height:"100%"}}>
                    <div className="col-2 p-1 border-right "  >
                        <div className="row float-right"  style={{width:"50px"}}>
                            <img className="pr-1" style={{maxWidth:"40px"}} src={perfil} alt="perfil.jp" />
                        </div>
                    </div>
                    <div className="col-7 border-right " >
                        <div className="row pl-1">
                            <p className="ml-4 pt-2" >KEYMER ALEXANDER JIMENEZ JEREZ</p>
                        </div>
                    </div>
                    <div className="col-3 " >
                        <div className="row pl-1">
                            <button className="btn btn-danger mt-1">Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
                
            </div>    
        </div>  
    </header>

    )
}

export default HeaderNav;

