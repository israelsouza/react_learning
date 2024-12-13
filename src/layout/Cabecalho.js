import {Link} from 'react-router-dom'
import styles from '../components/Cabecalho.module.css'

function Cabecalho() {
    return (
        <div className={styles.cabecalho}>

            <div>
                <img src='https://placecats.com/louie/300/200'/>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/" className={styles.tagLink}>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/contato" className={styles.tagLink}>
                            Contato
                        </Link>
                    </li>

                    <li>
                        <Link to="/empresa" className={styles.tagLink}>
                            Empresa
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Cabecalho;