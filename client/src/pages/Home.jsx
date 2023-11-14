import Map from '../components/Map'

const hours = [
    { day: 'Monday', hours: 'CLOSED' },
    { day: 'Tuesday', hours: '10:00 am - 5:00 pm' },
    { day: 'Wednesday', hours: '10:00 am - 7:00 pm' },
    { day: 'Thursday', hours: '10:00 am - 7:00 pm' },
    { day: 'Friday', hours: '10:00 am - 7:00 pm' },
    { day: 'Saturday', hours: '10:00 am - 5:00 pm' },
    { day: 'Sunday', hours: 'CLOSED' },
]

const location = {
    address: '299 US-22, Green Brook Township, NJ',
    lat: 40.58971033669366,
    lng: -74.50017132883545,
}

function Home() {
    return (
        <>
            <section className="home main-padding flex flex-col items-center gap-6 text-center mb-3">
                <div className="mx-auto">
                    <div>
                        <h1 className="text-3xl font-bold mt-10 mb-5">Ski Jewelers</h1>
                        <h2 className="text-2xl font-semibold mt-5 mb-5">Integrity Shines in Every Piece.</h2>
                        <h2 className="text-lg mt-5 mb-2">Come Visit Us Today!</h2>
                    </div>
                    <Map></Map>
                </div>
            </section>
        </>
    )
}

export default Home