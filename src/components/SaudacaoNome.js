function SaudacaoNome({ nome }) {

    function exibirNomeNaFrase(algumNome) {
        return <p>Olá, seja bem vindo {algumNome}!!! EM TEMPO REAAALLLL</p>
    }

    return (
        <div>
            {nome &&
                exibirNomeNaFrase(nome)                
            }
        </div>
    )
}

export default SaudacaoNome