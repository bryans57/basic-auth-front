import { useNavigate, Form, redirect } from 'react-router-dom';
import { eliminarCliente } from '../data/clientes';

export async function action({ params }) {}

function Cliente({ token }) {
	console.log(token);
	return (
		<>
			<div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20 break-words ...'>
				<h3 class='text-4xl font-bold dark:text-black'>Your Token</h3>
				<br></br>
				<p>{token}</p>
			</div>
		</>
	);
}

export default Cliente;
