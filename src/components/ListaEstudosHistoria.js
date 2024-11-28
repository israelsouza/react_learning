import styles from './ListaEstudosHistoria.module.css'
import PropTypes from 'prop-types'  // Pacote

const notDefined = "not defined yet (i'm a var)"

function ListaEstudosHistoria({ assunto, ano, pais }) {

    return (
        <>

            <ul>
                <li className={styles.li}>
                    <span className={styles.span}>
                        Estudar: {assunto}.
                    </span>

                    <span className={styles.span}>
                        No ano: {ano}.
                    </span>

                    <span className={styles.span}>
                        Onde ocorreu? {pais}.
                    </span>
                </li>
            </ul>

        </>
    )
}

// Validação para a propriedade do objto qu veio de dentro do pacote
ListaEstudosHistoria.propTypes = {
    assunto: PropTypes.string.isRequired,
    ano: PropTypes.number,
}

ListaEstudosHistoria.defaultProps = {
    pais: 'não definido (dentro função default)',
    assunto: notDefined,
}

export default ListaEstudosHistoria