import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    informacoes: [
      {
        name: "Matheus",
        idade: 30,
        comida: "lasanha",
        musicas: ["I love you.", "Feliz aniversario.", "love by grace."]
      }
    ]
  };
  render() {
    return (
      <div>
        <h2>Esse é o {this.state.informacoes[0].name}</h2>
        <h2>Minha idade é {this.state.informacoes[0].idade}</h2>
        <h2>Minha comida preferida é {this.state.informacoes[0].comida}</h2>

        <ol>
          <li>{this.state.informacoes[0].musicas}</li>
        </ol>
      </div>
    );
  }
}