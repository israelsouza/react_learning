import { useState } from "react";
import styles from "./Condicional.module.css";

function Condicao() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarForm(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function limparEmail() {
    setUserEmail("");
  }

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Digite o seu nome completo"
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Digite o seu email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <input
          type="submit"
          value="Enviar"
          onClick={enviarForm}
        />

        {userEmail && (
          <div>
            <p>Prazer, Sr. {nome}!</p>
            <p>O e-mail cadastrado foi: {userEmail}</p>
            <span>
              Digitou o e-mail errado? delete o email cadastrado clicando
            </span>{" "}
            <button onClick={limparEmail}>Aqui</button>
          </div>
        )}

      </form>
    </div>
  );
}

export default Condicao;
