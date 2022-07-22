import { crearUser } from '../models/userModel.js'
import daoUsers from '../databases/users/daoUsers.js'

export async function afiliarUser(datos) {
    const user = crearUser(datos)
    await daoUsers.guardar(user)
    return user
}

export async function listarUsers() {
    return await daoUsers.listarTodas()
}