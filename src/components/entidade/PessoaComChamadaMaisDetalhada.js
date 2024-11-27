function PessoaComChamadaMaisDetalhada({ name, age, profission, studant, url }) {
    return (
        <div>
            <h4>Hello, {name}</h4>
            <p>Your age is: {age}</p>
            <p>You are an: {profission}</p>
            <p>I don't forgot, you also is an studant in: {studant} </p>
            <img src={url} />
        </div>
    )
}

export default PessoaComChamadaMaisDetalhada