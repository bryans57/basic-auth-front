import { useLoaderData } from 'react-router-dom'
import Cliente from '../components/Token';

export function loader() { 
    const clientes = []
    return clientes
}

function Index() {
  const clientes = useLoaderData();
  return (
      <>
        <h1 className="font-black text-4xl text-blue-900">IS - Auth</h1>
        <p className="mt-3">Your Auth</p>

        {clientes.length ? (
          <table className='w-full bg-white shadow mt-5 table-auto'>
              <thead className='bg-blue-800 text-white'>
                  <tr>
                      <th className='p-2'>1</th>
                      <th className='p-2'>2</th>
                      <th className='p-2'>3</th>
                  </tr>
              </thead>

                  <tbody>
                      {clientes.map( cliente => (
                          <Cliente
                              cliente={cliente}
                              key={cliente.id}
                          />
                      ))}
                  </tbody>
          </table>
        ) : (
          <p className="text-center mt-10">Whitout data</p>
        )}
      </>
  )
}

export default Index