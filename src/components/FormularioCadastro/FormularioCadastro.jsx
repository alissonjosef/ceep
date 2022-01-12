import React, { Component } from "react";
import "./styles.css";
class FormularioCadastro extends Component {
  constructor(props){
    super(props)
    this.titulo = ''
    this.texto = ''
  }

  hanldleMudancaTitulo(evento){
    evento.stopPropagation()
    this.titulo = evento.target.value;
  }

  hanldleMudancaTexto(evento){
    evento.stopPropagation()
    this.texto = evento.target.value;
    console.log(this.texto)
  }

  criarNota(evento){
    evento.preventDefault()
    evento.stopPropagation()

    this.props.criarNota(this.titulo, this.texto)
  }
  render() {
    return (
      <form className="form-cadastro "
      onSubmit={this.criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.hanldleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.hanldleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;