
import Lixo from './assets/lixo.svg'

import './App.css'

function App() {

  const users = [

    {
      id: '2345esd67676700pu',
      name: 'Wagner',
      age: 45,
      email: 'wagner@gmail.com',

    },

    {
      id: '2345esd6764567pu',
      name: 'Adriana',
      age: 41,
      email: 'nini@gmail.com',

    },


    {
      id: '236768009576700pu',
      name: 'Lobo',
      age: 46,
      email: 'wagner_lobo@gmail.com',

    }
  ]

  return (

    <div className='container'>
      <h1 className='h1'>Cadastro de Alunos</h1>
      <form>
        <input name='nome' type="text" placeholder='Nome' />
        <input name='idade' type="number" placeholder='Idade' />
        <input name='email' type="email" placeholder='Email' />
        <button className='btn-form' type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (

        <div className='card' key={user.id}>
          <div className='new-user'>
            <p>Nome: <span>{user.name} </span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button className='btn-lixo'>
            <img src={Lixo} width={20} />
          </button>
        </div>


      ))}
    </div>
  )
}

export default App
