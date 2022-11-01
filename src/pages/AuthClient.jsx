import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';
import Formulario from '../components/Formulario';
import Token from '../components/Token';
import Error from '../components/Error';
import { authenticate } from '../data/clientes';

let token = '';

export async function action({ request }) {
	const formData = await request.formData();
	const datos = Object.fromEntries(formData);
	// Validación
	const errores = [];
	if (Object.values(datos).includes('')) {
		errores.push('All fields are required');
	}
	// Retornar datos si hay errores
	if (Object.keys(errores).length) {
		return errores;
	}
	console.log(datos);
	token = await authenticate(datos);
}

function AuthClient() {
	const errores = useActionData();
	const navigate = useNavigate();
	const existToken = token.length != '';
    console.log({existToken})

	return (
		<>
			<h1 className='font-black text-4xl text-blue-900'>Auth</h1>
			<p className='mt-3'>Authenticate to get your access token</p>

			<div className='flex justify-end'>
				<button
					className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
					onClick={() => navigate(-1)}>
					Back
				</button>
			</div>

			<div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
				{errores?.length &&
					errores.map((error, i) => <Error key={i}>{error}</Error>)}

				<Form method='post' noValidate>
					<Formulario />

					<input
						type='submit'
						className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
						value='Get it'
					/>
				</Form>
			</div>
			{existToken ? <Token token={token}></Token> : <div></div>}
		</>
	);
}

export default AuthClient;
