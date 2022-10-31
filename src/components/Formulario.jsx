const Formulario = ({client}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="user"
                >User:</label>
                <input 
                    id="user"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="user"
                    name="user"
                    defaultValue={client?.user}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="password"
                >Password:</label>
                <input 
                    id="password"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Password"
                    name="password"
                    defaultValue={client?.password}
                />
            </div>
        </>
    )
}

export default Formulario