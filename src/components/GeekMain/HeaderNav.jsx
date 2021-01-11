import React from 'react';
import './../../styles/geekmain/header.css'

function HeaderNav() {
        
    return (
    <header className="container-fluid ">
        <div className="row border" id="cont-header">
            <div className="col-lg-7 border" >
                <p id="logo-academia-geek">Geek Virtual</p>
            </div>
            <div className="col-lg-5 border">
                <div className="row" style={{height:"100%"}}>
                    <div className="col-2 border" >
                        <div className="row">
                            <img className="" src="" alt="perfil.jp" />
                        </div>
                    </div>
                    <div className="col-8 border" >
                        <div className="row pl-1">
                            <p>KEYMER ALEXANDER JIMENEZ JEREZ</p>
                        </div>
                    </div>
                    <div className="col-2 border" >
                        <div className="row pl-1">
                            
                        </div>
                    </div>
                </div>
                
            </div>    
        </div>  
    </header>

    )
}

export default HeaderNav;

