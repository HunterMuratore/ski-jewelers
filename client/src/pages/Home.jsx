import { useState, useEffect } from 'react'

import storefront from '../assets/store/storefront.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

const hours = [
    { day: 'Monday', hours: 'CLOSED' },
    { day: 'Tuesday', hours: '10:00 am - 5:00 pm' },
    { day: 'Wednesday', hours: '10:00 am - 7:00 pm' },
    { day: 'Thursday', hours: '10:00 am - 7:00 pm' },
    { day: 'Friday', hours: '10:00 am - 7:00 pm' },
    { day: 'Saturday', hours: '10:00 am - 5:00 pm' },
    { day: 'Sunday', hours: 'CLOSED' },
]

function Home() {
    const [currentHours, setCurrentHours] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)

    useEffect(() => {
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

        const todayHours = hours.find((item) => item.day === today)

        setCurrentHours(todayHours.hours)
    }, [])

    return (
        <>
            <section className="home mx-auto main-padding flex flex-col items-center gap-6 text-center mb-3">
                <div>
                    <h1 className="text-3xl font-bold mt-5 mb-5">Ski Jewelers</h1>
                    <h2 className="text-2xl font-semibold mt-5 mb-5">Integrity Shines in Every Piece.</h2>
                    <h2 className={`text-lg mt-5 mb-2 ${showDropdown ? 'text-bold' : ''}`}>Today's Hours: {currentHours}<FontAwesomeIcon className="ml-2 dropdown" onClick={() => setShowDropdown(!showDropdown)} icon={showDropdown ? faCaretUp : faCaretDown} /></h2>
                    {showDropdown && (
                        <div className="mt-2">
                            <h3 className="font-semibold">Hours for Each Day:</h3>
                            <ul>
                                {hours.map((item) => (
                                    <li
                                        key={item.day}
                                        style={{ fontWeight: item.day === new Date().toLocaleDateString('en-US', { weekday: 'long' }) ? 'bold' : 'normal' }}
                                    >
                                        {item.day}: {item.hours}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className='storefront px-5'>
                    <img src={storefront} alt="Store Front" />
                </div>

                <h2 className="map-link mt-1 text-lg"><a href="https://maps.app.goo.gl/9tQtgMEa8zU6ACAf6" target="_blank">299 Route 22 East, Green Brook Township, NJ 08812<FontAwesomeIcon className="ml-1 pin-icon" icon={faMapPin} bounce /></a></h2>
            </section>
        </>
    )
}

export default Home