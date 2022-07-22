import daoZapatillas from '../databases/zapatillas/daoZapatillas.js'

export async function listarZapatillas() {
    return await daoZapatillas.listarTodas()
}

export async function listarZapatilla(id) {
    return await daoZapatillas.listarPorId(id)
}