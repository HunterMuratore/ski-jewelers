import { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

import { ToastContainer, toast } from "react-toastify"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const initialFormData = {
    subject: 'New Jewelery Message',
    firstName: '',
    lastName: '',
    email: '',
    message: ''
}

function Contact() {
    const [formData, setFormData] = useState(initialFormData)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        try {
            const response = await axios.post('https://mail.huntermuratore.com/info@skijewelers.com', formData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            })

            if (response.status === 200) {
                navigate('/success')
                setFormData({
                    ...initialFormData
                })
                setLoading(false)
            } else {
                toast.error("Failed to send message. Please try sending message again.")
                setLoading(false)
            }

        } catch (error) {
            console.error('An error occurred while sending the message', error)
            toast.error("Failed to send message. Please try sending message again.")
            setLoading(false)
        }
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="contact main-padding flex flex-col justify-center mx-auto mb-3">
            <h2 className="text-center text-2xl font-bold mt-10">Contact Us</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-10" >
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase text-xs font-bold mb-2">
                            First Name
                        </label>
                        <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 focus:bg-white" value={formData.firstName} onChange={handleInputChange} type="text" name="firstName" placeholder="Jane" required />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Last Name
                        </label>
                        <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 focus:bg-white" value={formData.lastName} onChange={handleInputChange} type="text" name="lastName" placeholder="Doe" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 focus:bg-white" value={formData.email} onChange={handleInputChange} type="email" name="email" placeholder="JaneDoe@email.com" required />
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2">Message</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm rounded-lg bg-gray-50" value={formData.message} onChange={handleInputChange} name="message" placeholder="Type your message here..." required></textarea>
                </div>

                {loading && (
                    <div className="text-center mt-4">
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </div>
                )}

                <ToastContainer />

                <div className="flex flex-wrap items-center justify-between mb-4">
                    <div className="flex flex-col text-xs gap-2">
                        <h3><FontAwesomeIcon icon={faPhone} className="mr-1"/><a href="tel:7327526446">(732) 752-6446</a></h3>
                        <h3><FontAwesomeIcon icon={faEnvelope} className="mr-1"/><a href="mailto:INFO@SKIJEWELERS.COM" target="_blank">INFO@SKIJEWELERS.COM</a></h3>
                    </div>
                    <button className="my-btn text-sm py-3 px-3 rounded" type="submit">Send Message</button>
                </div>
            </form>
        </section>
    )
}

export default Contact