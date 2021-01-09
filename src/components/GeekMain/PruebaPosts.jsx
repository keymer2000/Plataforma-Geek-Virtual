// ESTE CODIGO ABRE LA VENTANA MODAL CON REACT-BOOTSTRAP

// import React from 'react'
// import './../../styles/geekmain/posts.css'
// import { Button, Modal} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell } from "@fortawesome/free-solid-svg-icons";
// // import { faFacebook } from "@fortawesome/free-brands-svg-icons"; ESTE PERTENE A LOS ICONOS DE MARCAS


// class Posts extends React.Component {
//     constructor()
//     {
//         super();
//         this.state={
//             show: false
//         }
//     }

//     handleModal() {
//         this.setState({show: !this.state.show})
//     }

//     render() {
//         return (
//             //revisar el tamaño del panel central que esta en el estilo de dashboard.css el cual tiene como id cont-anuncios -- lo defini con un tamaño de 80%
//             <div className="border border-primary">
//                 <div id="cont-title-geek" className="border">
//                     <h1 id="title-geek">Academia Geek</h1>
//                 </div>
//                 <br />
//                 <div className="border" style={{ display: "flex" }} >
//                     <h1 style={{ marginLeft: "10px" }}><FontAwesomeIcon icon={faBell} style={{ color: "f0f3", marginRight: "10px" }} />Anuncios</h1>
//                     <Button color="warning" style={{ fontWeight: "900", margin: "auto", fontSize: "25px", fontFamily: "sans-serif", width: "35%", color: "black" }} onClick={()=>this.handleModal()}><u>Clic para crear anuncio</u></Button>
//                 </div>


//                 {/* este codigo pertenece a la ventana modal que se abre dando clic en el boton para generar anuncios */}
//                 <Modal show={this.state.show} onHide={()=>this.handleModal()}>
//                     <Modal.Header  closeButton>
//                         Anuncios Geek
//                     </Modal.Header>
//                     <Modal.Body id="">
//                         <form action="" >
//                             <textarea name="textAnuncio" id="" cols="63" rows="8" placeholder="Escriba su anuncio..."></textarea>
//                         </form>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button color="primary">Publicar</Button>
//                         <Button color="danger" onClick={()=>this.handleModal()}>Cerrar</Button>
//                     </Modal.Footer>
//                 </Modal>

//             </div>

//         )
//     }
// }

// export default Posts
