function InserirNome({ setNome }) {

    return (
        <>
            <p>
                Digite seu nome:
            </p>

            <div>
                <input
                    type="text"
                    placeholder="nome completo"
                    onChange={(evento) => {
                        setNome(evento.target.value)
                    }}
                />
            </div>
        </>
    )
}


export default InserirNome