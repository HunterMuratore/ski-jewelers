import { NavLink } from 'react-router-dom'

function Error() {
    return (
        <section className="error main-padding flex flex-col justify-center mx-auto mb-6 mt-20 items-center">
            <h1 className="text-center text-2xl font-bold mt-10">There was an unexpected error :(</h1>
            <h2 className="text-center text-xl font-bold mt-10">Our apologies, We will be looking into a fix right away!</h2>
            <h2 className="text-center text-xl font-bold mt-3">Click here to be escorted home.</h2>
            <NavLink to="/"><button className="my-btn text-sm py-2 px-3 rounded mt-6">Return Home</button></NavLink>
        </section>
    )
}

export default Error