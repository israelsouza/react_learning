function FormElements() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        alert('Olá, alerta aqui, após impedir o carregamento e desaparecimento dos dados')
    }

    return (
        <div className="form">
            <h2>Cadastro de usuários</h2>

            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input id="nomeUsuario" type="text" placeholder="Digite o seu nome..." required/>
                </div>
                <div>
                    <input type="email" placeholder="Digite o seu email..." required/>
                </div>

                <div>
                    <input type="password" placeholder="Crie uma senha, e guarde bem!" required/>
                </div>

                <div>
                    <input type="tel" placeholder="Seu melhor número" required/>
                </div>
                <div>
                    <input type="submit" value="Enviar dados" />
                </div>

            </form>

        </div>
    )
}

export default FormElements