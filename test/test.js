import axios from 'axios'
import { conectar, desconectar } from '../src/server.js'

await conectar()

const serverUrl = 'http://localhost:8080/api/users'

await axios.post(serverUrl, {
    nombre: 'jorge',
    edad: 36
})

const { data: users } = await axios.get(serverUrl)

console.log(users)

await desconectar()