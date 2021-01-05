import React from 'react'
import './../../styles/geekmain/posts.css'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



class Posts extends React.Component {
    state={
        abierto: false,
    }

    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto})
    }
    render (){
    return (
        //revisar el tamaño del panel central que esta en el estilo de dashboard.css el cual tiene como id cont-anuncios -- lo defini con un tamaño de 80%
        <div className="border border-primary">
            <div id="cont-title-geek" className="border">
                <h1 id="title-geek">Academia Geek</h1>
            </div>
            <br />
            <div className="border"><i className="fas fa-bell"><h1>Anuncios</h1></i></div> {/*  preguntar al profesor por los iconos */}
            <br />
            {/* <!-- Button trigger modal --> */}
            <Button color="warning"  onClick={this.abrirModal} className="font-weight-bold">
                Generar Anuncio
            </Button>

            <Modal isOpen={this.state.abierto}>
                <ModalHeader>
                    Anuncios Geek
                </ModalHeader>
                <ModalBody id="">
                    <form action="">
                        <textarea name="" id="" cols="63" rows="8" placeholder="Escriba su anuncio...">

                        </textarea>
                        
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Publicar</Button>
                    <Button color="danger" onClick={this.abrirModal}>Cerrar</Button>
                </ModalFooter>
            </Modal>

        </div>
           
    )
    }
}

export default Posts
