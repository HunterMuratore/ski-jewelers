import Map from '../components/Map'

import joe from '../assets/staff/joe.jpg'

const staff = [
    {
        name: 'Joe',
        img: joe,
        description: ''
    },
]

function About() {
    return (
        <section className="about text-center main-padding">
            <article className="mb-10 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md mt-10">
                <h1 className="text-2xl font-bold mt-10 mb-5">About Us</h1>
                <p>Ski Jewelers was founded over 50 years ago. Our high standard of craftsmanship and integrity, has built a strong relationship with our customers. Our family owned business is built on trust and quality. Whether it is a small repair to a total redesign, Ski Jewelers completes the job right on our own premises. Our store offers one of the largest selections of fine jewelry in the area.</p>
            </article>

            <Map />

            <div>
                <h2 className="text-2xl font-bold mt-16 mb-5">Meet The Staff</h2>
                <div className="staff flex flex-wrap justify-around lg:px-24 mt-10 gap-6 mx-auto">
                    {staff.map((person, i) => (
                        <div key={i} className="person-card flex flex-col p-2 mx-auto">
                            <div className='staff-img'>
                                <img src={person.img} alt={person.name} />
                            </div>
                            <p className='mt-6 font-semibold text-lg'>{person.name}</p>
                            <p className='my-1 card-body'>{person.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About