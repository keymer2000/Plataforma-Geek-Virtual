import React from 'react'



class FormularioDoc extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
    }
    handleSubmit(event) {
      event.preventDefault();
      alert(
        `Selected file - ${this.fileInput.current.files[0].name}`
      );
    }
  
    render() {
      return (
        <form className="container-fluid border" onSubmit={this.handleSubmit}>
            <div className="row border-bottom mb-2 p-2">
                <div className="col-lg-6 ">
                    <label>Adjuntar autorizacion de datos personales:</label>
                </div>
                <div className="col-lg-6 ">
                    <input type="file" ref={this.fileInput} />
                </div>   
            </div>
            <div className="row border-bottom mb-2 p-2">
                <div className="col-lg-6 ">
                    <label>Adjuntar autorizacion de uso de imagen:</label>
                </div>
                <div className="col-lg-6 ">
                    <input type="file" ref={this.fileInput} />
                </div>   
            </div>
            <div className="row border-bottom p-2">
                <div className="col-lg-6 ">
                    <label>Adjuntar acta de compromiso de recepción de beca:</label>
                </div>
                <div className="col-lg-6 ">
                    <input type="file" ref={this.fileInput} />
                </div>   
            </div>
            <div className="text-center mt-3 mb-2">
                <button className="btn btn-primary" type="submit">Enviar archivos</button>
            </div>
            
        </form>
      );
    }
  }
  
export default FormularioDoc