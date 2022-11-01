import axios from 'axios';

export async function authenticate(datos) {
    try {
        console.log('man, wtf')
        const respuesta = await axios.post(import.meta.env.VITE_API_URL, datos);
        console.log({respuesta})
        return await respuesta.data.token;
    } catch (error) {
        console.log(error)
    }
}

export async function actualizarCliente(id, datos) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarCliente(id) {
        try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}