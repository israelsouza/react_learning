import { useState } from 'react'

function FormElements() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('------')
        console.log(` Nome - Email - Número do celular`)
        console.log(` ${name} - ${email} - ${numberPhone}`)
    }

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [numberPhone, setNumberPhone] = useState()

    return (
        <div className="form">
            <h2>Cadastro de usuários</h2>

            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor='nome'>Nome:               </label>
                    <input id="nome" name='nome' type="text" placeholder="Digite o seu nome..."  onChange={(evento) => setName(evento.target.value) }/>
                </div>
                <div>
                    <label htmlFor='email'>E-mail:            </label>
                    <input type="email" id='email' name='email' placeholder="Digite o seu email..." onChange={(evento) => setEmail(evento.target.value) } />
                </div>

                <div>
                    <label htmlFor='password'>Senha:          </label>
                    <input type="password" id='password' name='password' placeholder="Crie uma senha, e guarde bem!" onChange={ (evento) => setPassword(evento.target.value)} />
                </div>

                <div>
                    <label htmlFor='numberPhone'>Celular:        </label>
                    <input type="tel" id='numberPhone' name='numberPhone' placeholder="Seu melhor número" onChange={ (e) => setNumberPhone(e.target.value)} />
                </div>
                <div>
                    <button type='submit'> Enviar dados </button>
                </div>

            </form>

        </div>
    )
}

export default FormElements