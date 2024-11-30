import Button from './form/Button'

function Evento() {

    function meuEvento() {
        alert("meu evento por props com sucesso!")
    }

    function meuSegundoEvento() {
        alert("meu segundo evento esta sendo executado por props com sucesso!")
    }

    return (
        <>
            <Button descricao="Texto exibindo por props" event={meuEvento}/>
            <Button descricao="Texto de outro botão" event={meuSegundoEvento}/>
        </>
    )
}

export default Evento