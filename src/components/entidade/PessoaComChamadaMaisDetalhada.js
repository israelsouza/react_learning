import styles from './../PessoaComChamadaMaisDetalhada.module.css'

function PessoaComChamadaMaisDetalhada({ name, age, profission, studant, url }) {
    return (
        <div className={styles.container}>
            <h4>Hello, {name}</h4>
            <p className={styles.content_p}>Your age is: {age}</p>
            <p className={styles.content_p}>You are an: {profission}</p>
            <p className={styles.content_p}>I don't forgot, you also is an studant in: {studant} </p>
            <img src={url} alt='another cat'/>
        </div>
    )
}

export default PessoaComChamadaMaisDetalhada