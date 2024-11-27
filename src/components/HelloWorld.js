import InputName from './form/InputName.js'

function HelloWorld() {

    function alertNameToUser() {
        const nome = document.getElementById('nomeUsuario')
        return alert(`Seja bem vindo ${nome.value}, meus parabens por acessar a aplicação!!`)
    }

    return (
        <div>
            <p>Hey, I'm a component!</p>
            <p> Use me in anywhere yoou want!! </p>

            <InputName />
            <button type="submit" onClick={alertNameToUser}>Enviar</button>
        </div>
    )
}

export default HelloWorld