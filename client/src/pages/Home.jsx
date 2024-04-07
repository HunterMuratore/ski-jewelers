import { useState, useEffect } from 'react'

import Partners from '../components/Partners'
import Carousel from '../components/Carousel'

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
                    <h1 className="text-4xl font-bold my-10">Ski Jewelers</h1>

                    <h2 className="text-3xl font-semibold my-5">Integrity Shines in Every Piece</h2>

                    <h2 className="text-2xl font-semibold my-5">We Buy <span className='gold'>Gold</span> and <span className='silver'>Silver</span></h2>

                    <h2 className="text-xl font-semibold my-5">Professional Jewelry Appraisals for Insurance Coverage</h2>

                    {/* <div className='holiday-hours border border-white'>
                        <h2 className="text-xl font-semibold mt-5 mb-2">Holiday Hours Saturday, 3/30/2024</h2>
                        <h2 className="text-lg font-semibold mb-5">10:00 am - 3:00 pm</h2>
                    </div> */}

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

                <div className='carousel mx-auto'>
                    <Carousel />
                </div>

                <h2 className="map-link mt-1 text-lg"><a href="https://maps.app.goo.gl/9tQtgMEa8zU6ACAf6" target="_blank">299 Highway 22 East, Green Brook Township, NJ 08812<FontAwesomeIcon className="ml-1 pin-icon" icon={faMapPin} bounce /></a></h2>
            </section>

            <section className='mt-16'>
                <h3 className='text-lg text-center'>Outside vendors we deal with</h3>
                <Partners />
            </section>
        </>
    )
}

export default Home