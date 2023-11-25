import { NavLink } from 'react-router-dom'

function Success () {
    return (
        <section className="success main-padding flex flex-col justify-center mx-auto mb-6 mt-20 items-center">
            <h1 className="text-center text-2xl font-bold mt-10">Message Sent Successfully!</h1>
            <h2 className="text-center text-xl font-bold mt-10">Thank you for contacting us, we will get back to you right away!</h2>
            <NavLink to="/"><button className="my-btn text-sm py-2 px-3 rounded mt-6">Return Home</button></NavLink>
        </section>
    )
}

export default Success